import ProfileDetailsCallTextVideo from "@/components/ProfileDetailsCallTextVideo";
import ContactActionSkeleton from "@/LoadingComponent/ContactActionSkeleton";
import GoBack from "@/utilities/GoBack";
import { Mail, MessagesSquare, Phone, PhoneCall, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { MdOutlineAddIcCall } from "react-icons/md";
const profilesDetailsPromise = async () => {
  const res = await fetch("http://localhost:3000/profileData.json");
  const data = await res.json();
  return data;
};

const ProfileDetails = async ({ params }) => {
  const { id } = await params;
  const profileData = await profilesDetailsPromise();
  const matchedProfile = profileData.find(
    (profile) => profile.id === Number(id),
  );
  const {
    id: newId,
    name,
    picture,
    days_since_contact,
    goal,
    next_due_date,
    status,
    bio,
    email,
    phone,
    home,
    born,
    works,
    tags,
  } = matchedProfile;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Timeline", href: "/timeline" },
    { name: "Stats", href: "/stats" },
  ];

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
    <main className="relative z-10 py-5 md:py-10 px-4">
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-tiny uppercase text-cream-dim mb-5 md:mb-10 max-w-7xl mx-auto px-2 md:hidden">
        <GoBack></GoBack>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-cream transition"
          >
            {item.name} |
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-10 items-start max-w-7xl w-full mx-auto">
        {/* <!-- LEFT: portrait + quick action buttons --> */}
        <div className="col-span-12 lg:col-span-4">
          {/* Portrait */}
          <div className="aspect-[4/5] rounded-sm relative overflow-hidden border border-line-strong bg-linear-to-br from-[#3a3022] to-ink-900">
            <Image
              src={picture}
              alt="Ryan O'Brien"
              className="absolute inset-0 w-full h-full object-cover"
              width={200}
              height={250}
            />
            {/* Top corner labels */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-micro uppercase text-cream"></div>
            {/* Bottom corner labels */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-wine text-rose bg-ink-950/80 rounded-full text-[11px] tracking-[0.08em] uppercase backdrop-blur">
                {status}
              </span>
            </div>
          </div>

          {/* Quick action buttons — Call / Text / Video / Mail */}
          <Suspense fallback={<ContactActionSkeleton></ContactActionSkeleton>}>
            <ProfileDetailsCallTextVideo
              key={newId}
              newId={newId}
              name={name}
            ></ProfileDetailsCallTextVideo>
          </Suspense>
        </div>

        {/* <!-- RIGHT: identity — name, bio, KPIs, facts, rules --> */}
        <div className="col-span-12 lg:col-span-8">
          {/* <!-- Tags row (from profile.tags + status) --> */}
          <div className="font-mono text-[11px] tracking-micro uppercase text-cream-dim mb-4 flex flex-row gap-2">
            {tags.map((tag, index) => (
              <span className={`${tagColors[tag]} px-2 rounded`} key={index}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[88px] leading-[0.9] tracking-[-0.02em] font-light">
            <em className="italic text-gold">{name}</em>
          </h1>

          {/* Bio (italic pull quote style) */}
          <p className="font-serif italic text-[22px] text-cream-muted mt-6 max-w-[50ch] leading-relaxed">
            {bio}
          </p>
          <div className="mt-10 border-y border-line-strong grid grid-cols-2 sm:grid-cols-4 divide-x divide-line">
            {/* Cell 1 — days since last contact */}
            <div className="py-5 pr-5">
              <div className="font-mono text-[10px] tracking-tiny uppercase text-cream-dim">
                Last spoken
              </div>
              <div className="font-serif text-2xl mt-1">
                {days_since_contact}d ago
              </div>
            </div>

            {/* Cell 2 — goal cadence */}
            <div className="py-5 px-5">
              <div className="font-mono text-[10px] tracking-tiny uppercase text-cream-dim">
                Goal
              </div>
              <div className="font-serif text-2xl mt-1">Every {goal}d</div>
            </div>

            {/* Cell 3 — next due date, formatted nicely */}
            <div className="py-5 px-5">
              <div className="font-mono text-[10px] tracking-tiny uppercase text-cream-dim">
                Next due
              </div>
              <div className="font-serif text-2xl mt-1">
                {new Date(next_due_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </div>
            </div>

            {/* Cell 4 — status, with colour based on state */}
            <div className="py-5 pl-5">
              <div className="font-mono text-[10px] tracking-tiny uppercase text-cream-dim">
                Currently
              </div>
              <div
                className={`font-serif text-2xl mt-1 capitalize ${
                  statusColors[status]
                }`}
              >
                {status}
              </div>
            </div>
          </div>

          {/* <!-- TWO-COLUMN INFO BLOCK: facts on left, house rules on right --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
            {/* <!-- Facts (email from data + made-up extras) --> */}
            <div>
              <div className="font-mono text-[10px] tracking-micro uppercase text-cream-dim mb-3">
                Facts on file
              </div>
              <dl className="space-y-3">
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-tiny text-cream-dim w-24 shrink-0">
                    Email
                  </dt>
                  <dd className="font-serif text-[15px]">{email}</dd>
                </div>
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-tiny text-cream-dim w-24 shrink-0">
                    Phone
                  </dt>
                  <dd className="font-serif text-[15px]">{phone}</dd>
                </div>
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-tiny text-cream-dim w-24 shrink-0">
                    Born
                  </dt>
                  <dd className="font-serif text-[15px]">{born}</dd>
                </div>
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-tiny text-cream-dim w-24 shrink-0">
                    Home
                  </dt>
                  <dd className="font-serif text-[15px]">{home}</dd>
                </div>
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-tiny text-cream-dim w-24 shrink-0">
                    Works
                  </dt>
                  <dd className="font-serif text-[15px]">{works}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileDetails;
