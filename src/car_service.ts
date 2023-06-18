import axios from "axios";
import { Car } from "./models/car";
import { CarModel } from "./models/car_model";
import { Station } from "./models/station";

class CarService {
  http = axios.create({ baseURL: "https://api.avant2go.com/api/" });

  async getCars() {
    const response = await this.http.get<Car[]>("/cars");
    return response.data;
  }

  async getCarModels() {
    const response = await this.http.get<CarModel[]>("/carModels");
    return response.data;
  }

  async getLocations() {
    const response = await this.http.get<Station[]>("/locations");
    return response.data;
  }
}

export default CarService;
