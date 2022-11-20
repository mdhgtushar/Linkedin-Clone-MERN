import React, { useEffect, useState } from "react";
import Loading from "../inc/components.jsx/Loading";
import NotificationBox from "../inc/components.jsx/NotificationBox";

const Notification = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="w-64 mr-4">
        <div className="text-center border border-gray-200 px-4 py-8">
          <h2 className="text-lg">Manage your Notifications</h2>
        </div>
      </div>
      <div className="flex-1">
        <div className=" border border-gray-200 py-4">
          <NotificationBox />
          <NotificationBox />
          <NotificationBox />
          <NotificationBox />
        </div>
      </div>
      <div className="w-64 ml-4">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="no magic"
        />
      </div>
    </>
  );
};

export default Notification;
