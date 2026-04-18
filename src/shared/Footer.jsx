import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div>
      <section className="border-t py-20 bg-ink-900 text-white border-y border-line">
        <div className="max-w-225 mx-auto px-8 text-center">
          <div className="font-mono text-[10px] tracking-micro uppercase text-cream-dim">
            Made with care by Aminul Islam
          </div>
          <p className="font-serif text-3xl md:text-[40px] leading-tight mt-6 text-cream font-light">
            The best software is the kind your{" "}
            <span className="text-gold"> grandmother </span> notices
            <em className="italic text-gold-light">only</em> because she hears
            from you more often.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-line bg-ink-900">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <div className="">
              <div className="flex items-center gap-3 mb-6">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="38"
                    height="38"
                    rx="2"
                    stroke="#f3ead9"
                    strokeWidth="1"
                  />
                  <path
                    d="M12 10 L12 30 M12 20 L22 10 M12 20 L22 30 M26 14 L30 14 M26 22 L30 22 M26 30 L30 30"
                    stroke="#d4a24c"
                    strokeWidth="1.4"
                    strokeLinecap="square"
                  />
                </svg>
                <div className="font-serif text-3xl text-[#f3ead9]">
                  KeenKeeper
                </div>
              </div>
              <p className="font-serif italic text-[17px] leading-relaxed text-[#f3ead9] max-w-[44ch]">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <input
                  type="email"
                  placeholder="your@email.address"
                  className="bg-transparent border border-[#3a3225] focus:border-gold px-4 py-2.5 text-white text-sm flex-1 max-w-70 focus:outline-none transition"
                />
                <button className="bg-[#f3ead9] text-black hover:bg-[#e8c170] font-mono text-[11px] tracking-tiny uppercase px-5 py-2.5 rounded-sm transition">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="">
              <div className="font-mono text-[10px] tracking-micro uppercase text-[#8a806d] mb-5">
                Sections
              </div>
              <ul className="space-y-3 font-serif text-[15px]  text-[#f3ead9]">
                <li>
                  <Link href={"/"} className="hover:text-gold-light transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/timeline"}
                    className="hover:text-gold-light transition"
                  >
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/stats"}
                    className="hover:text-gold-light transition"
                  >
                    Stats
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <div className="font-mono text-[10px] tracking-micro uppercase text-cream-dim mb-5 text-[#8a806d]">
                Studio
              </div>
              <ul className="space-y-3 font-serif text-[15px] text-[#f3ead9]">
                <li>
                  <Link href={""} className="hover:text-gold-light transition">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:text-gold-light transition">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:text-gold-light transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:text-gold-light transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] tracking-tiny uppercase  text-cream-dim mt-10 ">
            <div>© 2026 KeenKeeper. All rights reserved. .</div>
            <div className="flex items-center gap-6 justify-center">
              <span>Privacy</span>
              <span>Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
