interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface TimelineLayoutProps {
  items: TimelineItem[];
}

const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-200"></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-20">
            <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">{item.time}</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-sky-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineLayout;
