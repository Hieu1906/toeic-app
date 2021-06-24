import { Button } from "antd";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import styles from "./NounFunction.module.scss";
import { LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../00.common/const";
export class NounFunction extends BaseComponent<{}, {}> {
  render() {
    return (
      <div className={styles.NounFuntion}>
        <div className={styles.NounFuntion__container}>
          <div className={styles.NounFuntion__container__header}>
            <h1 className={styles.NounFuntion__container__header__title}>
              Chức năng của Danh từ trong câu
            </h1>
            <div>
              {" "}
              <Button type="primary" icon={<LikeOutlined />}>
                Thích
              </Button>{" "}
              <Button type="primary" icon={<ShareAltOutlined />}>
                Chia sẻ
              </Button>
            </div>
            <div className={styles.NounFuntion__container__header__iconWrapper}>
              <img
                height={75}
                src="https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FLogo%2Flogo.png?alt=media&token=70db5d87-b189-48aa-84e4-8eec35f15158"
              />
              <div style={{ width: "60%" , color:"#333;"}}>
                Bài viết này được biên soạn bởi Toeic Sinh viên Hust, nơi phát
                triển
                <Link to={ROUTER.DE_THI}>
                  <a>Chương trình luyện thi TOEIC </a>
                </Link>{" "}
                số 1 hiện nay.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
