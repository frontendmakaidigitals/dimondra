"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import SmallLoadingSpinner from "../app_chunks/Spinner";
import { cn } from "@/lib/utils";
import { Mail, Building, Phone } from "lucide-react";
import { Settings, Code, LifeBuoy } from "lucide-react";
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
      title: "Customized software solutions",
      desc: "Tailor-made applications designed to meet your unique business needs and scale as you grow.",
      icon: Settings,
    },
    {
      title: "Expertise in latest technologies",
      desc: "Leverage modern frameworks and tools for faster development, better performance, and future-proof solutions.",
      icon: Code,
    },
    {
      title: "Support and maintenance",
      desc: "Ongoing support and regular updates to ensure your software remains secure, efficient, and up-to-date.",
      icon: LifeBuoy,
    },
  ];
  const contact = [
    {
      title: "Email Support",
      desc: "Our Team responds in real time.",
      icon: Mail,
      contact: "company@example.com",
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
      contact: "+97 1234 5678",
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8 ">
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
          We&nbsp;d Love to Hear From You.
        </h1>
        <p className=" mt-2">
          Or just reach out manually to{" "}
          <span className="text-indigo-500">company@example.com</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-11">
          {contact.map(({ title, desc, icon: Icon, contact }, idx) => {
            return (
              <div key={idx} className="">
                <div className="bg-dimondra-teal p-2 w-fit rounded-full">
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [checkbox, setCheckBox] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    checked: false,
  });
  const [status, setStatus] = useState("");

  const validate = () => {
    const tempErrors = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      checked: false,
    };
    if (!formData.firstName.trim())
      tempErrors.firstName = "First Name is required";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    if (!checkbox) tempErrors.checked = true;
    setErrors(tempErrors);
    const hasErrors = Object.values(tempErrors).some(
      (error) => error !== "" && error !== false
    );
    return !hasErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) {
      return errors;
    }
    setStatus("Sending...");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("ok");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        }); // Reset form
        setCheckBox(false);
      } else {
        setStatus("Failed to send email");
      }
    } catch (error) {
      setStatus("Failed to send email");
    }
  };

  return (
    <>
      <div className="w-full col-span-2 lg:col-span-1">
        <label htmlFor="firstName">First Name</label>
        <input
          id={"firstName"}
          name={"firstName"}
          value={formData.firstName}
          onChange={handleChange}
          className="text-sm mt-1 w-full border bg-dimondra-teal/5 border-dimondra-gray/30 rounded-md px-3 block py-[.7rem]"
          placeholder="First name"
        />
        {errors.firstName && (
          <p className="text-red-600 text-sm">{errors.firstName}</p>
        )}
      </div>
      <div className="w-full col-span-2 lg:col-span-1">
        <label htmlFor="lastName">Last Name</label>
        <input
          id={"lastName"}
          name={"lastName"}
          value={formData.lastName}
          onChange={handleChange}
          className="text-sm mt-1 w-full border bg-dimondra-teal/5 border-dimondra-gray/30 rounded-md px-3 block py-[.7rem]"
          placeholder="Last name"
        />
        {errors.lastName && (
          <p className="text-red-600 text-sm">{errors.lastName}</p>
        )}
      </div>
      <div className="w-full col-span-2">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type={"number"}
          onChange={handleChange}
          placeholder="+000000"
          name="phone"
          value={formData.phone}
          className="text-sm mt-1 w-full border bg-dimondra-teal/5 border-dimondra-gray/30 rounded-md px-3 block py-[.7rem]"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>
      <div className="w-full col-span-2">
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          name={"email"}
          id={"email"}
          value={formData.email}
          onChange={handleChange}
          className="text-sm mt-1 w-full border bg-dimondra-teal/5 border-dimondra-gray/30 rounded-md px-3 block py-[.7rem]"
          placeholder="you@email.com"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>
      <div className="w-full col-span-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={6}
          className="text-sm mt-1 w-full resize-none bg-dimondra-teal/5 border dimondra-border-dimondra-gray/30/40 rounded-md px-3 block py-[.7rem]"
          placeholder="Leave us a message"
          value={formData.message}
          name={"message"}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message}</p>
        )}
      </div>
      <div className="col-span-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={checkbox}
            onCheckedChange={() => {
              setErrors((prev) => ({
                ...prev, // Keep existing errors
                checked: false, // Update checked error
              }));
              setCheckBox(!checkbox);
            }}
          />
          <label
            htmlFor="terms"
            className={`${
              errors.checked ? "text-red-500" : ""
            } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
          >
            Accept terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className={cn(
            `border border-slate-400 w-full transition-all duration-200 hover:bg-Palette-20 hover:text-indigo-50 cursor-pointer mt-10 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,
            status === "ok" && "bg-Palette-20 text-indigo-200",
            status === "Failed to send email" && "border-red-500"
          )}
          disabled={status === "Sending..." || status === "ok"}
          onClick={handleSubmit}
        >
          {status === "Sending..." ? (
            <>
              <SmallLoadingSpinner />
              Sending...
            </>
          ) : status === "ok" ? (
            "Submitted Sucessfully"
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </>
  );
};
