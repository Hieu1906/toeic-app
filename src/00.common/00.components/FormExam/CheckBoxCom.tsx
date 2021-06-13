import { Checkbox, Row, Col, Button } from "antd";
import React from "react";
import { BaseComponent } from "../BaseComponent";

interface CheckBoxProps {
  onChange: (value: string) => void;
  disabled: boolean;
}
interface CheckBoxState {
  selectedvalue: any;
}

export class CheckBoxCom extends BaseComponent<CheckBoxProps, CheckBoxState> {
  constructor(props: CheckBoxProps) {
    super(props);
    this.state = {
      selectedvalue: undefined,
    };
  }

  renderView() {
    return (
      <div>
        <Checkbox.Group
          disabled={this.props.disabled}
          value={[this.state.selectedvalue]}
          onChange={async (value) => {
           
            if (value.length >= 2) {
              await this.setState({
                selectedvalue: value[value.length - 1],
              });
            } else if (value.length == 0) {
              await this.setState({
                selectedvalue: undefined,
              });
            } else {
              await this.setState({
                selectedvalue: value[0],
              });
            }

            this.props.onChange(this.state.selectedvalue);
          }}
        >
          <Row>
            <Col span={24}>
              <Checkbox value="1000">A</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="0100">B</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="0010">C</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="0001">D</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
    );
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}
