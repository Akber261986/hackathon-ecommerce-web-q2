"use client";

// import { useState, useEffect } from "react";
// import { OctagonAlert, PenIcon } from "lucide-react";
// import Image from "next/image";
// import { useUser } from "@clerk/nextjs";

export default function ProfileUpdate() {
  // const session = useUser();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [image, setImage] = useState<File | null>(null);
  // const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);
  // const [mobile, setMobile] = useState("");
  // const [location, setLocation] = useState("");
  // const [message, setMessage] = useState("");
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   if (session.isSignedIn) {
  //     setEmail(session.user.primaryEmailAddress?.emailAddress || "");
  //     setName(session.user.fullName || "");
  //   }
  // }, [session]);

  // const handleUpdateProfile = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     let base64Image = null;
  //     if (image) {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(image);
  //       base64Image = await new Promise((resolve) => {
  //         reader.onloadend = () => resolve(reader.result?.toString().split(",")[1]);
  //       });
  //     }
  //     const res = await fetch("/api/update-profile", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         mobile,
  //         location,
  //         image: base64Image,
  //       }),
  //     });
  //     if (res.ok) {
  //       setMessage("Profile Updated Successfully");
  //     } else {
  //       setError("Profile Update Failed");
  //     }
  //     setTimeout(() => {
  //       setMessage("");
  //       setError("");
  //     }, 4000);
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex">
      {/* {message && (
        <div className="fixed right-4 top-10 text-green-500 bg-[#cef5ce] dark:bg-[#363333] rounded-lg shadow-md px-8 py-5 z-10 flex gap-4">
          <Image src="/icons/circle-check-solid.svg" alt="check" width={20} height={20} />
          <p>{message}</p>
        </div>
      )}
      {error && (
        <div className="fixed right-4 top-10 text-red-500 bg-[#f5ced5] dark:bg-[#363333] rounded-lg shadow-md px-8 py-5 z-10 flex gap-4">
          <OctagonAlert />
          <p>{error}</p>
        </div>
      )} */}
      {/* <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="file" className="cursor-pointer relative">
              <div className="absolute top-0 -right-2 p-1">
                <PenIcon size={16} className="opacity-50" />
              </div>
              <input
                type="file"
                id="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage(file);
                    setImagePreview(URL.createObjectURL(file));
                    e.target.value = "";
                  }
                }}
              />
              <Image
                src={imagePreview || "/images/user.png"}
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
            </label>
            <div>
              <p className="font-semibold">{name || "Your Name"}</p>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="col-span-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={name || ""}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded-md focus:ring-2"
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="tel"
                value={mobile}
                placeholder="Your Mobile Number"
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                className="w-full border p-2 rounded-md focus:ring-2"
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                value={location || ""}
                placeholder="Your Location"
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border p-2 rounded-md focus:ring-2"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div> */}
      Will update soon
    </div>
  );
}
