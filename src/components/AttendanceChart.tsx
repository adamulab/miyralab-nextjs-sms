"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 80,
    absent: 20,
  },
  {
    name: "Tue",
    present: 85,
    absent: 15,
  },
  {
    name: "Wed",
    present: 90,
    absent: 10,
  },
  {
    name: "Thu",
    present: 60,
    absent: 40,
  },
  {
    name: "Fri",
    present: 35,
    absent: 65,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={data} barSize={30}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#7F056E"
              activeBar={<Rectangle fill="pink" stroke="white" />}
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#FAE27C"
              activeBar={<Rectangle fill="gold" stroke="white" />}
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
