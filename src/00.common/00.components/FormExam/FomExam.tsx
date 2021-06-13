import { BaseComponent } from "../BaseComponent";
import styles from "./FormExam.module.scss";
import { Button, Checkbox, Col, message, Row, Spin, Modal } from "antd";
import Countdown, { CountdownRenderProps } from "react-countdown";
import React from "react";
import Oclock from "./CircleTimerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpOutlined } from "@ant-design/icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { ToeicPart1 } from "../../01.model/ToeicPart1";
import ReactAudioPlayer from "react-audio-player";
import { CheckBoxCom } from "./CheckBoxCom";

interface FormExamProps {
  dataPart1?: ToeicPart1[];
}
interface FormExamState {
  isPlaying: boolean;
  selectedValueP: { keyDoc: string; value: string; result: string }[];
  viewResult: boolean;
  loading: boolean;
  isStart: boolean;
  compeleted: boolean; // khởi tạo để kiểm tra xem khi nào cần update dom do phần đồng hồ bị delay
}

const { confirm } = Modal;
export class FormExamCom extends BaseComponent<FormExamProps, FormExamState> {
  public refCountdown = React.createRef<Countdown>();
  public refCheckBoxPart1 = React.createRef<CheckBoxCom>();

  constructor(props: FormExamProps) {
    super(props);
    this.state = {
      isPlaying: false,
      selectedValueP: [],
      viewResult: false,
      loading: false,
      isStart: false,
      compeleted: false,
    };
  }
  showConfirm() {
    confirm({
      title: "Bạn có muốn kết thúc bài kiểm tra tại đây",

      onOk: () => {
        this.setState({
          viewResult: true,
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  // Renderer callback with condition
  renderer = ({ total }) => {
    if (this.state.compeleted) {
      this.setState({
        viewResult: true,
      });

      message.info("Bạn đã kết thúc bài làm");
      return <span>You are good to go!</span>;
    } else {
      // Render a countdown
      return (
        <span>
          <Oclock
            Size={85}
            time={total / 1000}
            isPlaying={this.state.isPlaying}
            ShowHour={false}
          />
        </span>
      );
    }
  };

  renderCheckBoxResult(keyDoc: string, result: string) {
    let itemSelected = this.state.selectedValueP.find((item) => {
      return item.keyDoc == keyDoc;
    });

    return (
      <>
        {!itemSelected ? (
          <Row>
            <Col>
              <span style={{ color: "red" }}>Bạn chưa trả lời câu hỏi này</span>
            </Col>
            <Col span={24}>
              <Checkbox checked={result == "1000"}>A</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox checked={result == "0100"}>B</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox checked={result == "0010"}>C</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox checked={result == "0001"}>D</Checkbox>
            </Col>
          </Row>
        ) : (
          <>
            {itemSelected.value == itemSelected.result ? (
              <Row>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "1000"}>
                    <span
                      style={{
                        color: itemSelected.result == "1000" ? "green" : "",
                      }}
                    >
                      A {itemSelected.result == "1000" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "0100"}>
                    <span
                      style={{
                        color: itemSelected.result == "0100" ? "green" : "",
                      }}
                    >
                      B {itemSelected.result == "0100" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "0010"}>
                    <span
                      style={{
                        color: itemSelected.result == "0010" ? "green" : "",
                      }}
                    >
                      C {itemSelected.result == "0010" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "0001"}>
                    <span
                      style={{
                        color: itemSelected.result == "0001" ? "green" : "",
                      }}
                    >
                      D {itemSelected.result == "0001" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "1000"}>
                    <span> A</span>{" "}
                    <span style={{ color: "green" }}>
                      {itemSelected.result == "1000" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {itemSelected.value == "1000" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "0100"}>
                    <span> B</span>
                    <span style={{ color: "green" }}>
                      {itemSelected.result == "0100" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {itemSelected.value == "0100" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "0010"}>
                    <span> C</span>
                    <span style={{ color: "green" }}>
                      {itemSelected.result == "0010" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {" "}
                      {itemSelected.value == "0010" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.result == "0001"}>
                    <span> D</span>
                    <span style={{ color: "green" }}>
                      {itemSelected.result == "0001" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {itemSelected.value == "0001" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
              </Row>
            )}
          </>
        )}
      </>
    );
  }

  renderFormItemsPart1(alldata: ToeicPart1[]) {
    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 50 }}>
        <h1>Mô tả:</h1>
        <div>
          TOEIC listening Part 1 - Picture Description (Mô tả tranh) là phần thi
          đầu tiên cũng là phần thi dễ ăn điểm nhất trong bài thi TOEIC. Do đó
          các bạn cần nắm rõ phương pháp và ôn luyện để đạt kết quả tốt nhất.
          Trong bài luyện tập này, các bạn hãy lắng nghe kỹ từng câu hỏi và chọn
          đáp án phù hợp. Nếu làm chưa tốt hãy làm lại đến khi thành thạo nhé.
        </div>
        <h1>Đề thi:</h1>
        {alldata.map((item, index) => (
          <div
            key={item.KeyDoc}
            style={{ borderTop: "gray solid 1px", marginBottom: 20 }}
          >
            <h3
              style={{
                marginTop: 30,
                marginBottom: 30,
                fontWeight: 700,
                color: "blue",
              }}
            >
              Câu hỏi {index + 1}
            </h3>
            <p style={{ marginBottom: 20 }}>
              Choose the one that best describes what you see in the picture.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <img src={item.ImgUrl} />
              </div>
              <ReactAudioPlayer
                src={this.state.isStart ? item.AudioUrl : undefined}
                autoPlay={false}
                controls
              />
            </div>
            {!this.state.viewResult ? (
              <CheckBoxCom
                disabled={!this.state.isStart}
                ref={this.refCheckBoxPart1}
                onChange={(value) => {
                  this.handeValueInput(item, value);
                }}
              />
            ) : (
              <>{this.renderCheckBoxResult(item.KeyDoc, item.Answer)}</>
            )}
          </div>
        ))}
      </div>
    );
  }

  handeValueInput(itemInput: ToeicPart1, value: string) {
    let listValue: {
      keyDoc: string;
      value: string;
      result: string;
    }[] = [];
    if (this.state.selectedValueP.length > 0) {
      listValue = this.state.selectedValueP.filter((item) => {
        return item.keyDoc !== itemInput.KeyDoc;
      });
    }
    if (value) {
      listValue.push({
        keyDoc: itemInput.KeyDoc,
        result: itemInput.Answer,
        value: value,
      });
    }
    this.setState({
      selectedValueP: listValue,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {!this.state.viewResult && (
          <div
            className={
              !this.state.isStart
                ? styles.container__header
                : styles.container__headerStart
            }
          >
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
              className={styles.container__iconMoveTop}
              shape="circle"
              type="default"
              icon={<UpOutlined style={{ fontWeight: "bold", fontSize: 20 }} />}
            ></Button>

            <div style={{ width: "350px", padding: "15px" }}>
              <Countdown
                autoStart={false}
                ref={this.refCountdown}
                date={Date.now() + 10000}
                renderer={(props: CountdownRenderProps) => {
                  return this.renderer({
                    total: props.total,
                  });
                }}
              />
            </div>

            {!this.state.isStart && (
              <Button
                style={{ marginRight: 30 }}
                type={"primary"}
                onClick={() => {
                  this.refCountdown.current?.start();

                  this.setState({
                    isPlaying: true,
                    isStart: true,
                  });
                  setTimeout(() => {
                    this.setState({ compeleted: true });
                  }, 10000);
                }}
              >
                Bắt đầu
              </Button>
            )}
            {this.state.isStart && (
              <Button
                style={{ marginLeft: 10, marginRight: 10 }}
                icon={
                  <FontAwesomeIcon
                    icon={faPowerOff}
                    style={{ marginLeft: 5 }}
                  />
                }
                type={"primary"}
                onClick={() => {
                  if (
                    this.state.selectedValueP.length <
                    this.props.dataPart1!.length
                  ) {
                    this.showConfirm();
                  } else {
                    this.setState({
                      viewResult: true,
                    });
                  }
                }}
              >
                Nộp bài
              </Button>
            )}
          </div>
        )}
        <Spin spinning={this.state.loading} tip="Đang xử lí ">
          <div className={styles.container__content} style={{ marginTop: 10 }}>
            {this.props.dataPart1 &&
              this.props.dataPart1.length > 0 &&
              this.renderFormItemsPart1(this.props.dataPart1)}
          </div>
        </Spin>
      </div>
    );
  }
}
