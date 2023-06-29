import React, { useEffect, useState } from "react";
import "./App.css";
import { Car } from "./models/car";
import CarService from "./car_service";
import { Button, Layout, List, message } from "antd";
import { Content } from "antd/es/layout/layout";
import Info from "./info";
import { CarModel } from "./models/car_model";
import { Station } from "./models/station";
import Filter from "./filter";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  margin: "30px",
};

const defaultLocations = [
  "Addiko Bank - Bežigrad ⚡",
  "Bistro Kucha - Bežigrad",
  "AMZS PE Leskoškova",
  "Gospodarska zbornica Slovenije",
  "Avant car - Dunajska ⚡",
];

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [stations, setStations] = useState<Station[]>([]);
  const [filteredStations, setFilteredStations] =
    useState<string[]>(defaultLocations);
  const [filter, setFilter] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const loadCars = async () => {
    const service = new CarService();
    const newCars = await service.getCars();
    const newCarModels = await service.getCarModels();
    const newStations = await service.getLocations();
    setCars(newCars);
    setCarModels(newCarModels);
    setStations(newStations);

    messageApi.open({
      type: "success",
      content: "Data has been refreshed",
    });
  };

  useEffect(() => {
    loadCars();
  }, []);

  const filteredCars = cars
  .filter((car) => car.plateNumber.includes(filter.toUpperCase()))
  .filter(
    (car) =>
      filteredStations.length === 0 ||
      filteredStations.includes(
        stations.find((x) => x._id === car.locationID)?.name ?? ""
      )
  );

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout>
        <Content style={contentStyle}>
          <div>
            <Filter
              filter={filter}
              setFilter={setFilter}
              stations={stations.map((x) => x.name)}
              filteredStations={filteredStations}
              setFilteredStations={setFilteredStations}
              defaultStations={defaultLocations}
            />
            {contextHolder}
            <Button
              onClick={() => {
                loadCars();
              }}
            >
              Refresh
            </Button>
          </div>



          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 5,
            }}
            dataSource={filteredCars}
            renderItem={(car: Car) => (
              <List.Item>
                <Info
                    selectedCar={car}
                    carModel={carModels.find((x) => x._id === car.carModelID)}
                    station={stations.find((x) => x._id === car.locationID)}
                  />
              </List.Item>
            )}
          />  
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
