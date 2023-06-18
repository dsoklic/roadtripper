import { Card, Descriptions, Progress, Rate } from "antd";
import InfoProps from "./models/info_props";

function Info(props: InfoProps) {
  if (props.selectedCar === undefined) {
    return <p>No car selected</p>;
  }

  const batteryRefreshDate = new Date(props.selectedCar.batteryTimestamp);
  const batteryNiceTimestamp = `${batteryRefreshDate.toLocaleDateString()} ${batteryRefreshDate.toLocaleTimeString()}`;

  const carName = `${props.carModel?.manufacturer} ${props.carModel?.name}`;

  return (
    <Card title={carName} style={{ width: 400, marginBottom: 20 }}>
      <Descriptions layout="horizontal" column={1}>
        <Descriptions.Item label="Station">
          {props.station?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Plate number">
          {props.selectedCar.plateNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Battery level">
          <Progress percent={props.selectedCar.batteryChargeLevel} steps={5} />
        </Descriptions.Item>
        <Descriptions.Item label="Battery update">
        {batteryNiceTimestamp}
        </Descriptions.Item>
        <Descriptions.Item label="Charing">
          {props.selectedCar.isCharging ? "Yes" : "No"}
        </Descriptions.Item>
        <Descriptions.Item label="Indoor cleanliness">
          {props.selectedCar.indoorCleanliness} / 5
        </Descriptions.Item>
        <Descriptions.Item
          label="Outdoor cleanliness"
          style={{ verticalAlign: "middle" }}
        >
          {props.selectedCar.outdoorCleanliness} / 5
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default Info;
