"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Select, SelectItem } from "@heroui/react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { PhoneInput } from "../app_chunks/phone-input";
import { addToast } from "@heroui/toast";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { motion, AnimatePresence } from "motion/react";
import { Spinner } from "@heroui/spinner";
const Page = () => {
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

      <div className="max-w-7xl overflow-hidden mx-auto relative z-10 p-4  grid-cols-1 grid lg:grid-cols-[1fr_1fr]">
        <div className="bg-slate-50 rounded-xl relative z-10 p-10">
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

        <div className="w-full h-full hidden lg:flex items-center absolute inset-0 ">
          <img
            src={"/contactBG.png"}
            alt={""}
            className="w-full h-full object-cover scale-[1.08]"
          />
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default Page;

const Form = () => {
  const servicesList = [
    { key: "Staffing Solution", value: "Staffing Solution" },
    { key: "HR Operations", value: "HR Operations" },
    { key: "Virtual Admin Support", value: "Virtual Admin Support" },
    { key: "PRO & Government Services", value: "PRO & Government Services" },
    { key: "Organizational Planning", value: "Organizational Planning" },
    { key: "Talent Management", value: "Talent Management" },
    { key: "Business Management", value: "Business Management" },
    { key: "Legal Management", value: "Legal Management" },
    {
      key: "HR Certifications (aPHRi, PHRi...)",
      value: "HR Certifications (aPHRi, PHRi...)",
    },
    { key: "Career Advisory", value: "Career Advisory" },
    { key: "Call Center Support", value: "Call Center Support" },
    { key: "Facility Management", value: "Facility Management" },
    { key: "IT Support", value: "IT Support" },
    { key: "Digital Services", value: "Digital Services" },
  ];
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: { country: "", contact: "" },
    message: "",
    subject: "",
  });
  interface formData {
    name: string;
    email: string;
    phone: { country: string; contact: string };
    message: string;
    subject: string;
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
    data.append("subject", formData.subject);

    try {
      const db = getFirestore();
      const blogRef = collection(db, "contact");

      await addDoc(blogRef, {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        countryCode: formData.phone.country,
        contact: formData.phone.contact,
        message: formData.message,
        subject: formData.subject,
        createdAt: new Date(),
      });
      const resp = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          message: formData.message,
          contact: formData.phone.contact,
          createdAt: new Date(),
          countryCode: formData.phone.country,
          subject: formData.subject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
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
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-4"
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
          Subject{" "}
          <div>
            <Select
              id="subject"
              className="mt-[.4rem]"
              classNames={{
                trigger: " border bg-dimondra-teal/5 border-dimondra-gray/30",
              }}
              size="lg"
              label=""
              color="default"
              placeholder="Select a subject"
              selectedKeys={[formData.subject]} // optional: keeps selection in sync
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            >
              {servicesList.map((service) => (
                <SelectItem key={service.key}>{service.value}</SelectItem>
              ))}
            </Select>
          </div>
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

const ContactInfo = () => {
  return (
    <div className=" container mt-20">
      <h2 className="text-2xl font-semibold mb-4">Office Information</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
        <div className="grid grid-col-1 lg:grid-cols-2 text-sm text-gray-700 w-full gap-4">
          <div className=" bg-teal-700 rounded-xl p-4">
            <Phone className="text-slate-50 mb-2 size-10" />
            <span className="font-[500] text-dimondra-white text-[1.1rem]">
              +971 56 278 7553
            </span>
          </div>
          <div className=" bg-teal-700 rounded-xl p-4">
            <Mail className="text-slate-50 mb-2 size-10" />
            <span className="font-[500] text-dimondra-white text-[1.1rem]">
              Connect@dimondra.com
            </span>
          </div>
          <address
            className="not-italic bg-teal-700 rounded-xl space-y-4 p-4 py-[0.7rem] col-span-2 text-dimondra-white"
            aria-label="Our office locations"
          >
            <MapPin className="text-slate-50 mb-3 size-10" aria-hidden="true" />

            <ul className="space-y-3">
              <li className="flex items-start gap-2 ml-3">
                <span className="w-2 h-3 bg-dimondra-white rounded-full mt-1 shrink-0" />
                <p className="font-medium text-[1.1rem]">
                  UAE – SPC, E311, Sheikh Mohammed Bin Zayed Rd, Al Zahia,
                  Sharjah, U.A.E
                </p>
              </li>

              <li className="flex items-start gap-2 ml-3">
                <span className="w-2 h-3 bg-dimondra-white rounded-full mt-1 shrink-0" />
                <p className="font-medium text-[1.1rem]">
                  KSA – Riyadh – Olya Street – As Sahafa – 13321
                </p>
              </li>
            </ul>
          </address>
        </div>

        <div className="w-full h-full">
          <iframe
            title="Google Map showing Sharjah Publishing City"
            className="w-full h-full rounded-xl"
            src="https://maps.google.com/maps?q=Sharjah%20Publishing%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
