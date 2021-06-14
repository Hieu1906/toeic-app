import firebase from "firebase";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { ListCustom } from "../../00.common/00.components/ListCustom/ListCustom";
import { MyNoteWord } from "../../00.common/01.model/MyNoteWord";
import { myNoteWordService } from "../../00.common/02.service/myNoteWordService";

import styles from "./MyWords.module.scss";
interface MyWordProps {}
interface MyWordState {
  allData: MyNoteWord[];
}

export class MyWord extends BaseComponent<MyWordProps, MyWordState> {
  constructor(props: MyWordProps) {
    super(props);
    this.state={
      allData: [],
    };
    this.onMount(async () => {
      await this.getAllData();
    });
  }

  async getAllData() {
    let uid = firebase.auth().currentUser!.uid;
    let allData = await myNoteWordService.getItemByDocId<MyNoteWord>(
      "MyNoteWord",
      uid
    );
    await this.setState({
      allData: [allData as any],
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container__header}>
          <div
            className={styles.container__header__item}
            style={{ backgroundColor: "#32A9E3" }}
          >
            Từ Vựng của tôi
          </div>
          <div
            className={styles.container__header__item}
            style={{ backgroundColor: "#FFBA00" }}
          >
            Luyện tập
          </div>
        </div>
       <div className={styles.container__content}>
       {(this.state.allData && this.state.allData.length > 0) && (
          <ListCustom allData={this.state.allData[0].Content} />
        )}
       </div>
      </div>
    );
  }
}
