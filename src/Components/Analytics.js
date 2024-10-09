import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Sidebar from "./sideBar";

// Register the components
Chart.register(...registerables);

const Analytics = () => {
  // Mock data for charts
  const engagementData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Engagement",
        data: [30, 50, 70, 90, 60, 100],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const activityData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Activity",
        data: [20, 45, 35, 60, 55, 80],
        fill: true,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Analytics Content */}
      <div className="flex-1 p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Analytics Dashboard</h2>

        {/* User Engagement Analytics */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-4">User Engagement Analytics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-md h-80 md:h-96">
              <h5 className="font-bold">Engagement Bar Chart</h5>
              <Bar
                data={engagementData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                }}
              />
            </div>
            <div className="bg-white p-4 rounded shadow-md h-80 md:h-96">
              <h5 className="font-bold">Activity Line Chart</h5>
              <Line
                data={activityData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
