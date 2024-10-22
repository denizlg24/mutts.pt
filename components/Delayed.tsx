"use client";
import React, { useEffect, useState } from "react";

const Delayed = ({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isShown ? children : null;
};

export default Delayed;
