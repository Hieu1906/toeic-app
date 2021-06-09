import { BaseComponent } from "../BaseComponent";
import styles from "./FormExam.module.scss";
import { Button } from "antd";
import Countdown from "react-countdown";
import React from "react";
import Oclock from "./CircleTimerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { ToeicPart1 } from "../../01.model/ToeicPart1";
import ReactAudioPlayer from "react-audio-player";
import { CheckBoxCom } from "./CheckBoxCom";

interface FormExamProps {
  dataPart1?: ToeicPart1[];
}
interface FormExamState {
  isPlaying: boolean;
  selectedValue: { keyDoc: string; value: string; result: string }[];
 
}

export class FormExamCom extends BaseComponent<FormExamProps, FormExamState> {
  public refCountdown = React.createRef<Countdown>();
  public refCheckBoxPart1 = React.createRef<CheckBoxCom>();

  constructor(props: FormExamProps) {
    super(props);
    this.state = {
      isPlaying: false,
      selectedValue: [],
     
    };
   
  }
  // Random component
  Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  renderer = ({ total, completed }) => {
    if (completed) {
      // Render a completed state
      return this.Completionist();
    } else {
      // Render a countdown
      return (
        <span>
          <Oclock
            Size={85}
            time={total / 1000}
            isPlaying={this.state.isPlaying}
            ShowHour={true}
          />
        </span>
      );
    }
  };

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
              <ReactAudioPlayer src={item.AudioUrl} autoPlay={false} controls />
            </div>
            <CheckBoxCom
              ref={this.refCheckBoxPart1}
              onChange={(value) => {
                this.handeValueInput(item, value);
              }}
            />
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
    if (this.state.selectedValue.length > 0) {
      listValue = this.state.selectedValue.filter((item) => {
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
      selectedValue: listValue,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container__header}>
          <div style={{ width: "350px", padding: "15px" }}>
            <Countdown
              autoStart={false}
              ref={this.refCountdown}
              date={Date.now() + 70000}
              renderer={this.renderer}
            />
          </div>
          <Button
            icon={
              <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: 5 }} />
            }
            danger
            type={"primary"}
            onClick={() => {
              this.refCountdown.current?.stop();
              this.setState({
                isPlaying: false,
              });
            }}
          >
            Pause
          </Button>
          <Button
            style={{ marginRight: 30 }}
            type={"primary"}
            onClick={() => {
              this.refCountdown.current?.start();
              this.setState({
                isPlaying: true,
              });
            }}
          >
            Start
          </Button>
          <Button
            icon={
              <FontAwesomeIcon icon={faPowerOff} style={{ marginLeft: 5 }} />
            }
            type={"primary"}
            onClick={() => {}}
          >
            Nộp bài
          </Button>
        </div>
        <div className={styles.container__content}>
          {this.props.dataPart1 &&
            this.props.dataPart1.length > 0 &&
            this.renderFormItemsPart1(this.props.dataPart1)}
        </div>
      </div>
    );
  }
}
