
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { FormExamCom } from "../../../00.common/00.components/FormExam/FomExam";
import { ToeicPart7 } from "../../../00.common/01.model/ToeicPart7";
import { ToeicPart7Exam } from "../../../00.common/01.model/ToeicPart7Exam";
import { toeicPart7ExamService } from "../../../00.common/02.service/toeicPart7ExamService";
import { toeicPart7Service } from "../../../00.common/02.service/toeicPart7Service";



interface ExamPart7Props {}
interface ListExamPart7State {
  allData: ToeicPart7[];
  selectedValue: { keyDoc: string; value: string; result: string }[];
}

export class ExamPart7 extends BaseComponent<
  ExamPart7Props,
  ListExamPart7State
> {
  constructor(props: ExamPart7Props) {
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
    let item = await toeicPart7ExamService.getItemByDocId<ToeicPart7Exam>(
      "ToeicPart7Exam",
      keyDoc
    );
    let arrKeyDocItem = item?.LookUpKeyDoc as string[];
    let allData = (await Promise.all(
      arrKeyDocItem?.map(async (item) => {
        return toeicPart7Service.getItemByDocId<ToeicPart7>("ToeicPart7", item);
      })
    )) as ToeicPart7[];
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
        <FormExamCom dataPart7={this.state.allData} />
      </div>
    );
  }
}
