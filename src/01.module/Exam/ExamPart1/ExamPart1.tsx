import { Checkbox } from "antd";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart1 } from "../../../00.common/01.model/ToeicPart1";
import { ToeicPart1Exam } from "../../../00.common/01.model/ToeicPart1Exam";

import { toeicPart1ExamService } from "../../../00.common/02.service/toeicPart1ExamService";
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
      await this.getDataItem();
    });
  }

  async getDataItem() {
    let keyDoc = this.getParameterByName("keyDoc") as string;
    let item = await toeicPart1ExamService.getItemByDocId<ToeicPart1Exam>(
      "ToeicPart1Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return await toeicPart1Service.getItemByDocId<ToeicPart1>(
          "ToeicPart1",
          item
        );
      })
    )) as ToeicPart1[];
    this.setState({
      allData,
    });
  }

  public getParameterByName(name: string) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  renderItems(alldata: ToeicPart1[]) {
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
          <div style={{ borderTop: "gray solid 1px", marginBottom: 20 }}>
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
            <div style={{ display: "flex", flexDirection: "column" }}>
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
            {["A", "B", "C", "D"].map((item) => (
              <div style={{marginTop:10}}>
                <Checkbox value={item}>{item}</Checkbox>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <FormExamCom
          ExamPart1={
            this.state.allData.length > 0
              ? (this.renderItems(this.state.allData) as JSX.Element)
              : undefined
          }
        />
      </div>
    );
  }
}
