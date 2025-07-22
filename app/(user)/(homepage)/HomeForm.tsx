"use client";
import React, { useState, FormEvent } from "react";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { ArrowRight, Headset, Mail } from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { PhoneInput } from "../app_chunks/phone-input";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { Spinner } from "@heroui/spinner";
import { addToast } from "@heroui/toast";
import { Select, SelectItem } from "@heroui/react";
const HomeForm = () => {
  useSplitText({
    selector: ".formText1",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".formTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".formText2",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".formTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".formText3",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".formTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  const servicesList = [
    { key: "hr-outsourcing", label: "HR Outsourcing" },
    { key: "remote-workforce", label: "Remote Workforce" },
    { key: "executive-search", label: "Executive Search" },
    { key: "rpo", label: "RPO" },
    { key: "government-relations", label: "Government Relations" },
    { key: "business-support", label: "Business Support" },
    { key: "it-digital-services", label: "IT & Digital Services" },
    { key: "strategy-advisory", label: "Strategy & Advisory" },
    {
      key: "workplace-facilities",
      label: "Workplace & Facilities Outsourcing Services",
    },
  ];

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
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
      return;
    }
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("countryCode", formData.phone.country);
    data.append("contact", formData.phone.contact);
    data.append("message", formData.message);
    data.append("subject", formData.subject);

    try {
      const db = getFirestore();
      const blogRef = collection(db, "contact");
      const resp = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
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
      await addDoc(blogRef, {
        name: formData.name,
        email: formData.email,
        countryCode: formData.phone.country,
        contact: formData.phone.contact,
        message: formData.message,
        subject: formData.subject,
        createdAt: new Date(),
      });

      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: { country: "", contact: "" },
        message: "",
        subject: "",
      });
      addToast({ title: "Form Sucessfully submitted", color: "success" });
    } catch (err) {
      console.error("Upload failed:", err);
      addToast({ title: "Something went wrong", color: "danger" });
      setLoading(false);
    }
  };

  return (
    <div className="pt-12 pb-16">
      <div className="container max-w-7xl formTrigger grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="max-w-md">
          <span className="text-sm font-quicksand font-[500] formText1 text-dimondra-black">
            We&nbsp;re here to help you
          </span>
          <h1 className="text-5xl formText2 lg:text-6xl font-dmSans tracking-tighter font-[600] text-dimondra-black mt-3">
            Get in Touch with Us
          </h1>
          <p className="text-dimondra-black font-quicksand font-[600] mt-4 formText3">
            We&nbsp;d love to hear from you! Whether you&nbsp;re looking for a
            service, partnership, or simply have a question, reach out and
            we&nbsp;ll get back to you shortly.
          </p>

          <div className="mt-14">
            <div className="flex items-start gap-5">
              <Mail className="size-8 text-dimondra-black" />
              <div className="text-dimondra-black">
                <h4 className=" font-[600] text-lg">Email</h4>
                <p className="text-sm ">Connect@dimondra.com</p>
              </div>
            </div>
            <div className="flex items-start gap-5 mt-5">
              <Headset className="size-8 text-dimondra-black" />
              <div className="text-dimondra-black">
                <h4 className=" font-[600] text-lg">Phone Number</h4>
                <p className="text-sm ">0562787553</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-dimondra-black border border-slate-400 p-7 rounded-3xl shadow-sm">
            <form onSubmit={(e) => handleSubmit(e)} className=" space-y-8">
              <div className="">
                <label className="text-dimondra-white font-rubik text-lg font-[500]">
                  Name{" "}
                  <Input
                    isRequired
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    value={formData.name}
                    className="w-full mt-[.4rem]"
                    placeholder="John wick"
                    name="name"
                    classNames={{
                      inputWrapper: ["bg-dimondra-white", ""],
                      input: [""],
                    }}
                    size={"lg"}
                  />
                </label>
              </div>
              <div className="">
                <label className="text-dimondra-white font-rubik font-[500] text-lg">
                  Email{" "}
                  <Input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    value={formData.email}
                    classNames={{
                      inputWrapper: ["bg-dimondra-white"],
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
              <div className="">
                <label
                  htmlFor="tempInput"
                  className="text-dimondra-white font-rubik font-[500] text-lg"
                >
                  Phone
                  <input className="hidden" id="tempInput" />
                  <PhoneInput
                    phoneError={phoneError}
                    placeholder="+123 456 789"
                    className="mt-[.4rem] text-dimondra-black"
                    bgColor="bg-dimondra-white"
                    color="text-red-500"
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
              <div className="">
                <label
                  htmlFor="subject"
                  className="text-dimondra-white font-rubik font-[500] text-lg"
                >
                  Subject{" "}
                  <div>
                    <Select
                      id="subject"
                      className="mt-[.4rem]"
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
                        <SelectItem key={service.key}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </label>
              </div>
              <div className="">
                <label className="text-dimondra-white font-rubik font-[500] text-lg">
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
                    classNames={{ inputWrapper: ["bg-dimondra-white", ""] }}
                  />
                </label>
              </div>
              <AnimatePresence mode="wait">
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 flex items-center rounded-full group pl-1 pr-5 py-1 text-dimondra-white hover:bg-dimondra-teal hover:border-slate-300/0 transition-all duration-300 border border-dimondra-gray"
                >
                  <motion.span className=" size-11 flex justify-center items-center  mr-3 bg-white group-hover:bg-black  text-dimondra-black rounded-full">
                    {!loading ? (
                      <motion.span
                        key="arrow"
                        initial={{ rotate: 0 }}
                        exit={{ rotate: 180 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      >
                        <ArrowRight className="group-hover:-rotate-45 transition-all group-hover:text-dimondra-white  duration-300" />
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
                    <span className="inline-block align-middle group-hover:text-dimondra-black">
                      Get a Solution
                    </span>
                  ) : (
                    <span className="inline-block align-middle group-hover:text-dimondra-black">
                      Submitting
                    </span>
                  )}
                </button>
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
