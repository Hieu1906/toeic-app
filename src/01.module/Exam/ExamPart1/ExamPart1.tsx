import React from "react";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart1 } from "../../../00.common/01.model/ToeicPart1";
import { toeicPart1Service } from "../../../00.common/02.service/toeicPart1Service";

interface ExamPart1Props {}
interface ListExamPart2State {
  allData: ToeicPart1[];
}

export class ExamPart1 extends BaseComponent<
  ExamPart1Props,
  ListExamPart2State
> {
  constructor(props: ExamPart1Props) {
    super(props);
    this.state = {
      allData: [],
    };
    this.onMount(async () => {
      await this.getAllData();
    });
  }

  async getAllData() {
    let allData = await toeicPart1Service.getAll<ToeicPart1>("ToeicPart1", "");
    this.setState({ allData });
  }
  render() {
    return (
      <div>
        <FormExamCom ExamPart1={<div>ahihi gấu chó</div>} />
      </div>
    );
  }
}
