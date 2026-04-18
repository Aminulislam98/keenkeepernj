import { Mail, MessagesSquare, PhoneCall, Video } from "lucide-react";
import React from "react";

const ProfileDetailsCallTextVideo = () => {
  const { callHistory, setCallHistory } = useContext(AllDataContext);

  const newCall = () => {
    const newCallDetails = {
      id: id,
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
      id: id,
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
      id: id,
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
      <button className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition">
        <span className="font-mono text-[9px] tracking-tiny uppercase flex flex-col gap-1">
          <PhoneCall></PhoneCall>
          Call
        </span>
      </button>
      <button className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition">
        <MessagesSquare></MessagesSquare>
        <span className="font-mono text-[9px] tracking-tiny uppercase">
          Text
        </span>
      </button>
      <button className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition">
        <Video></Video>
        <span className="font-mono text-[9px] tracking-tiny uppercase">
          Video
        </span>
      </button>
      <button className="border border-line-strong hover:border-gold text-cream hover:text-gold-light rounded-sm py-3 flex flex-col items-center gap-1.5 transition">
        <Mail></Mail>
        <span className="font-mono text-[9px] tracking-tiny uppercase">
          Mail
        </span>
      </button>
    </div>
  );
};

export default ProfileDetailsCallTextVideo;
