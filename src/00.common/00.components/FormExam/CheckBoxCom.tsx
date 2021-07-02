import { Checkbox, Row, Col, Button } from "antd";
import React from "react";
import { BaseComponent } from "../BaseComponent";

interface CheckBoxProps {
  onChange: (value: string) => void;
  disabled: boolean;
  haveAnswerD: boolean;
  answerTitle?: string[];
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
              {this.props.answerTitle && this.props.answerTitle.length > 0 && (
                <span style={{ color: "#1890FF" }}>
                  {this.props.answerTitle[0]}
                </span>
              )}
            </Col>
            <Col span={24}>
              <Checkbox value="0100">B</Checkbox>
              {this.props.answerTitle && this.props.answerTitle.length > 0 && (
                <span style={{ color: "#1890FF" }}>
                  {this.props.answerTitle[1]}
                </span>
              )}
            </Col>
            <Col span={24}>
              <Checkbox value="0010">C</Checkbox>
              {this.props.answerTitle && this.props.answerTitle.length > 0 && (
                <span style={{ color: "#1890FF" }}>
                  {this.props.answerTitle[2]}
                </span>
              )}
            </Col>
            {this.props.haveAnswerD && (
              <Col span={24}>
                <Checkbox value="0001">D</Checkbox>
                {this.props.answerTitle &&
                  this.props.answerTitle.length > 0 && (
                    <span style={{ color: "#1890FF" }}>
                      {this.props.answerTitle[3]}
                    </span>
                  )}
              </Col>
            )}
          </Row>
        </Checkbox.Group>
      </div>
    );
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}
