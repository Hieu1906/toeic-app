import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import styles from "./NounFunction.module.scss";
export class NounFunction extends BaseComponent<{}, {}> {
  render() {
    return (
      <div className={styles.NounFuntion}>
        <div className={styles.NounFuntion__container}>huihuihi</div>
      </div>
    );
  }
}
