"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetChartData } from "@/utils/GetChartData";
import { useParams } from "react-router-dom";
import { useProductStore } from "@/zustandStore/store";

// Assuming that the API returns `market_caps`, `prices`, and `total_volumes`.
export default function BarChartComponent() {
  const currency = useProductStore((state) => state.currency);
  const newCurr = currency.toLowerCase();
  const { CoinId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["Coins", CoinId, newCurr],
    queryFn: () => GetChartData(CoinId, newCurr),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  // Data transformation - Ensure all data is mapped correctly
  const chartData =
    data?.market_caps?.map((cap: [number, number], index: number) => ({
      date: new Date(data.prices[index][0]).toLocaleDateString(), // Format date as string
      marketCap: cap[1], // Market Cap value
      volume: data.total_volumes[index][1], // Volume value
    })) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Cap & Volume</CardTitle>
        <CardDescription>Historical market cap and volume data</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData} // Use the transformed chartData
            margin={{ top: 50, right: 50, left: 100, bottom: 15 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value = '') => value.slice(0, 10)} // Default value if `value` is not provided
            />

            <YAxis />
            <Tooltip />
            <Bar dataKey="marketCap" fill="#8884d8" name="Market Cap" />
            <Bar dataKey="volume" fill="#82ca9d" name="Volume" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
