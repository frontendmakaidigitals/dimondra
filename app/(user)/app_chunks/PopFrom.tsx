"use client";
import React, { useState, FormEvent, useEffect, useRef } from "react";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { ArrowRight, Headset, Mail, X } from "lucide-react";

import { PhoneInput } from "../app_chunks/phone-input";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { Spinner } from "@heroui/spinner";
import { addToast } from "@heroui/toast";
const PopForm = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
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
      return;
    }
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("countryCode", formData.phone.country);
    data.append("contact", formData.phone.contact);
    data.append("message", formData.message);

    try {
      const db = getFirestore();
      const blogRef = collection(db, "contact");

      await addDoc(blogRef, {
        name: formData.name,
        email: formData.email,
        countryCode: formData.phone.country,
        contact: formData.phone.contact,
        message: formData.message,
        createdAt: new Date(),
      });
      const resp = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          contact: formData.phone.contact,
          createdAt: new Date(),
          countryCode: formData.phone.country,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      setIsOpen(false);
      addToast({ title: "Form Sucessfully submitted", color: "success" });
    } catch (err) {
      console.error("Upload failed:", err);
      addToast({ title: "Something went wrong", color: "danger" });
      setLoading(false);
    }
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  // ✳️ Disable scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ✳️ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div className=" z-[999] fixed inset-0 w-screen h-screen flex justify-center items-center bg-slate-900/70 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 100 }}
            transition={{ ease: [[0.165, 0.84, 0.44, 1]], duration: 0.6 }}
            className="container w-full !p-0 grid grid-cols-1 lg:grid-cols-2 rounded-xl relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="bg-slate-50 hover:bg-red-500 transition-colors duration-250  absolute p-1 cursor-pointer right-0 -top-8"
            >
              <X className="  " />
            </button>
            <img
              alt={""}
              src={"/services/facilityhero.webp"}
              className="w-full hidden lg:block h-full object-cover"
            />

            <div ref={wrapperRef} className="bg-dimondra-white p-5">
              <h1 className="text-4xl font-dmSans tracking-tighter font-[600] text-dimondra-black mt-3">
                Get in Touch with Us
              </h1>

              <div className=" mt-5 overflow-auto">
                <form onSubmit={(e) => handleSubmit(e)} className=" ">
                  <div className="mt-5">
                    <label className="text-dimondra-black font-[500]">
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
                          inputWrapper: ["bg-slate-100 ", ""],
                          input: [""],
                        }}
                        size={"lg"}
                      />
                    </label>
                  </div>
                  <div className="mt-5">
                    <label className="text-dimondra-black font-[500]">
                      Email{" "}
                      <Input
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        value={formData.email}
                        classNames={{
                          inputWrapper: ["bg-slate-100"],
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
                  <div className="mt-5">
                    <label
                      htmlFor="tempInput"
                      className="text-dimondra-black font-[500]"
                    >
                      Phone
                      <input className="hidden" id="tempInput" />
                      <PhoneInput
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
                  <div className="mt-5">
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
                        classNames={{ inputWrapper: ["bg-slate-100 ", ""] }}
                      />
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
                            <Spinner
                              color="default"
                              variant="gradient"
                              size="sm"
                            />
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
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PopForm;
