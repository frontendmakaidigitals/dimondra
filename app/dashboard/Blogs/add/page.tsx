"use client";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // For popup`
import { Select, SelectItem } from "@heroui/select";
import { DialogTitle } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Editor } from "@/components/blocks/editor-00/editor";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const CLOUDINARY_UPLOAD_PRESET = "BlogsImages"; // 🔁 Replace this
const CLOUDINARY_CLOUD_NAME = "dkqbwxnhs"; // 🔁 Replace this

export default function AddBlogPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    metaTitle: "",
    metaDesc: "",
    author: "",
    category: "",
    content: "",
    image: null as File | null,
  });

  const topics = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];
  const handleChange = (
    key: keyof typeof blogData,
    value: string | File | null
  ) => {
    setBlogData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleChange("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Manually create FormData and append fields
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("metaTitle", blogData.metaTitle);
    formData.append("metaDesc", blogData.metaDesc);
    formData.append("author", blogData.author);
    formData.append("category", blogData.category);
    formData.append("content", blogData.content);
    if (blogData.image) {
      formData.append("image", blogData.image);
    }

    const title = formData.get("title")?.toString();
    const metaTitle = formData.get("metaTitle")?.toString();
    const metaDesc = formData.get("metaDesc")?.toString();
    const author = formData.get("author")?.toString();
    const category = formData.get("category")?.toString();
    const content = formData.get("content")?.toString();
    const imageFile = formData.get("image") as File;

    if (
      !title ||
      !metaTitle ||
      !metaDesc ||
      !author ||
      !category ||
      !content ||
      !imageFile
    ) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    try {
      const imageFormData = new FormData();
      imageFormData.append("file", imageFile);
      imageFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      imageFormData.append("cloud_name", "");
      console.log(imageFormData);

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: imageFormData,
        }
      );

      const cloudinaryData = await cloudinaryRes.json();

      if (!cloudinaryData.secure_url) {
        throw new Error("Image upload to Cloudinary failed.");
      }
      console.log(cloudinaryData);
      const imageURL = cloudinaryData.secure_url;

      // Step 2: Upload blog post to Firestore
      const db = getFirestore();
      const blogRef = collection(db, "blogs");

      await addDoc(blogRef, {
        title,
        metaTitle,
        metaDesc,
        author,
        category,
        content,
        imageURL,
        createdAt: new Date(),
      });

      alert("Blog uploaded successfully!");

      // Reset form
      setBlogData({
        title: "",
        metaTitle: "",
        metaDesc: "",
        author: "",
        category: "",
        content: "",
        image: null,
      });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Error uploading blog. Check console for details.");
    }
  };

  return (
    <div className="pb-10">
      <h1 className="text-2xl font-semibold">Add New Blog</h1>

      <form className="grid  space-y-8 !mt-8">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Input
              placeholder="Blog Title"
              size="lg"
              radius="sm"
              value={blogData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              label={"Blog Title"}
              labelPlacement="outside"
              classNames={{ inputWrapper: ["bg-white"] }}
            />
          </div>
          <div>
            <Input
              placeholder="Meta Title"
              size="lg"
              radius="sm"
              value={blogData.metaTitle}
              onChange={(e) => handleChange("metaTitle", e.target.value)}
              label={"Meta Title"}
              labelPlacement="outside"
              classNames={{ inputWrapper: ["bg-white"] }}
            />
          </div>
          <div>
            <Input
              placeholder="Meta Description"
              size="lg"
              radius="sm"
              value={blogData.metaDesc}
              onChange={(e) => handleChange("metaDesc", e.target.value)}
              label={"Meta Description"}
              labelPlacement="outside"
              classNames={{ inputWrapper: ["bg-white"] }}
            />
          </div>
          <div>
            <Input
              placeholder="Author"
              size="lg"
              radius="sm"
              value={blogData.author}
              onChange={(e) => handleChange("author", e.target.value)}
              label={"Author"}
              labelPlacement="outside"
              classNames={{ inputWrapper: ["bg-white"] }}
            />
          </div>

          <div>
            <Select
              className="w-full"
              label="Favorite Animal"
              labelPlacement={"outside"}
              size={"lg"}
              value={blogData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              placeholder="Select an animal"
              radius="sm"
              classNames={{ trigger: ["bg-white"] }}
            >
              {topics.map((topic) => (
                <SelectItem key={topic.key}>{topic.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Image
            </label>
            <div className="relative">
              <Input
                classNames={{
                  inputWrapper: ["bg-white"],
                  input: [
                    "file:bg-slate-200",
                    "file:text-black",
                    "file:rounded-md",
                    "file:px-3",
                    "file:py-2",
                    "file:border-0",
                    "file:mr-3",
                    "cursor-pointer",
                    "file:text-sm",
                  ],
                }}
                size="lg"
                radius="sm"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <AnimatePresence mode="wait">
                {imagePreview ? (
                  <motion.button
                    type="button"
                    initial={{ scale: 0, y: "-50%" }}
                    animate={{ scale: 1, y: "-50%" }}
                    onClick={() => setOpen(true)}
                    className="absolute rounded-lg bg-lime-300 px-4 py-2 top-1/2 right-3"
                  >
                    View
                  </motion.button>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-gray-50 w-full overflow-hidden rounded-lg border">
              <Editor
                onSerializedChange={(val) =>
                  handleChange("content", JSON.stringify(val))
                }
              />
            </div>
          </div>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl text-white max-h-[90vh] overflow-auto p-4 !border-transparent !bg-transparent">
          <DialogTitle>Image name</DialogTitle>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Full Preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
