import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center bg-fixed pt-[100px] pb-[80px]"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: backgroundImage ? "200%" : undefined,
      }}
    >
      <div className="relative z-10 text-center bg-white/60 backdrop-blur-sm py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-atago-text-dark mb-6">{title}</h1>
          {description && <h2 className="text-xl text-atago-text-body">{description}</h2>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
