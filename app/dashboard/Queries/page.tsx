"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection, Timestamp } from "firebase/firestore";
export interface contacts {
  id: string;
  contact: string;
  email: string;
  countryCode: string;
  message: string;
  createdAt: Timestamp;
  name: string;
}

const Page = () => {
  const [contact, setContact] = useState<contacts[]>([]);
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));
        const blogsData = snapshot.docs.map((doc) => {
          const Data = doc.data();
          return {
            id: doc.id,
            contact: Data.contact,
            email: Data.email,
            countryCode: Data.countryCode,
            message: Data.message,
            createdAt: Data.createdAt,
            name: Data.name,
            ...Data,
          };
        });
        setContact(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchContact();
  }, []);
  console.log(contact)
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">All Queries</h1>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Contact</TableColumn>
          <TableColumn>Country</TableColumn>
          <TableColumn>Email</TableColumn>
        </TableHeader>
        <TableBody>
          {contact.map((query: contacts) => (
            <TableRow key={query.id}>
              <TableCell>
                {query.createdAt.toDate().toLocaleDateString()}
              </TableCell>
              <TableCell>{query.name}</TableCell>
              <TableCell>{query.contact}</TableCell>
              <TableCell>{query.countryCode}</TableCell>
              <TableCell>{query.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
