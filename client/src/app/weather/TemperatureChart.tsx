import { TempGraphProps } from "@/lib/types";
import {
  averageTemperature,
  fahrenheitArray,
  getGradientColors,
} from "@/lib/utils";
import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const TemperatureGraph: React.FC<TempGraphProps> = ({ data, isFahrenheit }) => {
  const [startColor, endColor] = getGradientColors(
    isFahrenheit
      ? averageTemperature(data)
      : averageTemperature(fahrenheitArray(data))
  );

  return (
    <div className="mr-3">
      <ResponsiveContainer height={125}>
        <AreaChart data={data} className="px-none md:px-2 mt-3">
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor={startColor} stopOpacity={0.45} />
              <stop offset="75%" stopColor={endColor} stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <Area
            dataKey="temperature"
            stroke="#ffffff"
            fill="url(#color)"
          ></Area>
          \
          <XAxis
            dataKey="hour"
            stroke="#bbbbbb"
            tickLine={false}
            tick={{ transform: "translate(0, 5)" }}
          />
          <YAxis
            stroke="#bbbbbb"
            tickLine={false}
            tick={false}
            tickFormatter={(int) => {
              return `${int}°F`;
            }}
            width={4}
          ></YAxis>
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
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
        <h4 style={{ margin: 0 }}>
          {label}
          {label > 12 ? "PM" : "AM"}
        </h4>
        <p style={{ margin: 0 }}>{`Temp: ${payload[0].value?.toFixed(1)}°`}</p>
      </div>
    );
  }
  return null;
};

export default TemperatureGraph;
