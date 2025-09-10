// app/blog/[slug]/BlogClient.tsx
"use client";
import {
  User,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  Forward,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { usePathname } from "next/navigation";
import Blogs from "../../(homepage)/Blogs";
import { Editor } from "@/components/blocks/editor-00/editor";
import { Divider } from "@heroui/divider";
export default function BlogClient({ blog }: { blog: any }) {
  const pathname = usePathname();
  const blogURL = `https://dimondra.com/${pathname}`;
  const blogTitle = blog?.title || "";

  function calculateReadTime(text: string) {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  return (
    <main className="pt-28 relative container ">
      <div className="flex flex-col items-center">
        <p className="p-2 text-xs bg-teal-100 text-teal-700 rounded-lg font-bold font-quicksand text-center mb-2">
          {blog?.category}
        </p>
        <h1 className="text-4xl max-w-4xl lg:text-6xl tracking-tighter font-[600] text-center">
          {blog?.title}
        </h1>
      </div>

      <div className="flex flex-col items-center mt-8">
        {/* Blog Info */}
        <ul className="flex flex-row  justify-between lg:justify-center items-center gap-4 text-sm  sm:divide-y-0 sm:divide-x divide-slate-300 w-full  lg:px-0">
          <li className="flex items-center gap-3 py-2 sm:py-0">
            <div>
              <User size={16} />
            </div>
            <p>{blog?.author}</p>
          </li>
          <li className="flex items-center gap-2 py-2 sm:py-0 pl-0 sm:pl-3">
            <div>
              <Calendar size={"16"} />
            </div>
            {blog.createdAt ? <>{blog.createdAt}</> : null}
          </li>
          <li className="py-2 sm:py-0 pl-0 sm:pl-3 hidden lg:block">
            {blog?.content ? calculateReadTime(blog?.content) : null}
          </li>
        </ul>

        {/* Social Share Buttons */}
        <div className="w-full flex mt-8 justify-between max-w-md items-center gap-2 mx-auto ">
          <Popover placement="bottom">
            <PopoverTrigger className="">
              <button className="flex text-sm bg-teal-950/20 font-[500] text-teal-900 px-4 py-[.5rem] rounded-lg items-center gap-1">
                Follow us
                <span>
                  <Plus />
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="!w-52 bg-white/70 backdrop-filter backdrop-blur-lg">
              <div className=" py-1 !w-full">
                <button className="w-full  hover:bg-slate-200 mb-1 justify-start p-2 flex text-slate-700 items-center gap-2 rounded-lg ">
                  <img src={"/whatsapp.png"} className="w-6" alt={""} />
                  <span className="!text-[.8rem]">Follow on Whatsapp</span>
                </button>
                <Divider />
                <button className="w-full  mt-1 hover:bg-slate-200 justify-start p-2 flex text-slate-700 items-center gap-2 rounded-lg ">
                  <img src={"/telegram.png"} className="w-6" alt={""} />
                  <span className="!text-[.8rem]">Follow on Telegram</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <ul className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-2  ">
            <li className="w-full lg:w-auto">
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogURL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full justify-center p-2 flex text-[#004D40] bg-teal-950/30 items-center gap-2  border border-slate-300  rounded-full ">
                  <Twitter />
                </button>
              </Link>
            </li>

            <li className="w-full lg:w-auto">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogURL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full justify-center p-2 flex text-[#004D40] bg-teal-950/30 items-center gap-2  border border-slate-300  rounded-full ">
                  <Facebook />
                </button>
              </Link>
            </li>

            <li className="w-full lg:w-auto">
              <Link
                href={`https://www.instagram.com/?url=${encodeURIComponent(blogURL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full justify-center p-2 flex text-[#004D40] bg-teal-950/30 items-center gap-2  border border-slate-300  rounded-full ">
                  <Instagram />
                </button>
              </Link>
            </li>

            <li className="w-full lg:w-auto">
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogURL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full justify-center p-2 flex text-[#004D40] bg-teal-950/30 items-center gap-2  border border-slate-300  rounded-full ">
                  <Linkedin />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[300px] lg:h-[580px] mt-12 rounded-xl overflow-hidden">
        <img
          src={blog?.imageURL}
          alt={blog?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-3xl mx-auto ">
        <div className="mt-8">
          {blog?.content ? (
            <Editor
              editorSerializedState={
                typeof blog.content === "string"
                  ? JSON.parse(blog.content)
                  : null
              }
              readOnly
              blogPage={true}
            />
          ) : null}
        </div>
      </div>
      <Blogs />
    </main>
  );
}
