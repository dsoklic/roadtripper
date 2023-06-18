import { Form, Input, Select } from "antd";
import FilterProps from "./models/filter_props";

function Filter(props: FilterProps) {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.Item label="License plate" name="license">
        <Input
          value={props.filter}
          onChange={(e) => props.setFilter(e.target.value)}
          placeholder="Filter"
        />
      </Form.Item>
      <Form.Item label="Stations" name="stations">
      <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={props.defaultStations}
              value={props.filteredStations}
              onChange={(value: string[]) => {props.setFilteredStations(value)}}
              options={props.stations.map((x) => { return {
                label: x,
                value: x,
              }})}
            />
      </Form.Item>
    </Form>
  );
}

export default Filter;
