"use client";

import { useState } from "react";
import Image from "next/image";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Signup() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle submission of the sign-up form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;
    setLoading(true)
    // Start the sign-up process using the email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });
      await signUp.update({ unsafeMetadata: { fullName: name } });

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setLoading(false)
      // Set 'verifying' true to display second form
      // and capture the OTP code
      setVerifying(true);
    } catch (err) {
      // Display proper error messages
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("Failed to sign up. Please try again.");
      }
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
        await setActive({ session: completeSignUp.createdSessionId });
        setTimeout(() => {
          setMessage("Signup Successfull");
        }, 4000);
        router.push("/");
        setMessage("");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        setError("Varification code doesn't match");
      }
    } catch (err) {
      // Display proper error messages
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("Something Went Wrong. Please try again.");
      }
    }
  };

  // Display the verification form to capture the OTP code
  if (verifying) {
    return (
      <div className="flex flex-col items-center mt-4">
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
        <h1 className="text-xl font-semibold">Verify your Email</h1>
        <form onSubmit={handleVerify} className="flex flex-col space-y-3 mt-6">
          <label id="code">We sent a varification code on your Email</label>
          <input
            value={code}
            id="code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Your Varification Code"
            className="border border-gray-400 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="bg-pink-500 px-8 py-2 rounded text-white hover:bg-pink-600"
          >
            Verify
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-6 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Sign Up</span>
        </p>
      </div>
      <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg p-6 space-y-8 font-lato text-[#3a3c46]">
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
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <div className="relative">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-3 mt-1"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-5 text-gray-600"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* CAPTCHA Widget */}
          <div id="clerk-captcha"></div>
          {loading ? (
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
