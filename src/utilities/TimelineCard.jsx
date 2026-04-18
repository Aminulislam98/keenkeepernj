import Link from "next/link";
import React from "react";
import { FcMissedCall, FcVideoCall } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";

const TimelineCard = ({ history }) => {
  const { name, title, date, id } = history;
  const conversationsType = {
    Call: <FcMissedCall className="w-9 h-9 md:w-12 md:h-12" />,
    Video: <FcVideoCall className="w-9 h-9 md:w-12 md:h-12" />,
    Text: <RiMessage2Fill className="w-9 h-9 md:w-12 md:h-12" />,
  };
  return (
    <div className=" bg-ink-800 flex flex-row justify-between gap-1 max-w-full w-full border border-line-strong p-3 md:p-4 rounded-xl md:hover:scale-101 transition-transform duration-200">
      <div className="flex flex-row justify-start items-center gap-2 md:gap-3">
        <div>{conversationsType[title]}</div>
        {/* details */}
        <div>
          <div className="flex flex-row justify-center items-center gap-2 text-sm md:text-xl">
            <h2 className="font-medium text-base md:text-xl text-gold">
              {title}
            </h2>
            <p className="font-normal  text-cream">With {name}</p>
          </div>
          <div>
            <p className="font-normal text-base text-cream">{date}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={`/profiles/${id}`}
          className="text-gold hover:text-gold-light text-sm md:text-base font-medium transition-colors  duration-200"
        >
          Info
        </Link>
      </div>
    </div>
  );
};

export default TimelineCard;
