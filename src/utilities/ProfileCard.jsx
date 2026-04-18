"use client";
import { s } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ profile }) => {
  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    goal,
    bio,
  } = profile;

  const statusColors = {
    overdue: "text-green-500",
    "on-track": "text-red-500",
    "almost due": "text-gold-light",
  };
  const tagColors = {
    // Intimate — gold (warmest, most prized)
    "close friend": "bg-gold/10 text-gold-light border border-gold/30",

    // Family-like — rose (warm, familial)
    "family friend": "bg-rose/10 text-rose border border-rose/30",
    childhood: "bg-rose/10 text-rose border border-rose/30",

    // Professional — sage (calm, grounded)
    work: "bg-sage/10 text-sage border border-sage/30",
    mentor: "bg-sage/10 text-sage border border-sage/30",
    coding: "bg-sage/10 text-sage border border-sage/30",

    // Academic — slate blue (studious, cool)
    college: "bg-slate-500/10 text-slate-400 border border-slate-500/30",
    "study group": "bg-slate-500/10 text-slate-400 border border-slate-500/30",

    // Community — tan (warm, shared spaces)
    community: "bg-amber-700/10 text-amber-600 border border-amber-700/30",
    mosque: "bg-amber-700/10 text-amber-600 border border-amber-700/30",
    neighbour: "bg-amber-700/10 text-amber-600 border border-amber-700/30",
    "book club": "bg-amber-700/10 text-amber-600 border border-amber-700/30",

    // Interests — violet (creative, personal passions)
    football: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    gym: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    fitness: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    music: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    design: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    cooking: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    travel: "bg-violet-500/10 text-violet-400 border border-violet-500/30",

    // Digital — teal (online, distant)
    "online friend": "bg-teal-500/10 text-teal-400 border border-teal-500/30",
  };
  return (
    <Link
      href={`/profiles/${id}`}
      className="group bg-ink-800 border border-line hover:border-gold transition-all duration-300 rounded-sm p-6 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-5">
        <Image
          width={12}
          height={12}
          src={picture}
          alt={name}
          className="w-12 h-12 rounded-sm object-cover border border-line-strong"
        />
        <span className="font-mono text-[10px] tracking-tiny uppercase text-cream-dim">
          {id}
        </span>
      </div>
      <h3 className="font-serif text-xl font-light">{name}</h3>
      <div className="font-mono text-[10px] tracking-tiny uppercase text-cream-dim mt-1 gap-2 flex flex-wrap">
        {tags.map((tag, index) => (
          <span key={index} className={`${tagColors[tag]} px-1`}>
            {tag}
          </span>
        ))}
      </div>
      <p className="font-serif italic text-[13px] text-cream-muted mt-4 leading-relaxed line-clamp-2">
        {bio}
      </p>
      <div className="my-4 h-px bg-[linear-gradient(to_right,#3a3225_1px,transparent_1px)] [background-size:8px_1px]"></div>
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex px-3 py-1 border border-line-strong text-cream-muted rounded-full text-[11px] tracking-[0.08em] uppercase ${statusColors[status] || "text-cream-muted"}`}
        >
          {status.toUpperCase()}
        </span>
        <span className="font-mono text-[10px] tracking-tiny uppercase text-rose">
          {days_since_contact}d ago
        </span>
      </div>
    </Link>
  );
};

export default ProfileCard;
