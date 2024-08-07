"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardWithForm } from "./RecomendationCard/RecomendationCard";
import { CardDemo } from "./CardOrders/AllCard";

import Footer from "./Footer/Fotter";
const chartData = [
  { browser: "Apex", visitors: 4, fill: "var(--color-chrome)" },
  { browser: "Apex2", visitors: 2, fill: "var(--color-safari)" },
  { browser: "other", visitors: 0, fill: "var(--color-firefox)" },
  { browser: "other", visitors: 0, fill: "var(--color-edge)" },
  { browser: "other", visitors: 0, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Apex",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Apex2",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "other",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "other",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <div className=" px-[4rem]">
      <h2 className="opacity-0 text-4xl font-bold text-white mb-16 text-center">
        ͺ
      </h2>

      <CardDemo className="my-8" />

      <h2
        id="Analyze"
        className="text-4xl font-bold text-white mb-6 text-center mt-10"
      >
        Analyze The Most Popular Games
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Mixed</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="browser"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="visitors" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="visitors" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <div className="relative">
        <CardWithForm />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
