import React, { useEffect, useState } from "react";
import { getSalesData } from "../apis/salesData";
import Card from "../components/Card/Card";
import {
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  PieChart,
  Pie,
  YAxis,
} from "recharts";

function Home() {
  const [data, setData] = useState(null);
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f0e",
    "#ff0000",
    "#00ff00",
    "#0000ff",
  ];
  useEffect(() => {
    getSalesData()
      .then((data) => {
        setData(data.sales);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let category = {};
  let products = {};
  let totalSales = 0;

  data &&
    data.forEach((order) => {
      // Count categories
      category[order.category] = (category[order.category] || 0) + 1;

      // Count products
      products[order.product] = (products[order.product] || 0) + 1;

      // Calculate total sales
      totalSales += order.orderValue;
    });

  //bar chart data
  const salesByMonth = {};

  data &&
    data.forEach((entry) => {
      const orderTime = new Date(entry.orderTime);
      const month = orderTime.getMonth() + 1;

      if (!salesByMonth[month]) {
        salesByMonth[month] = 0;
      }

      salesByMonth[month] += entry.orderValue;
    });

  const monthlySalesData =
    data &&
    Object.keys(salesByMonth).map((month) => ({
      month: parseInt(month),
      totalSales: salesByMonth[month],
    }));
  //line chart data
  const aggregatedData = {};

  data &&
    data.forEach((entry) => {
      const category = entry.category;
      const orderValue = entry.orderValue;

      if (!aggregatedData[category]) {
        aggregatedData[category] = 0;
      }

      aggregatedData[category] += orderValue;
    });

  const chartData =
    data &&
    Object.keys(aggregatedData).map((category) => ({
      category,
      orderValue: aggregatedData[category],
    }));

  //pie chart data
  const aggregatedPieData = {};

  data &&
    data.forEach((entry) => {
      const category = entry.category;
      const orderValue = entry.orderValue;

      if (!aggregatedPieData[category]) {
        aggregatedPieData[category] = 0;
      }

      aggregatedPieData[category] += orderValue;
    });

  const pieData =
    data &&
    Object.keys(aggregatedData).map((category) => ({
      category,
      orderValue: aggregatedData[category],
    }));

  const renderTooltip = (props) => {
    const { payload } = props;

    if (payload && payload.length) {
      const { category, orderValue } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "5px",
            border: "1px solid black",
          }}
        >
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Sales:</strong> ${orderValue}
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <main className="px-5 py-0 text-white mt-5 ">
      <div className="text-center text-2xl font-bold">
        <h3 className="underline">DASHBOARD</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <Card
          title="TOTAL PRODUCTS"
          icon="business-outline"
          data={Object.keys(products).length}
          color="bg-red-500"
        />
        <Card
          title="CATEGORY"
          icon="business-outline"
          data={Object.keys(category).length}
          color="bg-yellow-400"
        />
        <Card
          title="TOTAL SALES"
          icon="business-outline"
          data={totalSales}
          color="bg-green-700"
        />
        <Card
          title="TOTAL ORDERS"
          icon="business-outline"
          data={data && data.length}
          color="bg-blue-700"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <ResponsiveContainer height={300}>
          <BarChart
            data={monthlySalesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalSales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={
              data &&
              chartData.sort((a, b) => a.category.localeCompare(b.category))
            }
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orderValue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="orderValue"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data &&
                pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
            </Pie>
            <Tooltip content={renderTooltip} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
