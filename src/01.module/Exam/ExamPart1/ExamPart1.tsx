import React from "react";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";

interface ExamPart1Props {}
interface ListExamPart2State {}

export class ExamPart1 extends BaseComponent<
  ExamPart1Props,
  ListExamPart2State
> {
  constructor(props: ExamPart1Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FormExamCom />
      </div>
    );
  }
}
