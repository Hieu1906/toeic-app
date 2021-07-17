
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart2 } from "../../../00.common/01.model/ToeicPart2";
import { ToeicPart2Exam } from "../../../00.common/01.model/ToeicPart2Exam";
import { toeicPart2ExamService } from "../../../00.common/02.service/toeicPart2ExamService";
import { toeicPart2Service } from "../../../00.common/02.service/toeicPart2Service";



interface ExamPart2Props {}
interface ListExamPart2State {
  allData: ToeicPart2[];
  selectedValue: { keyDoc: string; value: string; result: string }[];
  time:number
}

export class ExamPart2 extends BaseComponent<
  ExamPart2Props,
  ListExamPart2State
> {
  constructor(props: ExamPart2Props) {
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
    let item = await toeicPart2ExamService.getItemByDocId<ToeicPart2Exam>(
      "ToeicPart2Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return toeicPart2Service.getItemByDocId<ToeicPart2>("ToeicPart2", item);
      })
    )) as ToeicPart2[];
    this.setState({
      allData,
      time:item?.Time as any
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
        dataPart2={this.state.allData} />
      </div>
    );
  }
}
