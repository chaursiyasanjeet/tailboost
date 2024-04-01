import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const redirect = useNavigate();
  return (
    <aside
      id="sidebar"
      className="h-max md:h-screen bg-gray-900 overflow-y-hidden transition-all duration-500 ease-in-out"
    >
      <div className="flex justify-between items-center px-6 pt-6 mb-6">
        <div className=" text-white text-2xl font-bold">
          <ion-icon name="business-outline" className="icon-header" /> Tailboost
        </div>
      </div>
      <ul>
        <li className="px-6 py-4 text-white text-lg hover:bg-gray-800 cursor-pointer">
          <span
            className="text-center"
            onClick={() => {
              redirect("./dashboard");
            }}
          >
            <ion-icon name="home-outline" className="icon" /> Dashboard
          </span>
        </li>
        <li className="px-6 py-4 text-white text-lg hover:bg-gray-800 cursor-pointer">
          <span>
            <ion-icon name="log-out-outline" className="icon" /> Log Out
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
