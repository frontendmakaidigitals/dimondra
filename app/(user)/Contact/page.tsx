"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Mail, Building, Phone } from "lucide-react";
import { UserPlus, GraduationCap, ShieldCheck } from "lucide-react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { PhoneInput } from "../app_chunks/phone-input";
import { addToast } from "@heroui/toast";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { motion, AnimatePresence } from "motion/react";
import { Spinner } from "@heroui/spinner";
const Page = () => {
  const social = [
    <>
      <Link
        href={
          "https://www.instagram.com/insightvision.marketing?igsh=enp5bGcxc255MmJr"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white" // fill inside the shapes with white
          stroke="rgba(0, 0, 0, 1)" // semi-transparent black lines
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </Link>
    </>,
    <>
      <Link href={"https://www.facebook.com/share/1B8MhGwsoX/?mibextid=wwXIfr"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white" // fill inside the shapes with white
          stroke="rgba(0, 0, 0, 1)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook-icon lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </Link>
    </>,
    <>
      <Link href={"https://www.linkedin.com/company/insight-vision-marketing/"}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white" // fill inside the shapes with white
          stroke="rgba(0, 0, 0, 1)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>
    </>,
  ];

  const ourFeature = [
    {
      title: "Tailored Talent Acquisition",
      desc: "We identify and recruit top talent aligned with your organizational goals, ensuring cultural and skill fit.",
      icon: UserPlus, // Consider using an appropriate icon here
    },
    {
      title: "Employee Onboarding & Training",
      desc: "Streamlined onboarding processes and skill enhancement programs to help new hires integrate smoothly and grow quickly.",
      icon: GraduationCap, // Use a training/learning related icon
    },
    {
      title: "Compliance & HR Support",
      desc: "Ensure your HR policies are compliant with labor laws while we provide continued HR support and conflict resolution.",
      icon: ShieldCheck, // Icon indicating protection/compliance
    },
  ];

  const contact = [
    {
      title: "Email Support",
      desc: "Our Team responds in real time.",
      icon: Mail,
      contact: "Connect@dimondra.com",
    },
    {
      title: "Visit Our Office",
      desc: "Visit our office location",
      icon: Building,
      contact: "Jeddah, Dubai, UAE",
    },
    {
      title: "Call Us Directly",
      desc: "Available during working hours.",
      icon: Phone,
      contact: "0562787553",
    },
  ];

  return (
    <div className="pb-28 relative pt-32">
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-slate-800/70 via-slate-800/40 to-transparent from-[1%] via-[1%] to-[98%]" />

      <div
        className="absolute inset-0 
                bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] 
                [background-size:80px_80px] 
                pointer-events-none 
                z-0 
                [mask-image:linear-gradient(to_right,transparent_20%,black)] 
                [mask-repeat:no-repeat] 
                [mask-size:100%_100%]"
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-5xl grid-cols-1 grid lg:grid-cols-[1fr_1fr] gap-12 ">
        <div>
          <div>
            <h2 className="text-5xl font-[600] font-dmSans tracking-tighter">
              Get in Touch
            </h2>
            <p className="mt-2 mb-9 font-quicksand font-[600]">
              If you have any question. Feel free to write.
            </p>
          </div>
          <div className=" ">
            <Form />
          </div>
        </div>

        <div className="w-full h-full flex items-center">
          <div className="bg-[#5e8d9a] border-4 border-[#a9d3e0] flex rounded-2xl flex-col gap-2 p-2">
            {ourFeature.map(({ title, icon: Icon, desc }, idx) => (
              <div
                key={idx}
                className="space-y-2 p-5 bg-[#25515651] border border-teal-500/20 rounded-xl shadow-sm backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-teal-50" />
                  <p className="font-semibold text-lg text-teal-50 font-rubik">
                    {title}
                  </p>
                </div>
                <p className="text-sm text-teal-50 font-quicksand font-[600]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-28 max-w-5xl">
        <p className="text-[.7rem] border w-fit border-slate-500 rounded-full px-4 py-2">
          Reach Out to Us
        </p>
        <h1 className="mt-5 text-3xl font-[700]">
          We&apos;d Love to Hear From You.
        </h1>
        <p className=" mt-2">
          Or just reach out manually to{" "}
          <span className="text-indigo-500">connect@dimondra.com</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-11">
          {contact.map(({ title, desc, icon: Icon, contact }, idx) => {
            return (
              <div key={idx} className="">
                <div className="bg-dimondra-tealDark p-2 w-fit rounded-full">
                  <Icon className="w-6 h-6 text-dimondra-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-[500]">{title}</h3>
                  <p className="text-md mt-1 text-slate-600">{desc}</p>
                  <p className="mt-2">{contact}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;

const Form = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: { country: "", contact: "" },
    message: "",
  });
  interface formData {
    name: string;
    email: string;
    phone: { country: string; contact: string };
    message: string;
  }
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!formData.phone.contact) {
      setPhoneError(true);
      setLoading(false);
      return;
    }
    const data = new FormData();
    data.append("name", formData.firstName + " " + formData.lastName);
    data.append("email", formData.email);
    data.append("countryCode", formData.phone.country);
    data.append("contact", formData.phone.contact);
    data.append("message", formData.message);

    try {
      const db = getFirestore();
      const blogRef = collection(db, "contact");

      await addDoc(blogRef, {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        countryCode: formData.phone.country,
        contact: formData.phone.contact,
        message: formData.message,
        createdAt: new Date(),
      });

      setLoading(false);
      addToast({ title: "Form Sucessfully submitted", color: "success" });
    } catch (err) {
      console.error("Upload failed:", err);
      addToast({ title: "Something went wrong", color: "danger" });
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8"
    >
      <div className="w-full col-span-2 lg:col-span-1">
        <label className="text-dimondra-black font-[500]">
          First Name{" "}
          <Input
            isRequired
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            value={formData.firstName}
            className="w-full mt-[.4rem]"
            placeholder="John wick"
            name="firstName"
            classNames={{
              inputWrapper: [
                " border bg-dimondra-teal/5 border-dimondra-gray/30",
                "",
              ],
              input: [""],
            }}
            size={"lg"}
          />
        </label>
      </div>
      <div className="w-full col-span-2 lg:col-span-1">
        <label className="text-dimondra-black font-[500]">
          Last Name{" "}
          <Input
            isRequired
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            value={formData.lastName}
            className="w-full mt-[.4rem]"
            placeholder="John wick"
            name="lastName"
            classNames={{
              inputWrapper: [
                " border bg-dimondra-teal/5 border-dimondra-gray/30",
                "",
              ],
              input: [""],
            }}
            size={"lg"}
          />
        </label>
      </div>

      <div className="w-full col-span-2">
        <label htmlFor="tempInput" className="text-dimondra-black font-[500]">
          Phone
          <input className="hidden" id="tempInput" />
          <PhoneInput
            bgColor="!border bg-dimondra-teal/5 border-dimondra-gray/30"
            phoneError={phoneError}
            placeholder="+123 456 789"
            className="mt-[.4rem]"
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                phone: {
                  ...prev.phone,
                  contact: e,
                },
              }));
              setPhoneError(false);
            }}
            onCountryChange={(e) => {
              if (e) {
                setFormData((prev) => ({
                  ...prev,
                  phone: {
                    ...prev.phone,
                    country: e,
                  },
                }));
              }
            }}
            value={formData.phone.contact}
          
          />
          {phoneError ? (
            <span className="text-xs pl-1 text-danger">
              Please fill this field
            </span>
          ) : (
            ""
          )}
        </label>
      </div>
      <div className="w-full col-span-2">
        <label className="text-dimondra-black font-[500]">
          Email{" "}
          <Input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            classNames={{
              inputWrapper: [
                " border bg-dimondra-teal/5 border-dimondra-gray/30",
              ],
              input: ["py-2"],
            }}
            isRequired
            className="w-full mt-[.4rem]"
            placeholder="junior@heroui.com"
            type="email"
            name="email"
            size={"lg"}
          />
        </label>
      </div>
      <div className="w-full col-span-2">
        <label className="text-dimondra-black font-[500]">
          Message{" "}
          <Textarea
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
            className="w-full mt-[.4rem]"
            maxRows={13}
            minRows={5}
            placeholder="Enter your description"
            isRequired
            name="message"
            size={"lg"}
            classNames={{
              inputWrapper: [
                " border bg-dimondra-teal/5 border-dimondra-gray/30",
                "",
              ],
            }}
          />
        </label>
      </div>
      <div className="col-span-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <label
            htmlFor="terms"
            className={` text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
          >
            Accept terms and conditions
          </label>
        </div>

        <AnimatePresence mode="wait">
          <button
            type="submit"
            disabled={loading}
            className="mt-7 flex items-center rounded-full group pl-1 pr-5 py-1 text-dimondra-black hover:bg-dimondra-teal hover:border-slate-300/0 transition-all duration-300 border border-dimondra-gray"
          >
            <motion.span className=" size-11 flex justify-center items-center  mr-3 bg-black group-hover:bg-white  text-dimondra-white rounded-full">
              {!loading ? (
                <motion.span
                  key="arrow"
                  initial={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <ArrowRight className="group-hover:-rotate-45 transition-all group-hover:text-dimondra-black duration-300" />
                </motion.span>
              ) : (
                <motion.span
                  key="spinner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Spinner color="default" variant="gradient" size="sm" />
                </motion.span>
              )}
            </motion.span>
            {!loading ? (
              <span className="inline-block align-middle group-hover:text-dimondra-white">
                Get a Solution
              </span>
            ) : (
              <span className="inline-block align-middle group-hover:text-dimondra-white">
                Submitting
              </span>
            )}
          </button>
        </AnimatePresence>
      </div>
    </form>
  );
};
