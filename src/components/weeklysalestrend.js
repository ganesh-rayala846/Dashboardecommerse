
import React from 'react';
import './ecommerssite.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', sales: 100 },
  { day: 'Tue', sales: 660 },
  { day: 'Wed', sales: 300 },
  { day: 'Thu', sales: 550 },
  { day: 'Fri', sales: 730 },
  { day: 'Sat', sales: 620 },
  { day: 'Sun', sales: 120 },
];

const WeeklySalesChart = () => (
    <div className='chart-style'>
  <ResponsiveContainer width="80%" height={350}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip
          contentStyle={{
            backgroundColor: '#ffffff',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#8884d8' }}
          itemStyle={{ color: '#555' }}
        />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#1976d2"
          strokeWidth={3}
          dot={{ r: 5, stroke: '#1976d2', strokeWidth: 2, fill: 'white' }}
          activeDot={{ r: 8 }}
        />
    </LineChart>
  </ResponsiveContainer>
  </div>
);

export default WeeklySalesChart;