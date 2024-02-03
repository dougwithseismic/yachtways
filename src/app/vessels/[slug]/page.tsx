// http://localhost:3000/vessels/pardo-yachts-p43-itcdpp4254e122
// https://api.yachtway.com/api/listings/pardo-yachts-p43-itcdpp4254e122

// Figma: https://www.figma.com/file/Ypo1nOrjnalbgDtm1UgARz/vehically?type=design&node-id=0%3A2009&mode=design&t=lzmIRP8kHY84Dq2r-1

// Importing necessary types and context
import { YachtDetails } from "@/app/types";
import ImageMasonry from "@/components/product-page/image-masonry";
import TopBar from "@/components/product-page/top-bar";
import { VesselProvider, useVessel } from "@/context/vessel-context";

// Function to fetch vessel details from the API
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

// Main component
const Page = async (props: any) => {
  // Fetching the yacht details using the fetchVessel function
  const yachtDetails = await fetchVessel(props.params.slug);

  return (
    // Providing the fetched vessel details to the VesselProvider context
    <VesselProvider vessel={yachtDetails}>
      <main className="flex min-h-screen flex-col">
        <TopBar />
        <ImageMasonry />
      </main>
    </VesselProvider>
  );
};

export default Page;
