import React from 'react';
import '../styles/Dashboard.css';
import { FaUser } from 'react-icons/fa'; // Import the user icon
import { FaRegThumbsUp } from 'react-icons/fa'; // Import the like icon
import { FaTag } from 'react-icons/fa'; // Import the tag icon
import { FaMoneyBillWave } from 'react-icons/fa'; // Import the cash note icon
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import AddProfile from '../components/AddProfile';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'; // Import Chart.js components

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  // Define chart data for activity levels
  // Define chart data for activity levels with dark colors
const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [
    {
      label: 'Guest Activity', // Activity data for Guest users
      data: [120, 150, 100, 90, 200], // Example activity data
      backgroundColor: 'rgba(50, 50, 50, 0.7)', // Dark color for Guest activity
      borderColor: 'rgba(50, 50, 50, 1)', // Darker border color for Guest activity
      borderWidth: 1,
    },
    {
      label: 'User Activity', // Activity data for User users
      data: [80, 100, 150, 130, 170], // Example activity data
      backgroundColor: 'rgba(75, 0, 130, 0.7)', // Dark color for User activity
      borderColor: 'rgba(75, 0, 130, 1)', // Darker border color for User activity
      borderWidth: 1,
    },
  ],
};


  // Chart options for Activity
  const activityOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Weekly Activity',
        font: {
          size: 18,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
          font: {
            size: 14,
          },
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Activity Levels',
          font: {
            size: 14,
          },
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Define chart data for Top Products
  const pieData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Top Products',
        data: [300, 200, 100, 400],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options for Top Products
  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top Products',
        font: {
          size: 18,
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">Emotorad</div>
        <div className="nav-item">Dashboard</div>
        <div className="nav-item">Transactions</div>
        <div className="nav-item">Schedules</div>
        <div className="nav-item">Users</div>
        <div className="nav-item">Settings</div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <h1 className="dashboard-title">Dashboard</h1>

        {/* Metric Cards */}
        <div className="metrics-cards">
  <div className="metric-card">
    <h4>
      <FaMoneyBillWave /> Total Cash
    </h4>
    <p>$45,000</p>
    <section className="metric-change positive">+10%</section>
  </div>
  <div className="metric-card">
    <h4>
      <FaTag /> Total Transactions
    </h4>
    <p>1,200</p>
    <section className="metric-change negative">-5%</section>
  </div>
  <div className="metric-card">
    <h4>
      <FaRegThumbsUp /> Total Likes
    </h4>
    <p>9,500</p>
    <section className="metric-change positive">+20%</section>
  </div>
  <div className="metric-card">
    <h4>
      <FaUser className="user-icon" /> Total Users
    </h4>
    <p>2,800</p>
    <section className="metric-change positive">+8%</section>
  </div>
</div>

        {/* Charts */}
        <div className="charts">
          <div className="activity-chart">
            <h3>Activity - May-June 2021</h3>
            {/* Activity Bar Chart */}
            <Bar data={data} options={activityOptions} />
          </div>
          <div className="pie-chart">
            <h3>Top Products</h3>
            {/* Top Products Pie Chart */}
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        {/* Add Profile Button */}
        <button className="add-profile-btn"><AddProfile /></button>
      </div>
    </div>
  );
}

export default Dashboard;
