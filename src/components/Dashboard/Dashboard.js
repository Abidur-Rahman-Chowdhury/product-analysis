import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Dashboard = () => {
  const data = [
    {
      month: 'Mar',
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: 'Apr',
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: 'May',
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: 'Jun',
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: 'Jul',
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: 'Aug',
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 mt-30 ">
      <div className='mt-30 -z-20'>
        <LineChart width={500} height={400} data={data}>
          <YAxis dataKey="investment"></YAxis>
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis dataKey="month"></XAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div className='mt-30 -z-20'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
