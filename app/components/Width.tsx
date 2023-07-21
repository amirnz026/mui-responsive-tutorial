"use client";
import { useEffect, useState } from "react";

export default function Width() {
  const size = useWindowSize();
  return (
    <div className="absolute top-[calc(50%+7rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
      {size.width}px
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
