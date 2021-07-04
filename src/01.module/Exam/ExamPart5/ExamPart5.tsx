
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart5 } from "../../../00.common/01.model/ToeicPart5";
import { ToeicPart5Exam } from "../../../00.common/01.model/ToeicPart5Exam";
import { toeicPart5ExamService } from "../../../00.common/02.service/toeicPart5ExamService";
import { toeicPart5Service } from "../../../00.common/02.service/toeicPart5Service";



interface ExamPart5Props {}
interface ListExamPart5State {
  allData: ToeicPart5[];
  selectedValue: { keyDoc: string; value: string; result: string }[];
}

export class ExamPart5 extends BaseComponent<
  ExamPart5Props,
  ListExamPart5State
> {
  constructor(props: ExamPart5Props) {
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
    let item = await toeicPart5ExamService.getItemByDocId<ToeicPart5Exam>(
      "ToeicPart5Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return toeicPart5Service.getItemByDocId<ToeicPart5>("ToeicPart5", item);
      })
    )) as ToeicPart5[];
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
        <FormExamCom dataPart5={this.state.allData} />
      </div>
    );
  }
}
