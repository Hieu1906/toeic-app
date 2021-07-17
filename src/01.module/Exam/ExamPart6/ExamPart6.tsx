
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart6 } from "../../../00.common/01.model/ToeicPart6";
import { ToeicPart6Exam } from "../../../00.common/01.model/ToeicPart6Exam";
import { toeicPart6ExamService } from "../../../00.common/02.service/toeicPart6ExamService";
import { toeicPart6Service } from "../../../00.common/02.service/toeicPart6Service";



interface ExamPart6Props {}
interface ListExamPart6State {
  allData: ToeicPart6[];
  time: number;
  selectedValue: { keyDoc: string; value: string; result: string }[];
}

export class ExamPart6 extends BaseComponent<
  ExamPart6Props,
  ListExamPart6State
> {
  constructor(props: ExamPart6Props) {
    super(props);
    this.state = {
      time: 360,
      allData: [],
      selectedValue: [],
    };
    this.onMount(async () => {
      await this.getDataItem();
    });
  }

  async getDataItem() {
    let keyDoc = this.getParameterByName("keyDoc") as string;
    let item = await toeicPart6ExamService.getItemByDocId<ToeicPart6Exam>(
      "ToeicPart6Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return toeicPart6Service.getItemByDocId<ToeicPart6>("ToeicPart6", item);
      })
    )) as ToeicPart6[];
    this.setState({
      allData,
      time: item!.Time as any,
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
        <FormExamCom  time={this.state.time} dataPart6={this.state.allData} />
      </div>
    );
  }
}
