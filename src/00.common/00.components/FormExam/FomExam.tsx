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
import { ToeicPart2 } from "../../01.model/ToeicPart2";
import { ToeicPart3 } from "../../01.model/ToeicPart3";
import { ToeicPart4 } from "../../01.model/ToeicPart4";
import { ToeicPart6 } from "../../01.model/ToeicPart6";
import { ToeicPart5 } from "../../01.model/ToeicPart5";

interface FormExamProps {
  dataPart1?: ToeicPart1[];
  dataPart2?: ToeicPart2[];
  dataPart3?: ToeicPart3[];
  dataPart4?: ToeicPart4[];
  dataPart5?: ToeicPart5[];
  dataPart6?: ToeicPart6[];
}
interface FormExamState {
  isPlaying: boolean;
  selectedValueOp1: { keyDoc: string; value: string; result: string }[];
  selectedValueOp2: {
    KeyDoc: string;
    Type: "Question1" | "Question2" | "Question3" | "Question4";
    Value: string;
    Result: string;
  }[];
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
      selectedValueOp1: [],
      selectedValueOp2: [],
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

      return <span>You are good to go!</span>;
    } else {
      // Render a countdown
      return (
        <span>
          <Oclock
            Size={85}
            time={100000}
            isPlaying={this.state.isPlaying}
            ShowHour={false}
          />
        </span>
      );
    }
  };

  renderCheckBoxResultOp1(
    keyDoc: string,
    result: string,
    haveAnswerD: boolean
  ) {
    let itemSelected = this.state.selectedValueOp1.find((item) => {
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
            {haveAnswerD && (
              <Col span={24}>
                <Checkbox checked={result == "0001"}>D</Checkbox>
              </Col>
            )}
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
                {haveAnswerD && (
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
                )}
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
                {haveAnswerD && (
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
                )}
              </Row>
            )}
          </>
        )}
      </>
    );
  }

  renderCheckBoxResultOp2(
    keyDoc: string,
    result: string,
    haveAnswerD: boolean
  ) {
    let itemSelected = this.state.selectedValueOp2.find((item) => {
      return item.KeyDoc == keyDoc;
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
            {haveAnswerD && (
              <Col span={24}>
                <Checkbox checked={result == "0001"}>D</Checkbox>
              </Col>
            )}
          </Row>
        ) : (
          <>
            {itemSelected.Value == itemSelected.Result ? (
              <Row>
                <Col span={24}>
                  <Checkbox checked={itemSelected.Result == "1000"}>
                    <span
                      style={{
                        color: itemSelected.Result == "1000" ? "green" : "",
                      }}
                    >
                      A {itemSelected.Result == "1000" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.Result == "0100"}>
                    <span
                      style={{
                        color: itemSelected.Result == "0100" ? "green" : "",
                      }}
                    >
                      B {itemSelected.Result == "0100" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.Result == "0010"}>
                    <span
                      style={{
                        color: itemSelected.Result == "0010" ? "green" : "",
                      }}
                    >
                      C {itemSelected.Result == "0010" ? "Đúng" : ""}
                    </span>
                  </Checkbox>
                </Col>
                {haveAnswerD && (
                  <Col span={24}>
                    <Checkbox checked={itemSelected.Result == "0001"}>
                      <span
                        style={{
                          color: itemSelected.Result == "0001" ? "green" : "",
                        }}
                      >
                        D {itemSelected.Result == "0001" ? "Đúng" : ""}
                      </span>
                    </Checkbox>
                  </Col>
                )}
              </Row>
            ) : (
              <Row>
                <Col span={24}>
                  <Checkbox checked={itemSelected.Result == "1000"}>
                    <span> A</span>{" "}
                    <span style={{ color: "green" }}>
                      {itemSelected.Result == "1000" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {itemSelected.Value == "1000" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.Result == "0100"}>
                    <span> B</span>
                    <span style={{ color: "green" }}>
                      {itemSelected.Result == "0100" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {itemSelected.Value == "0100" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox checked={itemSelected.Result == "0010"}>
                    <span> C</span>
                    <span style={{ color: "green" }}>
                      {itemSelected.Result == "0010" ? "Đúng" : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {" "}
                      {itemSelected.Value == "0010" ? "Sai" : ""}
                    </span>
                  </Checkbox>
                </Col>
                {haveAnswerD && (
                  <Col span={24}>
                    <Checkbox checked={itemSelected.Result == "0001"}>
                      <span> D</span>
                      <span style={{ color: "green" }}>
                        {itemSelected.Result == "0001" ? "Đúng" : ""}
                      </span>
                      <span style={{ color: "red" }}>
                        {itemSelected.Value == "0001" ? "Sai" : ""}
                      </span>
                    </Checkbox>
                  </Col>
                )}
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
                color: "#1890FF",
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
                haveAnswerD={true}
                disabled={!this.state.isStart}
                ref={this.refCheckBoxPart1}
                onChange={(value) => {
                  this.handeValueInputOp1(item, value);
                }}
              />
            ) : (
              <>
                {this.renderCheckBoxResultOp1(item.KeyDoc, item.Answer, true)}
              </>
            )}
          </div>
        ))}
      </div>
    );        
  }

  renderFormItemsPart3(alldata: ToeicPart3[]) {
    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 50 }}>
        <h1>Mô tả:</h1>
        <div>
          Trong phần này, thí sinh sẽ được nghe 13 đoạn hội thoại ngắn không in
          trong đề thi. Mỗi đoạn có 03 câu hỏi, mỗi câu hỏi sẽ có 4 đáp án lựa
          chọn và nhiệm vụ của thí sinh là chọn đáp án đúng nhất.
        </div>
        <h1>Đề thi:</h1>
        {alldata.map((item, index) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ margin: "20px 0px"}} >
              questions {index * 3 + 1} through {index * 3 + 3} refer to the
              following conversation.
            </h3>
            <ReactAudioPlayer
              src={this.state.isStart ? item.AudioUrl : undefined}
              autoPlay={false}
              controls
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 0px",
              }}
            >
              {!this.state.viewResult ? (
                <>
                  <h4 style={{ margin: "15px 0px" }}>
                    1. {item.Question1.Question}
                  </h4>
                  <CheckBoxCom
                    haveAnswerD={true}
                    disabled={!this.state.isStart}
                    ref={this.refCheckBoxPart1}
                    answerTitle={[
                      item.Question1.SelectA.Title,
                      item.Question1.SelectB.Title,
                      item.Question1.SelectC.Title,
                      item.Question1.SelectD.Title,
                    ]}
                    onChange={(value) => {
                      this.handeValueInputOp2(
                        {
                          KeyDoc: item.KeyDoc,
                          Result: item.Question1.Answer,
                          Type: "Question1",
                        },
                        value,
                        "Question1"
                      );
                    }}
                  />
                  <h4 style={{ margin: "15px 0px" }}>
                    2. {item.Question2.Question}
                  </h4>
                  <CheckBoxCom
                    haveAnswerD={true}
                    disabled={!this.state.isStart}
                    ref={this.refCheckBoxPart1}
                    answerTitle={[
                      item.Question2.SelectA.Title,
                      item.Question2.SelectB.Title,
                      item.Question2.SelectC.Title,
                      item.Question2.SelectD.Title,
                    ]}
                    onChange={(value) => {
                      this.handeValueInputOp2(
                        {
                          KeyDoc: item.KeyDoc,
                          Result: item.Question2.Answer,
                          Type: "Question2",
                        },
                        value,
                        "Question2"
                      );
                    }}
                  />
                  <h4 style={{ margin: "15px 0px" }}>
                    3. {item.Question1.Question}
                  </h4>
                  <CheckBoxCom
                    haveAnswerD={true}
                    disabled={!this.state.isStart}
                    ref={this.refCheckBoxPart1}
                    answerTitle={[
                      item.Question3.SelectA.Title,
                      item.Question3.SelectB.Title,
                      item.Question3.SelectC.Title,
                      item.Question3.SelectD.Title,
                    ]}
                    onChange={(value) => {
                      this.handeValueInputOp2(
                        {
                          KeyDoc: item.KeyDoc,
                          Result: item.Question3.Answer,
                          Type: "Question3",
                        },
                        value,
                        "Question3"
                      );
                    }}
                  />
                </>
              ) : (
                <>
                  <h4 style={{ margin: "15px 0px" }}>
                    1. {item.Question1.Question}
                  </h4>
                  {this.renderCheckBoxResultOp2(
                    item.KeyDoc,
                    item.Question1.Answer,
                    true
                  )}
                  <h4 style={{ margin: "15px 0px" }}>
                    2. {item.Question2.Question}
                  </h4>
                  {this.renderCheckBoxResultOp2(
                    item.KeyDoc,
                    item.Question2.Answer,
                    true
                  )}
                  <h4 style={{ margin: "15px 0px" }}>
                    3. {item.Question1.Question}
                  </h4>
                  {this.renderCheckBoxResultOp2(
                    item.KeyDoc,
                    item.Question3.Answer,
                    true
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  renderFormItemsPart4(alldata: ToeicPart4[]) {
    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 50 }}>
        <h1>Mô tả:</h1>
        <div>
          Part 4 là phần cuối cùng của trong TOEIC Listening. Đây được coi là
          phần nghe khó nhất đặc biệt là với format đề thi mới. Vậy bạn đã có
          cách luyện nghe TOEIC part 4 hiệu quả chưa? Hãy xem phương pháp học
          TOEIC Part 4: Short Talks dưới đây để ẵm trọn điểm phần nghe này nhé.
        </div>
        <h1>Đề thi:</h1>
        {alldata.map((item, index) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "20px 0px"}} >
              Questions {index * 3 + 1} through {index * 3 + 3} refer to the
              following conversation.
            </h3>
            <ReactAudioPlayer
              src={this.state.isStart ? item.AudioUrl : undefined}
              autoPlay={false}
              controls
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 0px",
              }}
            >
              {!this.state.viewResult ? (
                <>
                  <h4 style={{ margin: "15px 0px" }}>
                    1. {item.Question1.Question}
                  </h4>
                  <CheckBoxCom
                    haveAnswerD={true}
                    disabled={!this.state.isStart}
                    ref={this.refCheckBoxPart1}
                    answerTitle={[
                      item.Question1.SelectA.Title,
                      item.Question1.SelectB.Title,
                      item.Question1.SelectC.Title,
                      item.Question1.SelectD.Title,
                    ]}
                    onChange={(value) => {
                      this.handeValueInputOp2(
                        {
                          KeyDoc: item.KeyDoc,
                          Result: item.Question1.Answer,
                          Type: "Question1",
                        },
                        value,
                        "Question1"
                      );
                    }}
                  />
                  <h4 style={{ margin: "15px 0px" }}>
                    2. {item.Question2.Question}
                  </h4>
                  <CheckBoxCom
                    haveAnswerD={true}
                    disabled={!this.state.isStart}
                    ref={this.refCheckBoxPart1}
                    answerTitle={[
                      item.Question2.SelectA.Title,
                      item.Question2.SelectB.Title,
                      item.Question2.SelectC.Title,
                      item.Question2.SelectD.Title,
                    ]}
                    onChange={(value) => {
                      this.handeValueInputOp2(
                        {
                          KeyDoc: item.KeyDoc,
                          Result: item.Question2.Answer,
                          Type: "Question2",
                        },
                        value,
                        "Question2"
                      );
                    }}
                  />
                  <h4 style={{ margin: "15px 0px" }}>
                    3. {item.Question1.Question}
                  </h4>
                  <CheckBoxCom
                    haveAnswerD={true}
                    disabled={!this.state.isStart}
                    ref={this.refCheckBoxPart1}
                    answerTitle={[
                      item.Question3.SelectA.Title,
                      item.Question3.SelectB.Title,
                      item.Question3.SelectC.Title,
                      item.Question3.SelectD.Title,
                    ]}
                    onChange={(value) => {
                      this.handeValueInputOp2(
                        {
                          KeyDoc: item.KeyDoc,
                          Result: item.Question3.Answer,
                          Type: "Question3",
                        },
                        value,
                        "Question3"
                      );
                    }}
                  />
                </>
              ) : (
                <>
                  <h4 style={{ margin: "15px 0px" }}>
                    1. {item.Question1.Question}
                  </h4>
                  {this.renderCheckBoxResultOp2(
                    item.KeyDoc,
                    item.Question1.Answer,
                    true
                  )}
                  <h4 style={{ margin: "15px 0px" }}>
                    2. {item.Question2.Question}
                  </h4>
                  {this.renderCheckBoxResultOp2(
                    item.KeyDoc,
                    item.Question2.Answer,
                    true
                  )}
                  <h4 style={{ margin: "15px 0px" }}>
                    3. {item.Question1.Question}
                  </h4>
                  {this.renderCheckBoxResultOp2(
                    item.KeyDoc,
                    item.Question3.Answer,
                    true
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  renderFormItemsPart2(alldata: ToeicPart2[]) {
    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 50 }}>
        <h1>Mô tả:</h1>
        <div>
          TOEIC Listening Part 2 sẽ gồm 25 câu theo chuẩn fomat mới hiện nay .
          Mỗi câu có 1 câu hỏi và 3 lựa chọn đáp án. Nhiệm vụ là phải chọn ra
          câu trả lời tương thích với câu hỏi trong bài. Đặc biệt rong part 2
          câu hỏi và câu trả lời không in trong đề thi. Các bạn chỉ được nghe
          một câu hỏi và 3 lựa chọn trả lời cho từng câu hỏi sau đó chọn câu trả
          lời phù hợp với câu hỏi. Chúc các bạn đạt kết quả cao.
        </div>
        <h1>Đề thi:</h1>
        {alldata.map((item, index) => (
          <div
            key={item.KeyDoc}
            style={{ borderTop: "gray solid 1px", marginBottom: 30 }}
          >
            <h3
              style={{
                marginTop: 30,
                marginBottom: 30,
                fontWeight: 500,
                color: "#1890FF",
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
              <ReactAudioPlayer
                src={this.state.isStart ? item.AudioUrl : undefined}
                autoPlay={false}
                controls
              />
            </div>
            {!this.state.viewResult ? (
              <CheckBoxCom
                haveAnswerD={false}
                disabled={!this.state.isStart}
                ref={this.refCheckBoxPart1}
                onChange={(value) => {
                  this.handeValueInputOp1(item, value);
                }}
              />
            ) : (
              <>
                {this.renderCheckBoxResultOp1(item.KeyDoc, item.Answer, false)}
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  handeValueInputOp1(itemInput: ToeicPart1 | ToeicPart2, value: string) {
    let listValue: {
      keyDoc: string;
      value: string;
      result: string;
    }[] = [];
    if (this.state.selectedValueOp1.length > 0) {
      listValue = this.state.selectedValueOp1.filter((item) => {
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
      selectedValueOp1: listValue,
    });
  }

  handeValueInputOp2(
    itemInput: {
      KeyDoc: string;
      Type: "Question1" | "Question2" | "Question3" | "Question4";
      Result: string;
    },
    value: string,
    option: "Question1" | "Question2" | "Question3" | "Question4"
  ) {
    let listValue: {
      KeyDoc: string;
      Type: "Question1" | "Question2" | "Question3" | "Question4";
      Value: string;
      Result: string;
    }[] = [];

    if (this.state.selectedValueOp2.length > 0) {
      listValue = this.state.selectedValueOp2.filter((item) => {
        return (
          item.KeyDoc !== itemInput.KeyDoc ||
          (item.KeyDoc == itemInput.KeyDoc && item.Type !== option)
        );
      });
    }
    if (value) {
      listValue.push({
        KeyDoc: itemInput.KeyDoc,
        Type: itemInput.Type,
        Value: value,
        Result: itemInput.Result,
      });
    }
    this.setState({
      selectedValueOp2: listValue,
    });
    console.log(this.state.selectedValueOp2);
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
                    message.info("Bạn đã kết thúc bài làm");
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
                    this.state.selectedValueOp1.length <
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
          <div className={styles.container__content} style={{ marginTop: 10 }}>
            {this.props.dataPart2 &&
              this.props.dataPart2.length > 0 &&
              this.renderFormItemsPart2(this.props.dataPart2)}
          </div>
          <div className={styles.container__content} style={{ marginTop: 10 }}>
            {this.props.dataPart3 &&
              this.props.dataPart3.length > 0 &&
              this.renderFormItemsPart3(this.props.dataPart3)}
          </div>
          <div className={styles.container__content} style={{ marginTop: 10 }}>
            {this.props.dataPart4 &&
              this.props.dataPart4.length > 0 &&
              this.renderFormItemsPart4(this.props.dataPart4)}
          </div>
        </Spin>
      </div>
    );
  }
}
