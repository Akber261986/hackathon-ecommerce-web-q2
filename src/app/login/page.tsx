"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useSignIn } from '@clerk/nextjs'


export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter()

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState('')
  const [useBackupCode, setUseBackupCode] = useState(false)
  // const [displayTOTP, setDisplayTOTP] = useState(false)

  // Handle user submitting email and pass and swapping to TOTP form
  const handleFirstStage = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message
  
    if (!isLoaded) return;
  
    try {
      // Start sign-in process
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });
  
     if (signInAttempt.status === "complete") {
        // If sign-in is successful without TOTP, set session and redirect
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        console.log(signInAttempt);
      }
    } catch (err: any) {
      console.error("Error:", err);
  
      // Display proper error messages
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }
  };
  

  // Handle the submission of the TOTP of Backup Code submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {
      await signIn.create({
        identifier: email,
        password,
      })

      // Attempt the TOTP or backup code verification
      const signInAttempt = await signIn.attemptSecondFactor({
        strategy: useBackupCode ? 'backup_code' : 'totp',
        code: code,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.push('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.log(signInAttempt)
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setError("Failed to signin")
      console.error('Error:', JSON.stringify(err, null, 2))
    }
  }
  // if (displayTOTP) {
  //   return (
  //     <div>
  //       <h1>Verify your account</h1>
  //       <form onSubmit={(e) => handleSubmit(e)}>
  //         <div>
  //           <label htmlFor="code">Code</label>
  //           <input
  //             onChange={(e) => setCode(e.target.value)}
  //             id="code"
  //             name="code"
  //             type="text"
  //             value={code}
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="backupcode">This code is a backup code</label>
  //           <input
  //             onChange={() => setUseBackupCode((prev) => !prev)}
  //             id="backupcode"
  //             name="backupcode"
  //             type="checkbox"
  //             checked={useBackupCode}
  //           />
  //         </div>
  //         <button type="submit">Verify</button>
  //       </form>
  //     </div>
  //   )
  // }
  return (
    <div>
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-4 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">My Account</h1>
        <p className="flex gap-2">
          <span>Home.</span>
          <span>Page.</span>
          <span className="text-[#FB2E86]">My Account</span>
        </p>
      </div>
      <div className="max-w-md mx-auto mb-10 bg-white shadow-lg rounded-lg p-6 space-y-8 font-lato text-[#61636b]">
        <div>
          <h1 className="text-2xl font-bold font-sans text-black text-center">
            Login
          </h1>
          <p className="text-center">
            Please login using account detail bellow.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => handleFirstStage(e)}>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-3 mt-1"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              id="password"
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="w-full border rounded px-3 py-3 mt-1"
            />
          </div>
          <Link href="">
            <p className="py-3 mt-1 text-blue-400 hover:text-blue-600">
              Forgot your password?
            </p>
          </Link>
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!isLoaded ? (
            <div className="flex items-center justify-center bg-[#FB2E86] rounded py-2">
              <span className="absolute text-white">
                Loading...
              </span>
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
              >
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-3 rounded hover:bg-[#f84f98]"
            >
              Sign In
            </button>
          )}
          <Link href="signup">
            <p className="pt-3 mt-1 text-center">
              Don&apos;t have an Account? Create account
            </p>
          </Link>
        </form>
        <div className="place-self-center">
          ----------------- Or -----------------
        </div>
        <button
          // onClick={() => signIn("google")}
          className="px-4 py-1  text-black rounded flex items-center justify-center gap-6 w-full border"
        >
          <Image
            src={"/images/google-logo.png"}
            alt="Google"
            width={1024}
            height={1024}
            className="w-10 h-10 rounded-full"
          />
          <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}
