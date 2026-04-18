"use client";
import { dataContext } from "@/context/AllDataProvider";
import { Mail, MessagesSquare, PhoneCall, Video } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ProfileDetailsCallTextVideo = ({ newId, name }) => {
  const { callHistory, setCallHistory } = useContext(dataContext);

  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const newCall = () => {
    const newCallDetails = {
      id: newId,
      title: "Call",
      name: name,
      date: formattedDate,
    };
    setCallHistory([...callHistory, newCallDetails]);

    toast.success(`Call with ${name} completed`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const newText = () => {
    const newTextDetails = {
      id: newId,
      title: "Text",
      name: name,
      date: formattedDate,
    };
    setCallHistory([...callHistory, newTextDetails]);
    toast.success(`Message sent to ${name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const newVideo = () => {
    const newVideoDetails = {
      id: newId,
      title: "Video",
      name: name,
      date: formattedDate,
    };
    setCallHistory([...callHistory, newVideoDetails]);
    toast.success(`Video call with ${name} completed`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      <button
        onClick={() => {
          newCall();
        }}
        className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition"
      >
        <span className="font-mono text-[9px] tracking-tiny uppercase flex flex-col gap-1">
          <PhoneCall></PhoneCall>
          Call
        </span>
      </button>
      <button
        onClick={() => {
          newText();
        }}
        className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition"
      >
        <MessagesSquare></MessagesSquare>
        <span className="font-mono text-[9px] tracking-tiny uppercase">
          Text
        </span>
      </button>
      <button
        onClick={() => {
          newVideo();
        }}
        className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition"
      >
        <Video></Video>
        <span className="font-mono text-[9px] tracking-tiny uppercase">
          Video
        </span>
      </button>
      <button
        href={"#"}
        className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition cursor-not-allowed"
      >
        <Mail></Mail>
        <span className="font-mono text-[9px] tracking-tiny uppercase ">
          Mail
        </span>
      </button>
    </div>
  );
};

export default ProfileDetailsCallTextVideo;
