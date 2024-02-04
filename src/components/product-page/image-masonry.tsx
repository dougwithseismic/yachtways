"use client";

import { Photo } from "@/app/types";
import Image from "next/image";
import { useState } from "react";

// button.tsx
type ImageCategory = "interior" | "exterior" | "deckLayout";

type ButtonProps = {
  label: ImageCategory;
  isActive: boolean;
  onClick: (category: ImageCategory) => void;
};

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className={`${
      isActive ? "bg-black text-white" : "bg-white text-black"
    } px-4 py-2 rounded-md`}
  >
    {label}
  </button>
);

// ImageGrid.tsx
type ImageGridProps = {
  images: Photo[];
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-lg overflow-hidden">
    {images.map((item, index) => (
      <div key={index} className="relative aspect-video">
        <Image
          width={500}
          height={280}
          alt="TODO: Add alt text here (yacht make/model)"
          src={item.image.url!}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

// ImageMasonry.tsx
type CategorySelectorProps = {
  categories: ImageCategory[];
  selectedType: ImageCategory;
  onSelectCategory: (category: ImageCategory) => void;
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedType,
  onSelectCategory,
}) => (
  <div className="flex space-x-4 py-4">
    {categories.map((category) => (
      <Button
        key={category}
        label={category}
        isActive={selectedType === category}
        onClick={() => onSelectCategory(category)}
      />
    ))}
  </div>
);

interface ImageMasonryProps {
  images: {
    interior: Photo[];
    exterior: Photo[];
    deckLayout: Photo[];
  };
}

const ImageMasonry: React.FC<ImageMasonryProps> = ({ images }) => {
  const [imageType, setImageType] = useState<ImageCategory>("exterior");
  const categories = Object.keys(images).filter(
    (key) => images[key as ImageCategory].length > 0
  ) as ImageCategory[];

  return (
    <section className="flex h-full px-4">
      <div className="container flex flex-col mx-auto">
        <CategorySelector
          categories={categories}
          selectedType={imageType}
          onSelectCategory={setImageType}
        />
        <ImageGrid images={images[imageType]} />
      </div>
    </section>
  );
};

export default ImageMasonry;
