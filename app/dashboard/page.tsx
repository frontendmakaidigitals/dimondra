"use client";
import { ArrowUpRight, Circle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import Link from "next/link";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Blog = {
  id: string;
  title: string;
  content: string;
  imageURL: string;
  createdAt: string;
  author: string;
};

export interface contacts {
  id: string;
}

const DashboardPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [contact, setContact] = useState<contacts[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));
        const blogsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title ?? "",
            content: data.content ?? "",
            imageURL: data.imageURL ?? "",
            createdAt: data.createdAt ?? "",
            author: data.author ?? "",
            ...data,
          };
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));
        const blogsData = snapshot.docs.map((doc) => {
          const Data = doc.data();
          return {
            id: doc.id,
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

  return (
    <div className="min-h-screen w-full ">
      <h1 className="text-2xl mb-3 font-[500]">
        <Circle className="inline-block size-[12px] fill-black align-middle" />{" "}
        Your Stats
      </h1>
      <div className="grid grid-cols-4  gap-7">
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Blogs</h2>
          <p className="text-7xl mt-4">{blogs.length}</p>
          <Link
            href={"dashboard/Blogs"}
            className="flex items-center w-fit mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2"
          >
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </Link>
        </div>

        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Queries</h2>
          <p className="text-7xl mt-4">{contact.length}</p>
          <Link
            href={"/dashboard/Queries"}
            className="flex items-center w-fit mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2"
          >
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-7">
        <ChartAreaInteractive />
      </div>
    </div>
  );
};

export default DashboardPage;

function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");
  const [chartData, setChartData] = React.useState<any[]>([]);
  const [packageNames, setPackageNames] = React.useState<string[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const snapshot = await getDocs(collectionGroup(db, "purchases"));

        const rawData = snapshot.docs.map((doc) => {
          const data = doc.data();
          const rawPrice = parseFloat(data.price);

          return {
            date: new Date(data.purchasedAt).toISOString().split("T")[0],
            packageName: data.packageName,
            price: isNaN(rawPrice) ? 0 : rawPrice, // Use 0 or skip if invalid
            name: data.name || "Unknown",
          };
        });
        setTotalRevenue(
          rawData
            .filter((d) => d.packageName && d.date && d.price >= 0)
            .reduce((sum, purchase) => sum + purchase.price, 0)
        );
        // Get unique dates and package names
        const allDates = Array.from(new Set(rawData.map((d) => d.date))).sort(
          (a, b) => new Date(a).getTime() - new Date(b).getTime()
        );
        const allPackages = Array.from(
          new Set(rawData.map((d) => d.packageName))
        );
        setPackageNames(allPackages);

        // Group chart data by date and package (with fix)
        const grouped: any[] = [];
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 90); // 90 days for last 3 months

        // Generate full list of dates
        for (
          let d = new Date(startDate);
          d <= endDate;
          d.setDate(d.getDate() + 1)
        ) {
          const dateStr = d.toISOString().split("T")[0];
          const entries = rawData.filter((item) => item.date === dateStr);
          const entryObj: any = { date: dateStr };

          allPackages.forEach((pkg) => {
            entryObj[pkg] = entries
              .filter((e) => e.packageName === pkg)
              .reduce((sum, e) => sum + e.price, 0);
          });

          grouped.push(entryObj);
        }

        setChartData(grouped);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      }
    };

    fetchPurchases();
  }, []);
  // Time range filter
  const filteredData = chartData
    .filter((item) => {
      const itemDate = new Date(item.date);
      const endDate = new Date();
      let days = 90;
      if (timeRange === "30d") days = 30;
      else if (timeRange === "7d") days = 7;
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - days);

      return itemDate >= startDate && itemDate <= endDate;
    })
    .map((item) => {
      const newItem: any = { date: item.date };
      packageNames.forEach((pkg) => {
        // make sure every package has a number (0 if missing)
        newItem[pkg] = typeof item[pkg] === "number" ? item[pkg] : 0;
      });
      return newItem;
    });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Package-wise Purchases ${totalRevenue}</CardTitle>
          <CardDescription>
            Showing purchases by package name for last {timeRange}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={{
            visitors: { label: "Visitors" },
            ...Object.fromEntries(
              packageNames.map((pkg, idx) => [
                pkg,
                {
                  label: pkg,
                  color: `var(--chart-${(idx % 4) + 1})`, // rotating colors
                },
              ])
            ),
          }}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {packageNames.map((pkg, idx) => (
                <linearGradient
                  key={pkg}
                  id={`fill${pkg.replace(/\s+/g, "")}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={`var(--chart-${(idx % 4) + 1})`}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={`var(--chart-${(idx % 4) + 1})`}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />
            {packageNames.map((pkg, idx) => (
              <Area
                key={pkg}
                dataKey={pkg}
                type="monotone"
                fill={`url(#fill${pkg.replace(/\s+/g, "")})`}
                stroke={`var(--chart-${(idx % 4) + 1})`}
              />
            ))}
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
