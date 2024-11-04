import React, { useState, useEffect } from "react";

const NotificationArea = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="-mt-13.25 ml-4 text-white" >
      12:30
    </div>
  );
};

export default NotificationArea;
