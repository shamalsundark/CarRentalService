import React from 'react';
import logo from '../components/assests/logo.png';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function AdminDash() {
  // Example data for the bar chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','July','Augast','September','October','November'],
    datasets: [
      {
        label: 'Number Of Car Rents',
        data: [65, 59, 80, 81, 56, 55, 40 ,50 ,30 ,55 ,60],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      }, 
    ],
  };

  // Chart options with scales configuration
  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Ensure 'category' scale is used for the x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Augast','September','October','November'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <img src={logo} alt="Logo" width="500" height="120" style={{ paddingTop: 10 }} />
      </div>
      <div>
        <h2>Graphical Representation</h2>
        {/* Include the Bar chart with options */}
        <Bar data={chartData} options={chartOptions} width={300} height={90} />
      </div>
    </div>
  );
}

export default AdminDash;
