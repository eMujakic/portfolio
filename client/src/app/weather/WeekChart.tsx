import {
    averageTemperature,
    fahrenheitArray,
    getGradientColors,
  } from "@/lib/utils";
  import React from "react";
  import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
  
  const data = [
    {
      name: "Wed",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Thr",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Fri",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sat",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Sun",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sun",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sun",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  
  const isFahrenheit = true;
  
  const WeekChart = () => {
    return (
      <div className="mr-3 mt-8 h-45 md:h-60 lg:h-72 xl:h-76">
        <ResponsiveContainer height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="color2" x1="0" y1="1" x2="0" y2="0">
                <stop offset="5%" stopColor={"#ff7c00"} stopOpacity={0.35} />
                <stop offset="100%" stopColor={"#ffaa00"} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <Bar dataKey="uv" fill="url(#color2)" stroke="" />
            <XAxis
              dataKey="name"
              stroke="#bbbbbb"
              tickLine={false}
              tick={{ transform: "translate(0, 3)" }}
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default WeekChart;
  