import React from "react";
import Card from "../component/Card/Card";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Home() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="px-5 py-0 text-white mt-5 ">
      <div className="text-center text-2xl font-bold">
        <h3 className="underline">DASHBOARD</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <Card
          title="PRODUCTS"
          icon="business-outline"
          data="23"
          color="bg-red-500"
        />
        <Card
          title="CATEGORY"
          icon="business-outline"
          data="5"
          color="bg-yellow-400"
        />
        <Card
          title="TOTAL SALES"
          icon="business-outline"
          data="1989789"
          color="bg-green-700"
        />
        <Card
          title="CUSTOMERS"
          icon="business-outline"
          data="2000"
          color="bg-blue-700"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
