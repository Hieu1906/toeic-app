import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;


export default function Oclock(props) {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + props.time; // use UNIX timestamp in seconds
  const remainingTime = endTime - stratTime;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {props.ShowHour && (
        <CountdownCircleTimer
          isPlaying={props.isPlaying}
          size={props.Size}
          strokeWidth={6}
          colors={[["#D14081"]] as any}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) =>
            [remainingTime - totalElapsedTime > hourSeconds] as any
          }
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime!))
          }
        </CountdownCircleTimer>
      )}
      <CountdownCircleTimer
        isPlaying={props.isPlaying}
        size={props.Size}
        strokeWidth={6}
        colors={[["#EF798A"]] as any}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) =>
          [remainingTime - totalElapsedTime > minuteSeconds] as any
        }
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime!))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        isPlaying={props.isPlaying}
        size={props.Size}
        strokeWidth={6}
        colors={[["#218380"]] as any}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) =>
          [remainingTime - totalElapsedTime > 0] as any
        }
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  );
}
