export interface Station {
    _id: string
    name: string
    scheduleID: string
    additionalImageResources: any[]
    mainImageResource: MainImageResource
    address: Address
    __v: number
    geoFencingDistance: number
    companyID: any
    allPublicPlaces: number
    allCorporatePlaces: number
    regionID: string
    geoLocation: GeoLocation
    providerID: string
    status: string
    created: string
    updatedAt: string
    chargers: number
    chargerPoints: number
    barrier: boolean
    locationType: string
    freeParkingPlaces: number
    allCars: number
    reservableCars: number
    reservedCars: number
  }
  
  export interface MainImageResource {
    href: string
    title: string
  }
  
  export interface Address {
    zipCode: string
    country: string
    city: string
    address1: string
  }
  
  export interface GeoLocation {
    lng: number
    lat: number
  }