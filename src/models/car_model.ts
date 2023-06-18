export interface CarModel {
  _id: string;
  name: string;
  manufacturer: string;
  transmission: string;
  seats: number;
  doors: number;
  shoppingBags: number;
  range: number;
  batteryCapacity: number;
  maxPowerCharging: number;
  additionalImageResources: AdditionalImageResource[];
  mainImageResource: MainImageResource;
  fuelType: string;
  __v: number;
  acrissCode: string;
  providerID: string;
  status: string;
  damageSchematics: DamageSchematic[];
  updatedAt: string;
}

export interface AdditionalImageResource {
  title: string;
  href: string;
  _id: string;
}

export interface MainImageResource {
  title: string;
  href: string;
}

export interface DamageSchematic {
  position: string;
  imageResource: ImageResource;
  _id: string;
}

export interface ImageResource {
  title: string;
  href: string;
}
