import { Car } from "./car";
import { CarModel } from "./car_model";
import { Station } from "./station";

export default interface InfoProps {
    selectedCar: Car;
    carModel?: CarModel;
    station?: Station;
}