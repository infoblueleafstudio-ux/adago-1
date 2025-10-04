import Image from 'next/image';

export interface GalleryImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export default function Gallery({ 
  images, 
  title, 
  className = '', 
  columns = 3 
}: GalleryProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {title && <h3 className="text-2xl font-bold text-gray-900">{title}</h3>}
      
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {images.map((image, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image.url}
              alt={image.alt || `ギャラリー画像 ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes={`(max-width: 768px) 100vw, (max-width: 1200px) ${100 / columns}vw, ${100 / columns}vw`}
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
