export interface Car {
  _id: string;
  vin: string;
  plateNumber: string;
  odometer: number;
  batteryChargeLevel: number;
  carModelID: string;
  locationID: string;
  status: string;
  condition: string;
  geoLocation: GeoLocation;
  childBoosterSeat: boolean;
  outdoorCleanliness: number;
  indoorCleanliness: number;
  batteryChargePower: number;
  odometerType: string;
  companyID: any;
  __v: number;
  externalProviders: ExternalProviders;
  geoLocationTimestamp: string;
  batteryTimestamp: string;
  telematicsRefreshTimestamp: string;
  telematicsIbiolaTimestamp: any;
  statusAfterReservation: string;
  providerID: string;
  created: string;
  updatedAt: string;
  bluetoothData: BluetoothData;
  carBoxID: string;
  isCharging: boolean;
  rangeOffsetFrom: number;
  rangeOffsetTo: number;
  pricing: Pricing;
}

export interface GeoLocation {
  lng: number;
  lat: number;
}

export interface ExternalProviders {
  ibiola: Ibiola;
}

export interface Ibiola {
  reference: string;
  hardware: string;
}

export interface BluetoothData {
  ignition: string;
  centralLock: string;
  immobilizer: string;
  keyfob: string;
  odometer: number;
  batteryChargeLevel: number;
  geoLocation: GeoLocation2;
  gpsTimestamp: string;
  btTimestamp: string;
}

export interface GeoLocation2 {
  lat: number;
  lng: number;
}

export interface Pricing {
  _id: string;
  providerID: string;
  carModelID: string;
  minRentPrice: number;
  pricePerNight: number;
  pricePerKM: number;
  pricePerDayMin: number;
  pricePerNightMin: number;
  pricePerProlongReservation: number;
  includedKMPerNight: number;
  wrongDropOffLocationPenalty: number;
  noShowPenalty: number;
  maxDailyPrice: number;
  currencyCode: string;
  validFrom: string;
  updatedAt: string;
  __v: number;
}
