import React from 'react';

import { Asset } from '@/gql/graphql';

interface ImageCarouselProps {
  imageAssets: Asset[];
}

export function ImageCarousel({ imageAssets }: ImageCarouselProps) {
  const [imageIndex, setImageIndex] = React.useState(0);

  function handleShowPreviousImage() {
    setImageIndex((previousImageIndex) => {
      if (previousImageIndex === 0) {
        return imageAssets.length - 1;
      }

      return previousImageIndex - 1;
    });
  }

  function handleShowNextImage() {
    setImageIndex((previousImageIndex) => {
      if (previousImageIndex === imageAssets.length - 1) {
        return 0;
      }

      return previousImageIndex + 1;
    });
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="duration-40 ease-out flex h-full transition"
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
        }}
      >
        {imageAssets.map((asset, index) => (
          <img
            alt={asset.title || `Hotel image ${index + 1}`}
            className="aspect-4/3 bg-accent-50 h-full object-cover self-center"
            key={asset.sys.id}
            src={
              asset.url ||
              'https://placehold.co/533x400/F3E7F1/6A3460?font=open-sans&text=Hotel%20Image'
            }
          />
        ))}
      </div>

      <div className="absolute flex h-full items-center justify-between px-4 text-accent-500 text-xl top-0 w-full">
        <button
          className="bg-accent-50/50 flex items-center justify-center pr-1 rounded-full shadow-accent-50 size-10 transition-colors hover:bg-accent-50 hover:shadow-2xl"
          onClick={handleShowPreviousImage}
        >
          &#x25C4;
        </button>
        <button
          className="bg-accent-50/50 flex items-center justify-center pl-1 rounded-full shadow-accent-50 size-10 transition-all hover:bg-accent-50 hover:shadow-2xl"
          onClick={handleShowNextImage}
        >
          &#x25BA;
        </button>
      </div>

      <div className="absolute bottom-0 flex gap-3 justify-center opacity-50 py-4 w-full hover:opacity-100">
        {imageAssets.map((_, index) => (
          <div
            onClick={() => setImageIndex(index)}
            key={'circle' + index}
            className={`cursor-pointer rounded-full size-4 transition-transform hover:scale-125 ${
              index == imageIndex ? 'bg-accent-500' : 'bg-accent-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
