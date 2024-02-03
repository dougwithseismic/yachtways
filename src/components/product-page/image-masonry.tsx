"use client";
import { YachtDetails } from "@/app/types";
import { useVessel } from "@/context/vessel-context";
import Image from "next/image";

const ImageMasonry = () => {
  // Using the useVessel hook to access the vessel data from the context
  // Forcing the value to be non-null using the non-null assertion operator
  const yachtDetails = useVessel()!;
  console.log("yachtDetails :>> ", yachtDetails);

  yachtDetails.photos.exterior.length = 4;
  return (
    <section className="flex h-full px-4">
      <div className="container flex mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-lg overflow-hidden">
          {yachtDetails.photos.exterior.map((item, index) => (
            <div key={index} className="relative aspect-video">
              <Image
                fill
                src={item.image.url!}
                alt={`${yachtDetails.generalInfo.make} ${yachtDetails.generalInfo.model} Exterior`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMasonry;
