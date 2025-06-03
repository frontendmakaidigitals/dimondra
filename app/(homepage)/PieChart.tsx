"use client";
import * as React from "react";
import { Pie, PieChart } from "recharts";
import { motion, useInView } from "motion/react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";
export const description = "A donut chart with text";

type IndustryKey =
  | "Healthcare"
  | "Real Estate"
  | "Retail & E-commerce"
  | "Finance & Banking"
  | "Technology & IT";

const chartData = [
  { Industry: "Healthcare", visitors: 275, fill: "#FFB300" },
  { Industry: "Real Estate", visitors: 200, fill: "#C0CA33" },
  { Industry: "Retail & E-commerce", visitors: 287, fill: "#43A047" },
  { Industry: "Finance & Banking", visitors: 173, fill: "#26C6DA" },
  { Industry: "Technology & IT", visitors: 190, fill: "#F4511E" },
];

const chartConfig: Record<IndustryKey, { label: string; color: string }> = {
  Healthcare: { label: "Healthcare", color: "#FFB300" },
  "Real Estate": { label: "Real Estate", color: "#C0CA33" },
  "Retail & E-commerce": { label: "Retail & E-commerce", color: "#43A047" },
  "Finance & Banking": { label: "Finance & Banking", color: "#26C6DA" },
  "Technology & IT": { label: "Technology & IT", color: "#F4511E" },
};

export function ChartPieDonutText() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const windwoSize = useWindowSize();
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (windwoSize.width < 400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windwoSize]);
  return (
    <div>
      <h2 className="text-5xl mb-2 container text-center lg:text-6xl font-[500] text-dimondra-black">
        Our Industry Footprint
      </h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-[1.5fr_.5fr] place-items-center container"
      >
        <Card className=" border-0 shadow-none">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square w-full lg:h-[500px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  isAnimationActive={inView}
                  data={chartData}
                  dataKey="visitors"
                  nameKey="Industry"
                  innerRadius={isMobile ? 70 : 120}
                  strokeWidth={20}
                ></Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp />
            </div>
            <div className="text-muted-foreground leading-none">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <div className=" flex justify-start w-full items-start flex-col gap-2">
          {chartData.map((chart, idx) => (
            <div
              key={chart.Industry}
              className="flex items-center gap-2 text-sm"
            >
              <div
                className="w-4 h-4 rounded-sm"
                style={{
                  backgroundColor:
                    chartConfig[chart.Industry as IndustryKey].color,
                }}
              />
              <span className="text-muted-foreground">{chart.Industry}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
