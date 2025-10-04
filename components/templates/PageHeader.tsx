import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-br from-sky-100 to-blue-100 py-16 md:py-24">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={backgroundImage}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority
          />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
