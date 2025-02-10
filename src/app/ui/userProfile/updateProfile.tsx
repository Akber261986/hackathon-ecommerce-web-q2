"use client";

import { useState } from "react";
import { OctagonAlert, PenIcon } from "lucide-react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function ProfileUpdate() {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [phone, setPhone] = useState(
    user?.primaryPhoneNumber?.phoneNumber || ""
  );
  const [image, setImage] = useState(user?.imageUrl || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

   
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user ) return;
  
    setLoading(true);
    setMessage("");
    setError("");
    if (!firstName || !lastName){
      setError("Name fields Shouldn't Blank")
      setLoading(false)
      setTimeout(() => {
        setError("")
      }, 4000);
      return
    }
    try {
      // Prepare updates
      const updates = {
        firstName,
        lastName,
      };
      // Update user profile
      await user.update(updates);
  
      // If there's an image file, update profile picture
      if (imageFile) {
        await user.setProfileImage({ file: imageFile });
      }
      setFirstName("")
      setLastName("")
      setPhone("")
      setImageFile(null)
      setMessage("Profile updated successfully! ");
      setTimeout(() => {
        setMessage("")
      }, 4000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile ");
      setTimeout(() => {
        setError("")
      }, 4000);
    }
  
    setLoading(false);
  };
  
  // Handle Image Upload (Now Updates in handleUpdateProfile)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    setImageFile(file); // Store file for later upload
  
    // Preview image
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImage(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <div className="flex">
      {message && (
        <div className={`text-center text-green-500 bg-[#cef5ce] dark:bg-[#363333] fixed right-4 top-10 transform duration-500 ease-out origin-right ${message ? "scale-100" : ""} rounded-lg shadow-md dark:shadow-[#a6ff95] font-bold px-8 md:px-10 py-5 z-10 flex gap-4`}>
          <Image
            src="/icons/circle-check-solid.svg"
            alt="check"
            width={20}
            height={20}
          />
          <p className="scrolLineGreen">{message}</p>
        </div>
      )}
      {error && (
        <div className={`text-center text-red-500 bg-[#f5d3ce] dark:bg-[#363333] fixed right-4 top-10 transform duration-500 ease-out origin-right ${error ? "scale-100" : ""} rounded-lg shadow-md dark:shadow-[#ff9595] font-bold px-8 md:px-10 py-5 z-10 flex gap-4`}>
          <OctagonAlert />
          <p className="scrolLineRed">{error}</p>
        </div>
      )}
      <div className="bg-white px-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="file" className="cursor-pointer relative">
              <div className="absolute bottom-2 -right-2 p-1">
                <PenIcon size={16} className="opacity-50" />
              </div>
              <input
                type="file"
                id="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Image
                src={image || "/images/user.png"}
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
            </label>
            <div>
              <p className="font-semibold">{user?.fullName == null ? "Your Name" : `${user?.fullName}`}</p>
              <p className="text-sm text-gray-500">
                {user?.primaryEmailAddress?.emailAddress || ""}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-4">
              <label className="block text-sm font-medium m-2">First Name</label>
              <input
                type="text"
                value={firstName || ""}
                placeholder="Your First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border p-2 rounded-md focus:ring-2"
              />
            </div>
            <div className="col-span-4">
              <label className="block text-sm font-medium m-2">Last Name</label>
              <input
                type="text"
                value={lastName || ""}
                placeholder="Your Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border p-2 rounded-md focus:ring-2"
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <label className="block text-sm font-medium m-2">Mobile</label>
              <input
                type="tel"
                value={phone}
                placeholder="Your Mobile Number"
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="w-full border p-2 rounded-md focus:ring-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

