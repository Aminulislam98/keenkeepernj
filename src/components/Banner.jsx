import React from "react";

const Banner = () => {
  return (
    <section className="relative border-b border-line bg-[#0D0B09]">
      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-24">
        <div className="grid grid-cols-12 gap-8 items-end">
          {/* <!-- LEFT: Issue no + date + headline + subheading --> */}
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-serif text-[72px] md:text-[108px] leading-16 sm:leading-30 tracking-[-0.03em] text-white">
              Friends to <em className="italic text-[#d4a24c]">keep</em>
              <br />
              close in your life.
            </h1>
            <p className="font-serif italic text-[#f3ead9] text-[19px] mt-8 max-w-[46ch] leading-relaxed">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>

          {/* <!-- RIGHT: live stats panel with current week totals --> */}
          <div className="col-span-12 lg:col-span-4">
            <div className="p-6 border border-[#3a3225]  bg-[#1a1713] text-white">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-[10px] tracking-micro uppercase text-[#d4a24c]">
                  This week
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="font-serif text-4xl">23</div>
                    <div className="font-mono text-[10px] tracking-tiny uppercase text-[#8a806d] mt-1">
                      calls
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-4xl">148</div>
                    <div className="font-mono text-[10px] tracking-tiny uppercase text-[#8a806d] mt-1">
                      messages
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="font-serif text-4xl">07</div>
                    <div className="font-mono text-[10px] tracking-tiny uppercase text-[#8a806d] mt-1">
                      video
                    </div>
                  </div>
                  <div>
                    {/* <!-- This count = profiles where status === 'overdue' in your data (6 of 20) --> */}
                    <div className="font-serif text-4xl text-rose">06</div>
                    <div className="font-mono text-[10px] tracking-tiny uppercase text-[#8a806d] mt-1">
                      overdue
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Dotted rule using tailwind gradient --> */}
              <div className="my-5 h-px bg-[linear-gradient(to_right,#3a3225_1px,transparent_1px)] [background-size:8px_1px]"></div>

              {/* <!-- Quote nudge from most overdue --> */}
              <p className="font-serif italic text-[13px] text-[#f3ead9] leading-relaxed">
                You have not spoken to {""}
                <span className="not-italic text-[#e8c170]">Hana</span> in 60
                days. She usually responds quickest early UK mornings that's her
                evening in Tokyo.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- BELOW HERO: meta row with sort controls --> */}
      </div>
    </section>
  );
};

export default Banner;
