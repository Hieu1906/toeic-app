
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart4 } from "../../../00.common/01.model/ToeicPart4";
import { ToeicPart4Exam } from "../../../00.common/01.model/ToeicPart4Exam";
import { toeicPart4ExamService } from "../../../00.common/02.service/toeicPart4ExamService";
import { toeicPart4Service } from "../../../00.common/02.service/toeicPart4Service";



interface ExamPart4Props {}
interface ListExamPart4State {
  allData: ToeicPart4[];
  selectedValue: { keyDoc: string; value: string; result: string }[];
}

export class ExamPart4 extends BaseComponent<
  ExamPart4Props,
  ListExamPart4State
> {
  constructor(props: ExamPart4Props) {
    super(props);
    this.state = {
      allData: [],
      selectedValue: [],
    };
    this.onMount(async () => {
      await this.getDataItem();
    });
  }

  async getDataItem() {
    let keyDoc = this.getParameterByName("keyDoc") as string;
    let item = await toeicPart4ExamService.getItemByDocId<ToeicPart4Exam>(
      "ToeicPart4Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return toeicPart4Service.getItemByDocId<ToeicPart4>("ToeicPart4", item);
      })
    )) as ToeicPart4[];
    this.setState({
      allData,
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
        <FormExamCom dataPart4={this.state.allData} />
      </div>
    );
  }
}
