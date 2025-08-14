"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/react";
import { addToast } from "@heroui/react";
export interface contacts {
  id: string;
  label: string;
  discountedPrice: string;
  orgPrice: string;
}

const Page = () => {
  const [packageData, setPackageData] = useState<contacts[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    label: "",
    discountedPrice: "",
    orgPrice: "",
  });

  // Fetch packages
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const snapshot = await getDocs(collection(db, "hrPackages"));
        const packaged = snapshot.docs.map((docSnap) => {
          const Data = docSnap.data();
          return {
            id: docSnap.id,
            label: Data.label,
            discountedPrice: Data.discountedPrice,
            orgPrice: Data.orgPrice,
          };
        });
        setPackageData(packaged);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchContact();
  }, []);

  // Handle edit
  const handleEdit = (pkg: contacts) => {
    setEditingId(pkg.id);
    setEditForm({
      label: pkg.label,
      discountedPrice: pkg.discountedPrice,
      orgPrice: pkg.orgPrice,
    });
  };

  // Handle save
  const handleSave = async (id: string) => {
    try {
      const docRef = doc(db, "hrPackages", id);
      await updateDoc(docRef, {
        label: editForm.label,
        discountedPrice: editForm.discountedPrice,
        orgPrice: editForm.orgPrice,
      });

      setPackageData((prev) =>
        prev.map((pkg) => (pkg.id === id ? { ...pkg, ...editForm } : pkg))
      );

      setEditingId(null);
      addToast({
        title: "Update sucessfull",
        description: "Package updated successfully!",
        color: "success",
      });
    } catch (error) {
      console.error("Error updating package:", error);
      addToast({
        title: "Update Error",
        description: "Something went wrong while updating the package.",
        color: "danger",
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Your HR Packages</h1>

      <Table isKeyboardNavigationDisabled aria-label="HR Packages table" className="">
        <TableHeader>
          <TableColumn className="text-md">Label</TableColumn>
          <TableColumn className="text-md">Discounted Price</TableColumn>
          <TableColumn className="text-md">Original Price</TableColumn>
          <TableColumn className="text-md">Actions</TableColumn>
        </TableHeader>

        <TableBody>
          {packageData.map((pkg) => (
            <TableRow key={pkg.id}>
              <TableCell>{pkg.label}</TableCell>

              <TableCell>
                {editingId === pkg.id ? (
                  <input
                    value={editForm.discountedPrice}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        discountedPrice: e.target.value,
                      })
                    }
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  pkg.discountedPrice
                )}
              </TableCell>

              <TableCell>
                {editingId === pkg.id ? (
                  <input
                    value={editForm.orgPrice}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        orgPrice: e.target.value,
                      })
                    }
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  <span className="line-through text-red-400">
                    {pkg.orgPrice}
                  </span>
                )}
              </TableCell>

              <TableCell>
                {editingId === pkg.id ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(pkg.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEdit(pkg)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
