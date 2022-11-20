import React from "react";
import { Link } from "react-router-dom";

const NotificationBox = () => {
  return (
    <>
      <div className="flex flex-row justify-start px-4 p-2">
        <Link to="/profile">
          <img
            className="rounded-full h-12 w-12 overflow-hidden"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt=""
          />
        </Link>
        <div className="pl-5 flex-1">
          <b> Hobayer Golondaz</b> -<span className="text-sm"> 1d</span>
          <p className="text-sm">
            In this podcast we talk about courses, the journey when learning
            serverless and the value of serverless for developers, not just for
            companies.In this podcast we talk about courses, the journey when
            learning serverless and the value of serverless for developers, not
            just for companies.In this podcast we talk about courses, the
            journey when learning serverless and the value of serverless for
            developers, not just for companies.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationBox;
