"use client";

import { motion } from 'framer-motion';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineLayoutProps {
  items: TimelineItem[];
}

const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* 縦ライン */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-green-400 h-full rounded-full hidden md:block"></div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className={`relative flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } items-center md:gap-12 my-16`}
        >
          {/* 接点丸 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-white border-4 border-green-500 rounded-full shadow-md z-10 hidden md:block"></div>

          {/* 画像 */}
          <div className="md:w-1/2 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-orange-200"
            >
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover natural-brightness" 
                />
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-green-50 flex items-center justify-center">
                  <div className="text-orange-400 text-6xl">📸</div>
                </div>
              )}
            </motion.div>
          </div>

          {/* テキスト */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0">
            <div className="text-center md:text-left">
              <p className="text-green-600 font-bold text-sm mb-2">{item.time}</p>
              <h3 className="text-2xl font-bold mb-3 text-atago-text-dark">{item.title}</h3>
              <p className="text-atago-text-body leading-relaxed">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineLayout;
