"use client";

import { dataContext } from "@/context/AllDataProvider";
import NoTimelineAvailable from "@/utilities/NoTimelineAvailable";
import TimelineCard from "@/utilities/TimelineCard";
import { useContext, useEffect, useMemo, useState } from "react";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

const TimeLIne = () => {
  const { callHistory } = useContext(dataContext);
  const [filter, setFilter] = useState("Filter Timeline");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [callHistory]);

  const filterHistory = useMemo(() => {
    if (filter === "See all history") {
      return callHistory;
    }
    if (filter === "Text") {
      return callHistory.filter((text) => text.title === "Text");
    }
    if (filter === "Video") {
      return callHistory.filter((video) => video.title === "Video");
    }
    if (filter === "Call") {
      return callHistory.filter((call) => call.title === "Call");
    }
    return callHistory;
  }, [filter, callHistory]);

  useEffect(() => {
    const filterNames = ["Text", "Call", "Video"];
    if (
      filterNames.includes(filter) &&
      filterHistory.length === 0 &&
      callHistory.length > 0
    ) {
      toast.error(`No ${filter} history available!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      setFilter("See all history");
    }
  }, [filter, filterHistory, callHistory]);

  return (
    <div className=" bg-ink-900">
      <section className="min-h-[55vh] py-8 px-4">
        {filterHistory.length === 0 ? (
          <NoTimelineAvailable></NoTimelineAvailable>
        ) : (
          <div className="max-w-6xl w-full mx-auto ">
            {/* top section */}
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-5xl ">Timeline</h1>
              <div className="dropdown mb-3 border border-black/10 rounded-xl w-60 ">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center justify-between px-4 py-2 rounded-md text-cream bg-ink-800 transition-colors duration-200 text-sm font-medium cursor-pointer "
                >
                  {filter}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="w-60 dropdown-content menu bg-ink-800 border
                 border-line-strong rounded-xl z-50  p-2 mt-1 shadow-md"
                >
                  <li
                    onClick={() => {
                      document.activeElement.blur();
                      setFilter("Text");
                    }}
                  >
                    <a className="text-cream hover:bg-gold hover:text-black rounded-lg flex items-center gap-2">
                      <IoMdText />
                      Text
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      document.activeElement.blur();
                      setFilter("Call");
                    }}
                  >
                    <a className="text-cream hover:bg-gold hover:text-black rounded-lg flex items-center gap-2">
                      <IoCall />
                      Call
                    </a>
                  </li>

                  <li
                    onClick={() => {
                      document.activeElement.blur();
                      setFilter("Video");
                    }}
                  >
                    <a className="text-cream hover:bg-gold hover:text-black rounded-lg flex items-center gap-2">
                      <IoMdVideocam />
                      Video
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      document.activeElement.blur();
                      setFilter("See all history");
                    }}
                  >
                    <a className="text-cream hover:bg-gold hover:text-black rounded-lg flex items-center gap-2">
                      See All History
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* bottom section */}
            <div className="flex flex-col gap-3 mt-4">
              {filterHistory.map((history, index) => (
                <TimelineCard history={history} key={index}></TimelineCard>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TimeLIne;
