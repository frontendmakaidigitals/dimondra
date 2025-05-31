"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
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
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}>
      <Card className="flex justify-center items-center border-0 shadow-none">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[750px]"
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
                innerRadius={180}
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
                            Industry of recent Participants
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Industry
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
