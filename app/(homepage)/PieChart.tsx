"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
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

type BrowserKey = "chrome" | "safari" | "firefox" | "edge" | "other";

const chartData: { browser: BrowserKey; visitors: number; fill: string }[] = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig: Record<BrowserKey, { label: string; color: string }> = {
  chrome: {
    label: "Chrome",
    color: "#00838F",
  },
  safari: {
    label: "Safari",
    color: "#0097A7",
  },
  firefox: {
    label: "Firefox",
    color: "#00ACC1",
  },
  edge: {
    label: "Edge",
    color: "#26C6DA",
  },
  other: {
    label: "Other",
    color: "#4DD0E1",
  },
};

export function ChartPieDonutText() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const windwoSize = useWindowSize();
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (windwoSize.width < 350) setIsMobile(true);
  }, [windwoSize]);
  return (
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
                nameKey="browser"
                innerRadius={!isMobile ? 70 : 120}
                strokeWidth={20}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-2xl font-bold"
                          >
                            Industries
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          ></tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
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
          <div key={chart.browser} className="flex items-center gap-2 text-sm">
            <div
              className="w-4 h-4 rounded-sm"
              style={{
                backgroundColor: chartConfig[chart.browser].color,
              }}
            />
            <span className="text-muted-foreground">{chart.browser}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
