import { useState } from "react";
import TeamPhoto1 from '../../assets/our-team/team-photo-1.svg';
import TeamPhoto2 from '../../assets/our-team/team-photo-2.svg';
import TeamPhoto3 from '../../assets/our-team/team-photo-3.svg';
import TeamPhoto4 from '../../assets/our-team/team-photo-4.svg';
import LeftArrow from '../../assets/our-team/left-arrow.svg';
import RightArrow from '../../assets/our-team/right-arrow.svg';
import FounderPic from '../../assets/our-team/founder-pic.svg';
import QuoteMark from '../../assets/our-team/quote-mark.svg';

// TEAM DATA
const team = [
  { id: 1, name: "Azah Anyeni", role: "Designer", image: TeamPhoto1 },
  { id: 2, name: "Roelof Bekkenenks", role: "React Developer", image: TeamPhoto2 },
  { id: 3, name: "Leonardo Oliveira", role: "Illustrator", image: TeamPhoto3 },
  { id: 4, name: "Izabella Tabakova", role: "Product Designer", image: TeamPhoto4 },
];

const OurTeam = () => {
  const [desktopIndex, setDesktopIndex] = useState(0); // For sliding rows on desktop when more than 4
  const [mobileIndex, setMobileIndex] = useState(0);

  // DESKTOP PAGINATION (shows 4 per slide)
  const perPage = 4;
  const desktopPages = Math.ceil(team.length / perPage);

  const nextDesktop = () => {
    if (desktopPages > 1) {
      setDesktopIndex((i) => (i + 1) % desktopPages);
    }
  };

  const prevDesktop = () => {
    if (desktopPages > 1) {
      setDesktopIndex((i) => (i - 1 + desktopPages) % desktopPages);
    }
  };

  const nextMobile = () => setMobileIndex((i) => (i + 1) % team.length);
  const prevMobile = () => setMobileIndex((i) => (i - 1 + team.length) % team.length);

  const desktopStart = desktopIndex * perPage;
  const desktopSlice = team.slice(desktopStart, desktopStart + perPage);

  return (
    <section className="min-h-screen w-full bg-[#28293E] py-12 px-6 md:px-[135px] text-white">
      {/* HEADINGS */}
      <div className="flex flex-col gap-3 mb-12 text-center md:text-left">
        <p className="text-[#EF6D58] text-[14px] tracking-[3px] uppercase">Our Team</p>
        <h3 className="font-extrabold text-[32px] md:text-[56px] leading-tight">
          Team of Designers<br className="hidden md:block" />and Developers
        </h3>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full items-center relative">
        {/* LEFT ARROW */}
        <button
          title="left arrow"
          className="absolute left-0 -ml-14 w-10 h-10 rounded-full bg-[#1E1F2E] flex items-center justify-center cursor-pointer"
          onClick={prevDesktop}
        >
          <img src={LeftArrow} alt="left arrow" className="w-4" />
        </button>

        {/* RIGHT ARROW */}
        <button
        title="right arrow"
          className="absolute right-0 -mr-14 w-10 h-10 rounded-full bg-[#1E1F2E] flex items-center justify-center cursor-pointer"
          onClick={nextDesktop}
        >
          <img src={RightArrow} alt="right-arrow" className="w-4" />
        </button>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6 w-full transition-all duration-300">
          {desktopSlice.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="border border-[#3A3C56] rounded-md w-full h-[260px] flex items-center justify-center bg-[#1E1F2E]">
                <img src={member.image} alt="team member" className="object-contain w-[180px] h-[200px]" />
              </div>
              <p className="font-bold text-[22px] mt-3">{member.name}</p>
              <p className="text-gray-400 text-[16px]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP INDICATORS */}
      <div className="hidden md:flex gap-2 mt-6 justify-center">
        {Array.from({ length: desktopPages }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full border border-[#4E4F6E] ${desktopIndex === i ? "bg-[#EF6D58]" : "bg-[#28293E]"}`}
          ></div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full flex flex-col items-center mt-6">
        {/* CARD */}
        <div className="border border-[#3A3C56] w-full max-w-[360px] h-[260px] rounded-md bg-[#1E1F2E] flex items-center justify-center">
          <img src={team[mobileIndex].image} alt="team photo" className="object-contain w-[170px] h-[200px]" />
        </div>

        <p className="font-bold text-[22px] mt-3">{team[mobileIndex].name}</p>
        <p className="text-gray-400 text-[14px]">{team[mobileIndex].role}</p>

        {/* ARROWS */}
        <div className="flex gap-4 my-5">
          <button title="previous" className="w-10 h-10 rounded-full bg-[#1E1F2E] flex items-center justify-center" onClick={prevMobile}>
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </button>
          <button name="next" className="w-10 h-10 rounded-full bg-[#1E1F2E] flex items-center justify-center" onClick={nextMobile}>
            <img src={RightArrow} alt="right arrow" className="w-4" />
          </button>
        </div>

        {/* INDICATORS */}
        <div className="flex gap-2 mt-2">
          {team.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border border-[#4E4F6E] ${i === mobileIndex ? "bg-[#EF6D58]" : "bg-[#28293E]"}`}
            ></div>
          ))}
        </div>
      </div>

      {/* FOUNDER SECTION */}
      <div className="flex flex-col md:flex-row gap-10 mt-20 items-center">
        <div className="border border-[#3A3C56] w-full max-w-[800px]">
          <img src={FounderPic} alt="founder photo" className="w-full" />
        </div>

        <div className="relative flex flex-col md:ml-12 w-full text-center md:text-left">
          <img src={QuoteMark} alt="quotation mark" className="absolute top-0 right-0 w-[52px] md:w-[72px] opacity-90" />

          <p className="text-[#EF6D58] text-[14px] tracking-[3px] uppercase mb-3">Founder’s Words</p>

          <h3 className="font-extrabold text-[28px] md:text-[40px] leading-tight mb-5">
            Digital agency is a business you hire to outsource your digital marketing efforts
          </h3>

          <p className="text-[16px] mt-6">Ren Delan</p>
          <p className="text-gray-400 text-[14px] mt-2">Founder</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;