import React from "react";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { ArrowRight, Headset, Mail } from "lucide-react";
const HomeForm = () => {
  return (
    <div className="py-24 bg-slate-100">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="max-w-md">
          <span className="text-sm text-dimondra-dark">
            We&nbsp;re here to help you
          </span>
          <h1 className="text-6xl font-[600] text-dimondra-black mt-3">
            Get in Touch with Us
          </h1>
          <p className="text-dimondra-dark mt-4">
            We&nbsp;d love to hear from you! Whether you&nbsp;re looking for a
            service, partnership, or simply have a question, reach out and
            we&nbsp;ll get back to you shortly.
          </p>

          <div className="mt-14">
            <div className="flex items-start gap-5">
              <Mail className="size-8 text-dimondra-tealDark" />
              <div>
                <h4 className=" font-[400]">Email</h4>
                <p className="text-lg text-muted-foreground">admin@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-5 mt-5">
              <Headset className="size-8 text-dimondra-tealDark" />
              <div>
                <h4 className=" font-[400]">Phone Number</h4>
                <p className="text-lg text-muted-foreground">+12 12345 67890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-dimondra-white p-7 rounded-2xl shadow-sm">
            <form className=" ">
              <div className="mt-5">
                <label className="text-dimondra-black font-[500]">
                  Name{" "}
                  <Input
                    isRequired
                    className="w-full mt-[.4rem]"
                    placeholder="junior@heroui.com"
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
                <label className="text-dimondra-black font-[500]">
                  Phone{" "}
                  <Input
                    isRequired
                    classNames={{
                      inputWrapper: ["bg-slate-100"],
                      input: ["py-2"],
                    }}
                    className="w-full mt-[.4rem]"
                    placeholder="junior@heroui.com"
                    type="number"
                    name="contact"
                    size={"lg"}
                  />
                </label>
              </div>
              <div className="mt-5">
                <label className="text-dimondra-black font-[500]">
                  Message{" "}
                  <Textarea
                    className="w-full mt-[.4rem]"
                    maxRows={13}
                    minRows={5}
                    placeholder="Enter your description"
                    name="message"
                    size={"lg"}
                    classNames={{ inputWrapper: ["bg-slate-100 ", ""] }}
                  />
                </label>
              </div>
              <button className="mt-7 rounded-full group pl-1 pr-5 py-1 text-dimondra-black hover:bg-dimondra-teal hover:border-slate-300/0 transition-all duration-300 border border-dimondra-gray">
                <span className="inline-block align-middle p-2 mr-3 bg-black group-hover:bg-white  text-dimondra-white rounded-full">
                  <ArrowRight className="group-hover:-rotate-45 transition-all group-hover:text-dimondra-black duration-300" />
                </span>
                <span className="inline-block align-middle group-hover:text-dimondra-white">
                  Get a Solution
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
