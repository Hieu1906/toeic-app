import { BaseComponent } from "../BaseComponent";
import styles from "./FormExam.module.scss";
import { Button } from "antd";
import Countdown from "react-countdown";
import React from "react";
import Oclock from "./CircleTimerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

interface FormExamProps {
  ExamPart1?: JSX.Element;
}
interface FormExamState {
  isPlaying: boolean;
}

export class FormExamCom extends BaseComponent<FormExamProps, FormExamState> {
  public refCountdown = React.createRef<Countdown>();
  constructor(props: FormExamProps) {
    super(props);
    this.state = {
      isPlaying: false,
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
        </div>
        <div className={styles.container__content}>
          {this.props.ExamPart1 && this.props.ExamPart1}
        </div>
      </div>
    );
  }
}
