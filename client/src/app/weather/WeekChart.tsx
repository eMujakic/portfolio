import { WeekGraphProps } from "@/lib/types";
import { getTempColor } from "@/lib/utils";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  TooltipProps,
  Cell,
  YAxis,
} from "recharts";

const WeekChart: React.FC<WeekGraphProps> = ({ data, isFahrenheit }) => {
  return (
    <div className="mr-3 mt-8 h-45 md:h-60 lg:h-72 xl:h-76">
      <ResponsiveContainer height="100%">
        <BarChart data={data}>
          <defs>
            <linearGradient id="cold" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={"#22b4ff"} stopOpacity={0.4} />
              <stop offset="100%" stopColor={"#2451B7"} stopOpacity={0.01} />
            </linearGradient>

            <linearGradient id="warm" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={"#ff7c00 "} stopOpacity={0.4} />
              <stop offset="100%" stopColor={"#ffaa00"} stopOpacity={0.01} />
            </linearGradient>

            <linearGradient id="hot" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={"#ff0000"} stopOpacity={0.4} />
              <stop offset="100%" stopColor={"#ff7f00"} stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <Bar dataKey="high" fill="url(#warm)">
            {data.map((entry, index) => (
              <Cell
                fill={`url(#${getTempColor(data[index].high, isFahrenheit)})`}
              />
            ))}
          </Bar>
          <XAxis
            dataKey="day"
            stroke="#bbbbbb"
            tickLine={false}
            tick={{ transform: "translate(0, 3)" }}
          />
          <YAxis
                      stroke="#bbbbbb"
                      tickLine={false}
                      tick={false}
                      tickFormatter={(int) => {
                        return `${int}°F`;
                      }}
                      width={0}
                      domain={[
                        (dataMin: number) => dataMin - 6, 
                        (dataMax: number) => dataMax
                      ]} 
                      scale="linear"
                    ></YAxis>
          <Tooltip content={<CustomTooltip />} cursor={{ fillOpacity: 0.04 }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const { day, high, low } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "9px",
          marginTop: "14px",
        }}
      >
        <h4 style={{ margin: 0 }}>{label}</h4>
        <p style={{ margin: 0 }}>{`High: ${high?.toFixed(1)}°`}</p>
        <p style={{ margin: 0 }}>{`Low: ${low?.toFixed(1)}°`}</p>
      </div>
    );
  }
  return null;
};

export default WeekChart;
