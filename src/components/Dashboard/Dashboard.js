import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    api.get('/transactions/summary').then((res) => setSummary(res.data));
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard">
      <h1>Transaction Dashboard</h1>
      <PieChart width={400} height={400}>
        <Pie
          data={summary}
          dataKey="value"
          nameKey="type"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
        >
          {summary.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Dashboard;
