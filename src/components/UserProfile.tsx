"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  BellIcon,
  LogOutIcon,
  PenIcon,
  SettingsIcon,
  User,
} from "lucide-react";
import { getUserOrders } from "@/lib/action";
import { Order } from "@/app/Types";

const UserProfile = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user) {
      setUserId(session.user.id || "Id Not Found");
      setName(session.user.name || "");
      setEmail(session.user.email || "");
      setImage(session.user.image || "");
    }
  }, [session]);
  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      const fetchOrders = async () => {
        try {
          const data = await getUserOrders(userId);
          setOrders(data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchOrders();
    }
  }, [session, status, userId]);
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const res = await fetch("/api/update-profile", {
        method: "POST",
        body: JSON.stringify({ name }),
      });
      if (res.ok) {
        setOpen(false);
      } else {
        console.error("Data couldnot upload");
      }
    } catch (error) {
      console.error("Data couldnot upload", error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-screen p-6">
      {/* Profile Card */}
      <div className=" md:w-1/4 py-4 rounded-lg bg-white ">
        <CardContent className="flex items-center gap-3">
          <Image
            src={image || "/images/user.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </CardContent>
        <CardContent className="mt-4 space-y-3">
          <div className="flex gap-2 items-center">
            <User />
            <button
              onClick={() => setOpen(true)}
              className="w-full text-left p-2 hover:bg-gray-100 rounded"
            >
              My Profile
            </button>
          </div>
          <DropdownMenu>
            <div className="flex gap-2 items-center">
              <SettingsIcon />
              <DropdownMenuTrigger className="w-full text-left p-2 hover:bg-gray-100 rounded">
                Settings
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <DropdownMenu>
            <div className="flex gap-2 items-center">
              <BellIcon />
              <DropdownMenuTrigger className="w-full text-left p-2 hover:bg-gray-100 rounded">
                Notification
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Allow</DropdownMenuItem>
                <DropdownMenuItem>Mute</DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <div className="flex gap-2 items-center">
            <LogOutIcon />
            <button
              className="w-full text-left p-2 hover:bg-gray-100 rounded text-red-500"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Log Out
            </button>
          </div>
        </CardContent>
      </div>

      {/* user orders section */}
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Orders</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li
                key={order.userId}
                className="p-4 mb-2 border rounded-lg shadow-sm"
              >
                <p>
                  Total Price: <strong>${order.totalPrice}</strong>
                </p>
                <p>
                  Status: <span className="text-blue-500">{order.status}</span>
                </p>
                <p>Ordered On: {new Date(order.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
      {/* Profile Modal */}
      <form onSubmit={handleUpdateProfile}>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-96 p-6 bg-white rounded-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 relative">
                <div>
                  <Label
                    htmlFor="file"
                    className="cursor-pointer absolute top-0 left-16"
                  >
                    <PenIcon className="w-4 opacity-50 hover:opacity-100" />
                  </Label>
                  <Input
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setImage(URL.createObjectURL(e.target.files[0]));
                      }
                      return; // Explicit return (optional but helps avoid ESLint warnings)
                    }}
                    className="hidden"
                  />
                </div>
                <Image
                  src={image || "/images/user.png"}
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div className="flex items-center gap-4 justify-between">
                <Label>Name</Label>
                <Input
                  type="text"
                  className="text-gray-900 outline-none focus:ring-2 px-2"
                  placeholder={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                <Label>Mobile</Label>
                <Input
                  type="number"
                  className="text-gray-900 outline-none focus:ring-2 px-2"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                <Label>Location</Label>
                <Input
                  type="text"
                  className="text-gray-900 outline-none focus:ring-2 px-2"
                  placeholder="USA"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4 w-full bg-blue-500 text-white"
            >
              Save Change
            </Button>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};

export default UserProfile;
