import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { words600Service } from "../../00.common/02.service/words600Service";
import styles from "./WordsToeic600.module.scss";
import { Row, Col, Tooltip } from "antd";
import React from "react";
import ThemeDetailModalCom from "./ThemeDetail";
import { WordsToeic } from "../../00.common/01.model/600WordsToeic";
import { userInforService } from "../../00.common/02.service/userInforService";
import { MemberInfor } from "../../00.common/01.model/MemberInfor";
interface Worrds600Props {}

interface Worrds600State {
  allData: WordsToeic[];
  currentUser?: MemberInfor;
}

export default class Words600Com extends BaseComponent<
  Worrds600Props,
  Worrds600State
> {
  private refModalNewsItem = React.createRef<ThemeDetailModalCom>();
  constructor(props: Worrds600Props) {
    super(props);
    this.state = {
      allData: [],
      currentUser: undefined as any,
    };
    this.onMount(async () => {
      let currentUser = await userInforService.getCurrentUser();
      this.setState({
        currentUser,
      });
      await Promise.all([this.loadAllData()]);
    });
  }
  async loadAllData() {
    let allData = await words600Service.getAll<WordsToeic>("600WordsToeic");
    this.setState({
      allData: allData,
    });
  }
  render() {
    return (
      <div className={styles.words600}>
        <div className={styles.words600__introduce}>
          <div className={styles.words600__introduce__titleIntroduce}>
            600 Từ Vựng Luyện Thi TOEIC
          </div>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2F600wordsToeics%2FIntroduce%2F600-tu-vung-toeic.gif?alt=media&token=c6037eb4-9145-417f-b3fd-042be2ecc478"
            }
          />
          <p>
            Bộ từ luyện thi TOEIC gồm 600 từ vựng tiếng anh thiết yếu nhất sẽ là
            nền tảng để giúp bạn đạt được những điểm cao trong kỳ thi TOEIC.
          </p>

          <span style={{ color: "blue", fontWeight: "bold" }}>
            Tại sao bạn lại học "600 Từ Vựng TOEIC" này ?
          </span>
          <ul>
            <li style={{ marginLeft: 20 }}>
              Trong rất nhiều tài liệu và sách luyện thi TOEIC bạn phân vân
              không biết tài liệu nào tốt cho bạn thì đây chính là kim chỉ nam
              cho bạn.
            </li>
            <li style={{ marginLeft: 20 }}>
              Đây chính là giải pháp bạn mà chúng tôi chắc chắn rằng bạn đang
              tìm kiếm. Bộ từ vựng này giúp bạn tiết kiệm thời gian quý giá của
              mình bằng cách tập trung vào 600 từ thiết yếu bạn cần nắm rõ để
              ghi điểm cao trong kì thi TOEIC.
            </li>
            <li style={{ marginLeft: 20 }}>
              Cuốn sách này được xem như "gối đầu" cho các cao thủ luyện thi
              TOEIC ở những mốc điểm cao.
            </li>
            <p>
              Website cung cấp{" "}
              <span style={{ color: "blue", fontWeight: "bold" }}>
                HOÀN TOÀN MIỄN PHÍ
              </span>
              , bạn có thể cùng với bạn bè, anh chị em của mình cùng nhau học và
              tham gia các phần kiểm tra từ vựng thông minh.
            </p>
          </ul>
        </div>
        <div className={styles.words600__Content}>
          <Row gutter={24}>
            {this.state.allData.map((item, index) => (
              <Col
                onClick={() => {
                  this.refModalNewsItem.current!.openModal(item);
                }}
                span={6}
              >
                <Tooltip title="Click Mouse to learn">
                  <div className={styles.words600__Content__item}>
                    <img
                      className={styles.words600__Content__item__img}
                      src={item.ImgBanner}
                    />
                    <div className={styles.words600__Content__item__title}>
                      {index}-{item.Title}
                    </div>
                  </div>
                </Tooltip>
              </Col>
            ))}
          </Row>
        </div>
        <ThemeDetailModalCom
          currentUser={this.state.currentUser as MemberInfor }
          ref={this.refModalNewsItem}
        />
      </div>
    );
  }
}
