
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart3 } from "../../../00.common/01.model/ToeicPart3";
import { ToeicPart3Exam } from "../../../00.common/01.model/ToeicPart3Exam";
import { toeicPart3ExamService } from "../../../00.common/02.service/toeicPart3ExamService";
import { toeicPart3Service } from "../../../00.common/02.service/toeicPart3Service";



interface ExamPart3Props {}
interface ListExamPart3State {
  allData: ToeicPart3[];
  selectedValue: { keyDoc: string; value: string; result: string }[];
  time:number
}

export class ExamPart3 extends BaseComponent<
  ExamPart3Props,
  ListExamPart3State
> {
  constructor(props: ExamPart3Props) {
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
    let item = await toeicPart3ExamService.getItemByDocId<ToeicPart3Exam>(
      "ToeicPart3Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return toeicPart3Service.getItemByDocId<ToeicPart3>("ToeicPart3", item);
      })
    )) as ToeicPart3[];
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
        dataPart3={this.state.allData} />
      </div>
    );
  }
}
