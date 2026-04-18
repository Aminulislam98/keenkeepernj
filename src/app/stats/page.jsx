"use client";
import React, { useContext, useEffect } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { dataContext } from "../../context/AllDataProvider";
import Link from "next/link";

const metadata = {
  title: "Stats - KeenKeeper",
  description:
    "View your friendship analytics and track your interactions with the people who matter most.",
};

const StatsPage = () => {
  const { callHistory } = useContext(dataContext);
  const totalCall = callHistory.reduce((count, item) => {
    if (item.title === "Call") {
      return count + 1;
    }
    return count;
  }, 0);
  const totalText = callHistory.reduce((count, item) => {
    if (item.title === "Text") {
      return count + 1;
    }
    return count;
  }, 0);
  const totalVideo = callHistory.reduce((count, item) => {
    if (item.title === "Video") {
      return count + 1;
    }
    return count;
  }, 0);
  const data = [
    { name: "Text", value: totalText, fill: "#c97b63" },
    { name: "Call", value: totalCall, fill: "#7a8a6b" },
    { name: "Video", value: totalVideo, fill: "#8b4a4a" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [callHistory]);

  return (
    <section className="max-w-full w-full bg-ink-950 min-h-[80vh] flex flex-col justify-center items-center px-4">
      <div className="flex justify-center md:justify-start items-center max-w-6xl w-full mx-auto mb-6">
        {callHistory.length > 0 ? (
          <h1 className="font-semibold text-4xl md:text-start text-center">
            Friendship Analytics
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center items-center bg-ink-800 flex-col pb-8 border border-line-strong rounded-2xl max-w-6xl w-full mx-auto">
        <h2 className="max-w-full w-full text-start text-xl font-medium p-8 text-gold">
          By Interaction Type
        </h2>

        {callHistory.length > 0 ? (
          <PieChart width={300} height={320}>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="80%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend wrapperStyle={{ paddingTop: "16px" }} />
            <Tooltip />
          </PieChart>
        ) : (
          // 👇 empty state
          <div className="min-h-[50vh] flex items-center justify-center px-4 ">
            <div className="flex flex-col items-center text-center ">
              <h2 className="text-4xl font-medium text-gold tracking-tight mb-2.5">
                No data yet
              </h2>

              <p className="text-sm text-cream-dim leading-relaxed max-w-[255px] mb-5">
                Make a call, send a text, or start a video to see your stats.
              </p>
              <Link
                href={"/"}
                className="px-4 py-1 rounded-full text-black bg-gold hover:bg-cream-muted text-sm font-medium transition-colors duration-200"
              >
                Go back home
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsPage;
