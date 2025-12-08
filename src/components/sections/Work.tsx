import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sofa from '../../assets/work/sofa.svg';
import KeyBoard from '../../assets/work/key-board.svg';
import WorkMedia from '../../assets/work/work-media.svg';
import DDDone from '../../assets/work/dddone.svg';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const LatestWork = () => {
  const [activeCategory, setActiveCategory] = useState('Show All');

  const projects: Project[] = [
    { id: 1, title: 'SOFA', category: 'Design', image: Sofa },
    { id: 2, title: 'KeyBoard', category: 'Branding', image: KeyBoard },
    { id: 3, title: 'Work Media', category: 'Illustration', image: WorkMedia },
    { id: 4, title: 'DDDone', category: 'Motion', image: DDDone },
  ];

  const categories = [
    'Show All',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === 'Show All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    // heading + work array column container
    <div className="flex flex-col items-center gap-6 w-full">

      <h2 className="text-[16px] uppercase tracking-[3px] text-[#EF6D58] font-medium text-center">
        Portfolio
      </h2>

      <h3 className="text-[32px] font-extrabold text-white text-center tracking-[-1px]">
        Latest Work
      </h3>

      {/* categories row container */}
      <div className="flex items-center justify-center gap-6 flex-wrap mt-4">
        {categories.map((cat) => {
          const count = projects.filter((p) =>
            cat === 'Show All' ? true : p.category === cat
          ).length;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center px-3 h-8 min-w-16 font-medium text-[16px] transition-all ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <span>{cat}</span>
              <sup className="ml-1 text-[12px]">{count}</sup>
            </button>
          );
        })}
      </div>

      {/* work cards in exactly two rows with equal spacing (horizontal + vertical) */}
      <motion.div layout className="flex flex-col w-full gap-8">
        {Array.from({ length: Math.ceil(filtered.length / 2) }, (_, rowIndex) => {
          const rowItems = filtered.slice(rowIndex * 2, rowIndex * 2 + 2);
          return (
            <div key={rowIndex} className="flex flex-col md:flex-row justify-center gap-8">
              <AnimatePresence>
                {rowItems.map((item, innerIndex) => {
                  const globalIndex = rowIndex * 2 + innerIndex;
                  // first and last (index 0 & 3) small; middle (1 & 2) large
                  const isSmall = [0, 3].includes(globalIndex);
                  const desktopWidth = isSmall ? 'lg:w-[470px]' : 'lg:w-[670px]';
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        relative rounded-lg overflow-hidden cursor-pointer group
                        h-[416px]
                        w-full sm:w-full md:w-[48%]
                        ${desktopWidth}
                      `}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute left-10 bottom-[120px] bg-white text-black pt-1 rounded-full w-[120px] h-[38px] flex items-center justify-center uppercase text-[14px]">
                        {item.category}
                      </div>
                      <h3 className="absolute left-10 bottom-[50px] text-white font-['Epilogue'] font-extrabold text-[32px] leading-14 w-full">
                        {item.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>

      {/* explore more button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 text-white transition font-['Epilogue'] font-black text-[14px] leading-[100%] tracking-[0px] text-center uppercase hover:bg-[#FF6A00] border rounded-md  border-gray-600">
          Explore More
        </button>
      </div>
    </div>
  );
};

const Work = () => (
  <section
    id="work"
    className="bg-[#28293E] w-full py-16 md:py-20 px-4 md:px-8 lg:px-[135px]"
  >
    <LatestWork />
  </section>
);

export default Work;
