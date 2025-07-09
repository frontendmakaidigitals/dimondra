"use client";
import { FormEvent, useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // For popup`
import { Select, SelectItem } from "@heroui/select";
import { DialogTitle } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Editor } from "@/components/blocks/editor-00/editor";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { addToast } from "@heroui/react";
const CLOUDINARY_UPLOAD_PRESET = "BlogsImages"; // 🔁 Replace this
const CLOUDINARY_CLOUD_NAME = "dkqbwxnhs"; // 🔁 Replace this

export default function AddBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    {
      key: "Banking ",
      label: "Banking",
    },
    {
      key: "Engineering",
      label: "Engineering",
    },
    {
      key: "Corporate",
      label: "Corporate",
    },
    {
      key: "Commercial",
      label: "Commercial",
    },
    {
      key: "Hospitality",
      label: "Hospitality",
    },
    {
      key: "Pharmaceutical",
      label: "Pharmaceutical",
    },
    {
      key: "Logistics",
      label: "Logistics",
    },
    {
      key: "Technology",
      label: "Technology",
    },
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
    setLoading(true);
    e.preventDefault();

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
      setLoading(false);
      return;
    }

    try {
      const imageFormData = new FormData();
      imageFormData.append("file", imageFile);
      imageFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      imageFormData.append("cloud_name", "");

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

      const imageURL = cloudinaryData.secure_url;

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
      router.push("/dashboard/Blogs");
      setLoading(false);
      addToast({
        title: "Upload sucessfull",
        description: "Blog was uploaded",
        color: "success",
      });
    } catch (err) {
      console.error("Upload failed:", err);

      setLoading(false);
      addToast({
        title: "Upload Error",
        description: "Something went wrong",
        color: "danger",
      });
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
            <label
              htmlFor="fileAd"
              className="block text-sm font-medium mb-[6px]"
            >
              Upload Image
            </label>
            <div className="relative flex items-center gap-3 line-clamp-1 bg-white w-full px-3 py-[.22rem] rounded-lg">
              <label
                htmlFor="fileAdd"
                className="px-3 rounded-md py-2 bg-slate-100"
              >
                Choose
              </label>
              <p className="max-w-xs">
                {blogData.image ? blogData.image.name : null}
              </p>
              <Input
                id="fileAdd"
                className="hidden"
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
        <Button
          disabled={loading}
          type="submit"
          onClick={handleSubmit}
          size="lg"
          className="py-6"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Spinner color="default" size={"md"} variant="spinner" />
              Uploading
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl text-white max-h-[90vh] overflow-auto p-4 !border-transparent !bg-transparent">
          <DialogTitle>
            {" "}
            {blogData.image ? blogData.image.name : null}
          </DialogTitle>
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
