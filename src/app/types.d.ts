export interface YachtListingResponse {
  data: YachtListing[];
  meta: MetaInfo;
  localMeta: LocalMeta;
}

export interface YachtListing {
  id: string;
  slug: string;
  make: string;
  model: string;
  makeId: string;
  modelId: string;
  image: ImageInfo;
  condition: string;
  price: Price;
  year: number;
  enginesInfo: string;
  enginesHours: string;
  enginesHorsePower: string;
  location: string;
  coordinates: Coordinates;
  lengthOverall: number;
  engineType: string;
  fuelType: string;
  saleStatus: string;
  city: string;
  country: string;
  interiorPhotos: Photo[];
  exteriorPhotos: Photo[];
  listedBy: ListedBy;
  offeredBy: OfferedBy;
  isHidden: boolean;
}

export interface ImageInfo {
  id?: string;
  url?: string;
  type?: string;
  createdAt?: string;
  compressedImg?: string;
  fileName?: string;
  originalSize?: number;
}

export interface Price {
  value: number;
  currency: string;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Photo {
  id: string;
  orderNumber: number;
  image: ImageInfo;
  type: string;
  isCover: boolean;
}

export interface ListedBy {
  name: string;
  slug: string;
  id: string;
  phone: string;
  profile: string;
}

export interface OfferedBy {
  name: string;
  id: string;
  slug: string;
  phone: string;
  profile: string;
}

export interface MetaInfo {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface LocalMeta {
  filtersId: string;
}

export interface YachtDetails {
  generalInfo: GeneralInfo;
  powerInfo: PowerInfo;
  photos: {
    exterior: Photo[];
    interior: Photo[];
    deckLayout: Photo[];
  };
  accommodation: Accommodation;
  technicalInfo: TechnicalInfo;
  editAccess: boolean;
  brochure: Media;
  brandInfo: BrandInfo;
  modelTypes: string[];
  brokerDialogId: string | null;
  dealerDialogId: string | null;
  isLikedByCurrentUser: boolean;
  isHidden: boolean;
  sellInfo: any | null;
}

interface GeneralInfo {
  id: string;
  slug: string;
  features: string[];
  make: string;
  model: string;
  price: Price;
  hullNumber: string;
  year: number;
  type: string;
  availableIn: string | null;
  address: string;
  country: string;
  city: string;
  state: string;
  coordinates: Coordinates;
  description: string;
  saleStatus: string;
  isCaptainMaintained: boolean;
  isNeverCharged: boolean;
  isLikeNew: boolean;
  isExclusive: boolean;
  isAvailableForCoBrokerage: boolean;
  isBrandConnectedToOwner: boolean;
  isModelPhotosUsed: boolean;
  video: Media;
  photos: {
    exterior: Photo[];
    interior: Photo[];
    deckLayout: Photo[];
  };
  modelSlug: string;
  brandId: string;
  vesselModelId: string;
}

interface PowerInfo {
  hasGenerator: boolean;
  generators: Generator[];
  type: string;
  make: string;
  model: string;
  hours: number;
  powerPerEngine: number;
  fuel: string;
  count: number;
  range: number | null;
  cruiseSpeed: number | null;
  topSpeed: number;
}

interface Generator {
  generatorMake: string;
  generatorHours: number;
}

interface Photos {
  exterior: Media[];
  interior: Media[];
  deckLayout: Media[];
}

interface Accommodation {
  singleBeds: number;
  doubleBeds: number;
  cabins: number;
  showerWetHead: number;
  showerDryHead: number;
}

interface TechnicalInfo {
  lengthOverall: number;
  lengthOfWaterline: number | null;
  beam: number;
  draft: number;
  dryWeight: number;
  displacementWeight: number | null;
  standardDraft: number | null;
  optionalDraft: number | null;
  keelWeight: number | null;
  mainSail: string | null;
  jib: string | null;
  spinnaker: string | null;
}

interface Media {
  id: string;
  url: string;
  type: string;
  createdAt: string;
  fileName: string;
  originalSize: number;
}

interface BrandInfo {
  name: string;
  slug: string;
  country: string;
  numberOfModels: number;
  banner: Media;
  createdByAdmin: boolean;
}
