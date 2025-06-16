"use client";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // For popup`
import { Select, SelectItem } from "@heroui/select";
import { DialogTitle } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Editor } from "@/components/blocks/editor-00/editor";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { db } from "@/config/firebase";

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
    image: null as File | null | string,
  });
  const [isBlogFetched, setIsBlogFetched] = useState(false);
  //update partcon
  const params = useParams();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));

        const blogsData = snapshot.docs
          .filter((doc) => doc.id === params.slug)
          .map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              author: data.author ?? "",
              category: data.category ?? "",
              content: data.content ?? "",
              metaDesc: data.metaDesc ?? "",
              metaTitle: data.metaTitle ?? "",
              title: data.title ?? "",
              image: data.imageURL,
              ...data,
            };
          });
        setBlogData(blogsData[0]);
        setImagePreview(blogsData[0].image);
        if (blogsData.length > 0) setIsBlogFetched(true);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  //submit part
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

    const { title, metaTitle, metaDesc, author, category, content, image } =
      blogData;

    if (!title || !metaTitle || !metaDesc || !author || !category || !content) {
      alert("Please fill in all fields.");
      return;
    }

    let imageURL = typeof image === "string" ? image : "";

    try {
      // ⬆️ Upload only if the image is a File (not already a Cloudinary URL)
      if (image instanceof File) {
        const imageFormData = new FormData();
        imageFormData.append("file", image);
        imageFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

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

        imageURL = cloudinaryData.secure_url;
      }

      if (!imageURL) {
        alert("Please upload an image.");
        return;
      }

      const blogDocRef = doc(db, "blogs", params.slug as string);

      await updateDoc(blogDocRef, {
        title,
        metaTitle,
        metaDesc,
        author,
        category,
        content,
        imageURL,
        updatedAt: new Date(),
      });

      alert("Blog updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating blog. Check console for details.");
    }
  };

  console.log(blogData);
  return (
    <div className="pb-10">
      <h1 className="text-2xl font-semibold">Add New Blog</h1>
      {isBlogFetched ? (
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
                defaultSelectedKeys={[blogData.category]}
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
                  {typeof blogData.image === "string"
                    ? blogData.image
                      ? blogData.image.split("/").pop()
                      : ""
                    : blogData.image && "name" in blogData.image
                      ? blogData.image.name
                      : ""}
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
              <div className="bg-gray-50  w-full overflow-hidden rounded-lg border">
                <Editor
                  onSerializedChange={(val) =>
                    handleChange("content", JSON.stringify(val))
                  }
                  editorSerializedState={
                    typeof blogData.content === "string"
                      ? JSON.parse(blogData.content)
                      : blogData.content
                  }
                />
              </div>
            </div>
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      ) : (
        <div className="flex w-full min-h-[80vh] h-full justify-center items-center">
          <h1>No Blog found with this Id</h1>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl text-white max-h-[90vh] overflow-auto p-4 !border-transparent !bg-transparent">
          <DialogTitle>
            {typeof blogData.image === "string"
              ? blogData.image
                ? blogData.image.split("/").pop()
                : ""
              : blogData.image && "name" in blogData.image
                ? blogData.image.name
                : ""}
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
