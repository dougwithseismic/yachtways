// http://localhost:3000/vessels/pardo-yachts-p43-itcdpp4254e122
// https://api.yachtway.com/api/listings/pardo-yachts-p43-itcdpp4254e122

import { YachtDetails } from "@/app/types";
import { VesselProvider, useVessel } from "@/context/vessel-context";

const fetchVessel = async (slug: string): Promise<YachtDetails> => {
  try {
    const response = await fetch(
      `https://api.yachtway.com/api/listings/${slug}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch vessel data");
  }
};

const Page = async (props: any) => {
  const yachtDetails = await fetchVessel(props.params.slug);

  return (
    <VesselProvider vessel={yachtDetails}>
      <main className="flex min-h-screen flex-col">
        <section>
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">
              {`${yachtDetails.generalInfo.make} ${yachtDetails.generalInfo.model} ${yachtDetails.generalInfo.year}`}
            </h1>
          </div>
        </section>
      </main>
    </VesselProvider>
  );
};

export default Page;