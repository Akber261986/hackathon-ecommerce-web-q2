"use client";

import { useState } from "react";
import Image from "next/image";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle submission of the sign-up form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    // Start the sign-up process using the email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      // Set 'verifying' true to display second form
      // and capture the OTP code
      setVerifying(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setError( "Failed!")
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle the submission of the verification form
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (completeSignUp.status === "complete") {
        setMessage("Signup Successfull");
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  // Display the verification form to capture the OTP code
  if (verifying) {
    return (
      <>
        <h1>Verify your email</h1>
        <form onSubmit={handleVerify}>
          <label id="code">Enter your verification code</label>
          <input
            value={code}
            id="code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit">Verify</button>
        </form>
      </>
    );
  }

  return (
    <div>
      {message && (
        <div
          className={`text-center text-green-500 bg-[#cef5ce] dark:bg-[#363333] fixed right-4 top-10 transform duration-500 ease-out origin-right ${message ? "scale-100" : ""} rounded-lg shadow-md dark:shadow-[#a6ff95] font-bold px-8 md:px-10 py-5 z-10 flex gap-4`}
        >
          <Image
            src={"/icons/circle-check-solid.svg"}
            alt="check"
            width={20}
            height={20}
          />
          <p className="scrolLineGreen">{message}</p>
        </div>
      )}
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-6 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Sign Up</span>
        </p>
      </div>
      <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg p-6 space-y-8 font-lato text-[#9096B2]">
        <div>
          <h1 className="text-2xl font-bold font-sans text-black text-center">
            Create Accout
          </h1>
          <p className="text-center">Please Entre your detail bellow.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              id="name"
              type="name"
              required
              placeholder="Enter your Name"
              className="w-full border rounded px-3 py-3 mt-1"
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              required
              name="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-3 mt-1"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded px-3 py-3 mt-1"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* CAPTCHA Widget */}
          <div id="clerk-captcha"></div>
          {!isLoaded ? (
            <div className="flex items-center justify-center bg-[#FB2E86] rounded py-2">
              <span className="absolute text-white">Loading...</span>
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
              ></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-3 rounded hover:bg-[#f84f98]"
            >
              Sign Up
            </button>
          )}
          <Link href="login">
            <p className="py-3 mt-1 text-center">
              Already have an Account? Login
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
