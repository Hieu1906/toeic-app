
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart1 } from "../../../00.common/01.model/ToeicPart1";
import { ToeicPart1Exam } from "../../../00.common/01.model/ToeicPart1Exam";

import { toeicPart1ExamService } from "../../../00.common/02.service/toeicPart1ExamService";
import { toeicPart1Service } from "../../../00.common/02.service/toeicPart1Service";

interface ExamPart1Props {}
interface ListExamPart2State {
  allData: ToeicPart1[];
  selectedValue: { keyDoc: string; value: string; result: string }[];
  time:number
}

export class ExamPart1 extends BaseComponent<
  ExamPart1Props,
  ListExamPart2State
> {
  constructor(props: ExamPart1Props) {
    super(props);
    this.state = {
      allData: [],
      selectedValue: [],
      time:360
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
        return toeicPart1Service.getItemByDocId<ToeicPart1>("ToeicPart1", item);
      })
    )) as ToeicPart1[];
    this.setState({
      allData,
      time:item?.Time as number
    });
  }

  public getParameterByName(name: string) {
    let url = window.location.href;
    // eslint-disable-next-line
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  render() {
    return (
      <div>
        <FormExamCom 
        time={this.state.time}
        dataPart1={this.state.allData} />
      </div>
    );
  }
}
