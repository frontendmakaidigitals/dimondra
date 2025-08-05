"use client";
import { Button } from "@heroui/button";
import React, { useRef, useState, useEffect } from "react";
import { BadgeCheck, Plus, ArrowLeft, X, PenIcon, Trash } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { addToast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { PressEvent } from "@react-types/shared";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
type SubscriptionCardProps = {
  title: string;
  price: string;
  originalPrice: string;
  frequency: "month" | "year";
  badge: string;
  features: string[];
  badgeColor: string;
  id?: string;
};

export const frequency = [
  { key: "month", label: "month" },
  { key: "year", label: "year" },
];

const gradientThemes = [
  {
    key: "sunset",
    val: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  },
  {
    key: "ocean",
    val: "bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500",
  },
  {
    key: "forest",
    val: "bg-gradient-to-r from-green-700 via-green-500 to-lime-400",
  },
  {
    key: "sky",
    val: "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    key: "peach",
    val: "bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500",
  },
];

const Page = () => {
  const [packages, setPackages] = useState<SubscriptionCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchState, setFetchState] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<"default" | "add" | "edit">(
    "default"
  );
  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "packages")); // fixed collection name
        const packagesData: SubscriptionCardProps[] = snapshot.docs.map(
          (doc) => {
            const data = doc.data();

            return {
              id: doc.id,
              title: data.title || "",
              price: data.price || 0,
              originalPrice: data.originalPrice || 0,
              frequency: data.frequency || "month",
              isBestValue: data.isBestValue || false,
              features: data.features || [],
              cta: data.cta || "",
              badge: data.badge || "",
              badgeColor: data.badgeColor || { key: "", val: "" },
            };
          }
        );

        setPackages(packagesData);
        setIsLoading(false);

        setFetchState(true);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
        setFetchState(false);
      }
    };

    fetchPackages();
  }, []);
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "packages", id));
      setPackages((prev) => prev.filter((pkg) => pkg.id !== id)); // update UI
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen bg-sky-50 p-8 relative">
      <div className="flex items-center gap-3 mb-6">
        {activeView !== "default" ? (
          <>
            <button onClick={() => setActiveView("default")}>
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-semibold ">Back</h1>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold ">Your Packages</h1>
          </>
        )}
      </div>

      {/* View Switch */}
      {(() => {
        switch (activeView) {
          case "add":
            return <AddPackage onCancel={() => setActiveView("default")} />;
          case "edit":
            return (
              <EditPackage
                data={editIndex !== null ? packages[editIndex] : null}
                onCancel={() => setActiveView("default")}
              />
            );
          default:
            return (
              <div
                className={` ${packages.length ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}  gap-6`}
              >
                {fetchState ? (
                  packages.length > 0 ? (
                    packages.map((pkg, index) => (
                      <div
                        key={pkg.id ?? index}
                        className="relative"
                        onMouseEnter={() => setEditIndex(index)}
                        onMouseLeave={() => setEditIndex(null)}
                      >
                        <Card data={pkg} />

                        {editIndex === index && (
                          <div className="absolute rounded-xl shadow-md w-full bg-black/10 backdrop-filter backdrop-blur-md flex justify-center items-center gap-2 inset-0 h-auto">
                            <button
                              onClick={() => setActiveView("edit")}
                              className="text-slate-950 rounded-xl p-2 hover:bg-slate-50 hover:text-slate-900"
                            >
                              <PenIcon className="size-7" />
                            </button>
                            {pkg.id && (
                              <button
                                onClick={() => handleDelete(pkg.id!)}
                                className="text-slate-950 rounded-xl p-2 hover:bg-red-500 hover:text-red-50"
                              >
                                <Trash className="size-7" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-[80vh] flex justify-center items-center">
                      <h1>No Packages are currently added</h1>
                    </div>
                  )
                ) : null}
              </div>
            );
        }
      })()}

      {/* Floating Add Button */}
      {activeView === "default" && (
        <div className="fixed bottom-5 right-5 z-50">
          <motion.button
            onClick={() => setActiveView("add")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ width: isHovered ? "10rem" : "3rem" }}
            className="h-12 group bg-lime-500 hover:bg-lime-600 rounded-full flex justify-center items-center gap-2 overflow-hidden transition-all px-3"
          >
            <Plus />
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 0.2 },
                }}
                exit={{ opacity: 0, x: 10 }}
              >
                Add Package
              </motion.span>
            )}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Page;

// Add Package Component
const AddPackage = ({ onCancel }: { onCancel: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [uploadState, setUploadState] = useState("");
  const [form, setForm] = useState<SubscriptionCardProps>({
    title: "",
    price: "",
    originalPrice: "",
    frequency: "month",
    features: [],
    badge: "",
    badgeColor: "",
  });
  const handleChange = (
    field: keyof SubscriptionCardProps,
    value: string | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updated = [...form.features];
    updated[index] = value;
    setForm({ ...form, features: updated });
  };

  const addFeature = () => {
    setForm((prev) => {
      const updated = [...prev.features, ""];
      return { ...prev, features: updated };
    });

    // Focus the new input after DOM update
    setTimeout(() => {
      const lastIndex = featureRefs.current.length - 1;
      const newInput = featureRefs.current[lastIndex];
      newInput?.focus();
    }, 0);
  };
  const featureRefs = useRef<HTMLInputElement[]>([]);

  const removeFeature = (index: number) => {
    const updated = [...form.features];
    updated.splice(index, 1); // remove the selected item
    setForm({ ...form, features: updated });
  };
  const router = useRouter();
  const handleSubmit = async (e: PressEvent) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("price", form.price.toString());
    formData.append("originalPrice", form.originalPrice.toString());
    formData.append("frequency", form.frequency);
    formData.append("badge", form.badge);
    formData.append("badgeColor", JSON.stringify(form.badgeColor)); // store as string
    formData.append("features", JSON.stringify(form.features)); // store as array

    // Extract values
    const title = formData.get("title")?.toString();
    const price = parseFloat(formData.get("price")?.toString() || "0");
    const originalPrice = parseFloat(
      formData.get("originalPrice")?.toString() || "0"
    );
    const frequency = formData.get("frequency")?.toString();
    const badge = formData.get("badge")?.toString();
    const badgeColor = JSON.parse(
      formData.get("badgeColor")?.toString() || "{}"
    );
    const features = JSON.parse(formData.get("features")?.toString() || "[]");

    if (!title || !frequency || !price || features.length === 0) {
      setLoading(false);
      addToast({
        title: "Invalid Input",
        description: "Please fill all required fields.",
        color: "danger",
      });
      return;
    }

    try {
      const db = getFirestore();
      const packageRef = collection(db, "packages");

      await addDoc(packageRef, {
        title,
        price,
        originalPrice,
        frequency,
        badge,
        badgeColor,
        features,
        createdAt: new Date(),
      });

      router.refresh();
      addToast({
        title: "Upload successful",
        description: "Package was uploaded",
        color: "success",
      });
    } catch (err) {
      console.error("Upload failed:", err);
      addToast({
        title: "Upload Error",
        description: "Something went wrong",
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_.7fr] gap-2">
      <div className="bg-white p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Package</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid grid-cols-2 gap-6"
        >
          <Input
            label="Title"
            size="sm"
            isRequired
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />

          <Input
            label="Price"
            isRequired
            type="number"
            size="sm"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />

          <Input
            label="Original Price"
            type="number"
            size="sm"
            value={form.originalPrice}
            isInvalid={
              form.originalPrice
                ? Number(form.originalPrice) < Number(form.price)
                : false
            }
            errorMessage={
              Number(form.originalPrice) < Number(form.price)
                ? "Original price should not be equal to or less then actual price"
                : ""
            }
            onChange={(e) => handleChange("originalPrice", e.target.value)}
          />

          <Select
            label="Select Frequency"
            isRequired
            size="sm"
            selectedKeys={[form.frequency]}
            onChange={(e) => handleChange("frequency", e.target.value)}
          >
            {frequency.map((freq) => (
              <SelectItem key={freq.key}>{freq.label}</SelectItem>
            ))}
          </Select>

          <Input
            label="Badge"
            size="sm"
            value={form.badge}
            onChange={(e) => handleChange("badge", e.target.value)}
          />

          <Select
            label="Badge Color"
            size="sm"
            items={gradientThemes}
            isDisabled={!form.badge}
            selectedKeys={[form.badgeColor]}
            onChange={(e) => handleChange("badgeColor", e.target.value)}
          >
            {gradientThemes.map((theme) => (
              <SelectItem key={theme.val} textValue={theme.key}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-6 rounded ${theme.val}`}></div>
                  {theme.key}
                </div>
              </SelectItem>
            ))}
          </Select>

          <div className="col-span-2">
            <h4 className="font-semibold mb-2">Features</h4>
            {form.features.map((feature, idx) => (
              <div key={idx} className="relative group">
                <Input
                  isRequired
                  ref={(el) => {
                    if (el) featureRefs.current[idx] = el;
                  }}
                  className="mb-2 pr-10"
                  placeholder={`Feature ${idx + 1}`}
                  value={feature}
                  onValueChange={(value) => handleFeatureChange(idx, value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();

                      const currentValue = form.features[idx]?.trim();

                      if (!currentValue) return;

                      // Add a new feature
                      addFeature();

                      // Wait for state to update, then focus next
                      setTimeout(() => {
                        const nextInput = featureRefs.current[idx + 1];
                        nextInput?.focus();
                      }, 0);
                    }
                  }}
                  onFocusChange={(isFocused) => {
                    if (!isFocused) {
                      setTimeout(() => {
                        const currentFeature = form.features[idx];
                        if (
                          currentFeature !== undefined &&
                          currentFeature.trim() === ""
                        ) {
                          const updated = [...form.features];
                          updated.splice(idx, 1);
                          setForm({ ...form, features: updated });
                        }
                      }, 100);
                    }
                  }}
                />

                <button
                  type="button"
                  onClick={() => removeFeature(idx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-red-500 rounded-full p-1 hidden group-hover:block"
                >
                  <X className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add Feature
            </button>
          </div>

          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <Button
              onPress={(e) => handleSubmit(e)}
              disabled={loading}
              isLoading={loading}
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </Button>
          </div>
        </form>
      </div>

      {/* Live preview card */}
      <div className="self-start">
        <Card data={form} />
      </div>
    </div>
  );
};

// Edit Package Component
const EditPackage = ({
  data,
  onCancel,
}: {
  data: SubscriptionCardProps | null;
  onCancel: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<SubscriptionCardProps>({
    title: "",
    price: "",
    originalPrice: "",
    frequency: "month",
    features: [],
    badge: "",
    badgeColor: "",
  });
  useEffect(() => {
    if (data) {
      setForm({
        title: data.title || "",
        price: data.price || "",
        originalPrice: data.originalPrice || "",
        frequency: data.frequency || "month",
        features: data.features || [],
        badge: data.badge || "",
        badgeColor: data.badgeColor || "",
        id: data.id || undefined,
      });
    }
  }, [data]);
  const handleChange = (
    field: keyof SubscriptionCardProps,
    value: string | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updated = [...form.features];
    updated[index] = value;
    setForm({ ...form, features: updated });
  };

  const addFeature = () => {
    setForm((prev) => {
      const updated = [...prev.features, ""];
      return { ...prev, features: updated };
    });

    // Focus the new input after DOM update
    setTimeout(() => {
      const lastIndex = featureRefs.current.length - 1;
      const newInput = featureRefs.current[lastIndex];
      newInput?.focus();
    }, 0);
  };
  const featureRefs = useRef<HTMLInputElement[]>([]);

  const removeFeature = (index: number) => {
    const updated = [...form.features];
    updated.splice(index, 1); // remove the selected item
    setForm({ ...form, features: updated });
  };
  const router = useRouter();
  const handleSubmit = async (e: PressEvent) => {
    setLoading(true);

    try {
      const db = getFirestore();
      const payload = {
        title: form.title,
        price: parseFloat(form.price.toString()),
        originalPrice: parseFloat(form.originalPrice.toString()),
        frequency: form.frequency,
        badge: form.badge,
        badgeColor: form.badgeColor,
        features: form.features,
        updatedAt: new Date(),
      };

      if (
        !form.title ||
        !form.frequency ||
        !form.price ||
        form.features.length === 0
      ) {
        setLoading(false);
        addToast({
          title: "Invalid Input",
          description: "Please fill all required fields.",
          color: "danger",
        });
        return;
      }

      if (form.id) {
        // Edit mode
        const ref = doc(db, "packages", form.id);
        await updateDoc(ref, payload);
      } else {
        // Create mode
        await addDoc(collection(db, "packages"), {
          ...payload,
          createdAt: new Date(),
        });
      }

      addToast({
        title: form.id ? "Update Successful" : "Upload Successful",
        description: `Package ${form.id ? "updated" : "created"} successfully.`,
        color: "success",
      });

      router.push("/dashboard/Packages");
    } catch (err) {
      console.error("Submit failed:", err);
      addToast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_.7fr] gap-2">
      <div className="bg-white p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Package</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid grid-cols-2 gap-6"
        >
          <Input
            label="Title"
            size="sm"
            isRequired
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />

          <Input
            label="Price"
            isRequired
            type="number"
            size="sm"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />

          <Input
            label="Original Price"
            type="number"
            size="sm"
            value={form.originalPrice}
            isInvalid={
              form.originalPrice
                ? Number(form.originalPrice) < Number(form.price)
                : false
            }
            errorMessage={
              Number(form.originalPrice) < Number(form.price)
                ? "Original price should not be equal to or less then actual price"
                : ""
            }
            onChange={(e) => handleChange("originalPrice", e.target.value)}
          />

          <Select
            label="Select Frequency"
            isRequired
            size="sm"
            selectedKeys={[form.frequency]}
            onChange={(e) => handleChange("frequency", e.target.value)}
          >
            {frequency.map((freq) => (
              <SelectItem key={freq.key}>{freq.label}</SelectItem>
            ))}
          </Select>

          <Input
            label="Badge"
            size="sm"
            value={form.badge}
            onChange={(e) => handleChange("badge", e.target.value)}
          />

          <Select
            label="Badge Color"
            size="sm"
            items={gradientThemes}
            isDisabled={!form.badge}
            selectedKeys={[form.badgeColor]}
            onChange={(e) => handleChange("badgeColor", e.target.value)}
          >
            {gradientThemes.map((theme) => (
              <SelectItem key={theme.val} textValue={theme.key}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-6 rounded ${theme.val}`}></div>
                  {theme.key}
                </div>
              </SelectItem>
            ))}
          </Select>

          <div className="col-span-2">
            <h4 className="font-semibold mb-2">Features</h4>
            {form.features.map((feature, idx) => (
              <div key={idx} className="relative group">
                <Input
                  isRequired
                  ref={(el) => {
                    if (el) featureRefs.current[idx] = el;
                  }}
                  className="mb-2 pr-10"
                  placeholder={`Feature ${idx + 1}`}
                  value={feature}
                  onValueChange={(value) => handleFeatureChange(idx, value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();

                      const currentValue = form.features[idx]?.trim();

                      if (!currentValue) return;

                      // Add a new feature
                      addFeature();

                      // Wait for state to update, then focus next
                      setTimeout(() => {
                        const nextInput = featureRefs.current[idx + 1];
                        nextInput?.focus();
                      }, 0);
                    }
                  }}
                  onFocusChange={(isFocused) => {
                    if (!isFocused) {
                      setTimeout(() => {
                        const currentFeature = form.features[idx];
                        if (
                          currentFeature !== undefined &&
                          currentFeature.trim() === ""
                        ) {
                          const updated = [...form.features];
                          updated.splice(idx, 1);
                          setForm({ ...form, features: updated });
                        }
                      }, 100);
                    }
                  }}
                />

                <button
                  type="button"
                  onClick={() => removeFeature(idx)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-red-500 rounded-full p-1 hidden group-hover:block"
                >
                  <X className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add Feature
            </button>
          </div>

          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <Button
              onPress={(e) => handleSubmit(e)}
              disabled={loading}
              isLoading={loading}
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </Button>
          </div>
        </form>
      </div>

      {/* Live preview card */}
      <div className="self-start">
        <Card data={form} />
      </div>
    </div>
  );
};

const Card = ({ data }: { data: SubscriptionCardProps }) => {
  return (
    <div className="relative  group bg-white rounded-xl shadow-md p-6 max-w-sm w-full transition-all">
      {data.badge && (
        <div
          className={`absolute top-4 right-4 ${data.badgeColor} ${data.badgeColor ? "text-white " : "text-black border border-slate-600/20"} text-xs font-bold px-3 py-1 rounded-full`}
        >
          {data.badge}
        </div>
      )}

      <h2 className="text-xl font-bold">{data.title}</h2>

      <div className="mt-2 flex items-baseline gap-2">
        {data.originalPrice ? (
          <span className="text-red-500 line-through font-semibold">
            ${data.originalPrice}
          </span>
        ) : null}
        <span className="text-4xl font-bold">${data.price}</span>
        <span className="text-sm text-gray-600">/{data.frequency}</span>
      </div>

      <hr className="my-4 border-gray-300" />

      <ul className="space-y-3 mb-6">
        {data.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <div>
              <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        disabled
        className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold py-2 rounded-xl shadow hover:brightness-105 transition"
      >
        Subscribe Now
      </button>
    </div>
  );
};
