import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sideBar";

const Dashboard = () => {
  const user = useState(JSON.parse(localStorage.getItem("user")));
  const [data, setData] = useState(null);

  // Fetching dynamic data from a public API
  useEffect(() => {
    axios
      .get(
        "https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search",
        {
          headers: {
            "x-rapidapi-key":
              "257447c74amsh80142cd55308b8ep167500jsn1e8ecedef27c",
            "x-rapidapi-host": "udemy-paid-courses-for-free-api.p.rapidapi.com",
          },
          params: {
            page: "1",
            page_size: "10",
            query: "python",
          },
        }
      )
      .then((response) => {
        setData(response.data.courses.slice(0, 9));
      })
      .catch(
        () => {
          alert(
            "There is some error from our end. we try to fix it as soon as possible"
          )
        }
        
      );
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Dashboard Content */}
      <div className="flex-1 p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>

        {/* Dynamic API Content */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-2">Courses</h4>
          {data ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-lg rounded w-full flex flex-col"
                >
                  <h5 className="font-bold">{item.name}</h5>
                  <p>{item.description.slice(0, 100)}...</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
