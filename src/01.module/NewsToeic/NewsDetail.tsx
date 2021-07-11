import { Col, Empty, Row, Skeleton } from "antd";
import * as _ from "lodash";
import * as moment from "moment";
import * as React from "react";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { CKEditor5 } from "../../00.common/00.components/ckeditor5/CKEditor";
import { CommentComp } from "../../00.common/00.components/Comment/CommentComp";
import { NewsToeic } from "../../00.common/01.model/NewsToeic";
import { newsToeicService } from "../../00.common/02.service/NewsToeicService";
import { Footer } from "../Footer/Footer";

import styles from "./NewsDetail.module.scss";

interface NewDetailsProps {}
interface NewDetailsStates {
  data: NewsToeic;

  liked: boolean;
  loading: boolean;

  enable?: boolean;
}
export class NewDetails extends BaseComponent<
  NewDetailsProps,
  NewDetailsStates
> {
  public commentRef: React.RefObject<HTMLSpanElement> = React.createRef();
  public constructor(props: any) {
    super(props);
    this.state = {
      data: {} as NewsToeic,

      liked: false,
      loading: true,
    };
    this.onMount(async () => {
      const keyDoc = this.getParameterByName("keyDoc");

      if (keyDoc) {
        const data = (await newsToeicService.getItemByDocId<NewsToeic>(
          "NewsToeic",
          keyDoc
        )) as any;

        this.setState({
          data: data,

          loading: false,
        });
      }
    });
  }

  public getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  public renderNewsDetail(): React.ReactNode {
    const iconNotLike = (
      <svg
        className={styles.iconLike}
        width="16"
        height="17"
        style={{ marginTop: 1 }}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 8.9375C15.8125 8.53125 16 8 16 7.375C15.9688 6.1875 14.9688 5.09375 13.7188 5.09375H11.5312C11.7812 4.5625 12.1562 3.875 12.1562 2.9375C12.1562 1.09375 11.4375 0 9.5625 0C8.625 0 8.28125 1.1875 8.125 2.125C8 2.65625 7.90625 3.1875 7.59375 3.5C6.84375 4.21875 5.75 6 5.0625 6.375C5 6.40625 4.90625 6.4375 4.8125 6.4375C4.625 6.1875 4.3125 6 4 6H1C0.4375 6 0 6.46875 0 7V15C0 15.5625 0.4375 16 1 16H4C4.53125 16 5 15.5625 5 15V14.75C6 14.75 8.125 16.0312 10.5312 16C10.6875 16 11.7188 16.0312 11.8125 16C13.6562 16 14.6875 14.9062 14.625 13.2188C15.0938 12.6562 15.3438 11.8438 15.2188 11.125C15.5938 10.5 15.6875 9.65625 15.5 8.9375ZM1 15V7H4V15H1ZM14.25 8.65625C14.75 9 14.75 10.5 14.0625 10.875C14.4688 11.5625 14.0938 12.5312 13.5938 12.8125C13.8438 14.4375 13 15 11.8125 15C11.6875 15.0312 10.625 15 10.5312 15C8.25 15 6.3125 13.75 5 13.75V7.375C6.15625 7.375 7.25 5.25 8.3125 4.1875C9.25 3.25 8.9375 1.65625 9.5625 1C11.1562 1 11.1562 2.125 11.1562 2.9375C11.1562 4.25 10.2188 4.84375 10.2188 6.09375H13.7188C14.4375 6.09375 14.9688 6.75 15 7.375C15 8 14.75 8.5 14.25 8.65625ZM3.25 13.5C3.25 13.0938 2.90625 12.75 2.5 12.75C2.0625 12.75 1.75 13.0938 1.75 13.5C1.75 13.9375 2.0625 14.25 2.5 14.25C2.90625 14.25 3.25 13.9375 3.25 13.5Z"
          fill="#595959"
        />
      </svg>
    );

    const icon1 = (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
          fill="#EEEEEE"
        />
      </svg>
    );
    const iconLike = (
      <svg
        className={styles.iconLike}
        width="16"
        height="16"
        style={{ marginTop: 1 }}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.25 7H0.75C0.3125 7 0 7.34375 0 7.75V15.25C0 15.6875 0.3125 16 0.75 16H3.25C3.65625 16 4 15.6875 4 15.25V7.75C4 7.34375 3.65625 7 3.25 7ZM2 14.75C1.5625 14.75 1.25 14.4375 1.25 14C1.25 13.5938 1.5625 13.25 2 13.25C2.40625 13.25 2.75 13.5938 2.75 14C2.75 14.4375 2.40625 14.75 2 14.75ZM12 2.5625C12 0.25 10.5 0 9.75 0C9.09375 0 8.8125 1.25 8.6875 1.8125C8.5 2.5 8.34375 3.1875 7.875 3.65625C6.875 4.6875 6.34375 5.96875 5.09375 7.1875C5.03125 7.28125 5 7.375 5 7.46875V14.1562C5 14.3438 5.15625 14.5 5.34375 14.5312C5.84375 14.5312 6.5 14.8125 7 15.0312C8 15.4688 9.21875 16 10.7188 16H10.8125C12.1562 16 13.75 16 14.375 15.0938C14.6562 14.7188 14.7188 14.25 14.5625 13.6875C15.0938 13.1562 15.3438 12.1562 15.0938 11.3438C15.625 10.625 15.6875 9.59375 15.375 8.875C15.75 8.5 16 7.90625 15.9688 7.34375C15.9688 6.375 15.1562 5.5 14.125 5.5H10.9375C11.1875 4.625 12 3.875 12 2.5625Z"
          fill={"#096dd9"}
        />
      </svg>
    );
    const iconComment = (
      <svg
        className={styles.iconComment}
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1C12.8438 1 16 3.46875 16 6.5C16 9.53125 12.8438 12 9 12C8.09375 12 7.21875 11.875 6.375 11.625L5.90625 11.4688L5.5 11.75C4.78125 12.25 3.6875 12.8438 2.3125 13C2.6875 12.5312 3.21875 11.7188 3.5625 10.8125L3.78125 10.2188L3.375 9.78125C2.46875 8.8125 2 7.6875 2 6.5C2 3.46875 5.125 1 9 1ZM9 0C4.5625 0 1 2.9375 1 6.5C1 8 1.59375 9.375 2.625 10.4688C2.1875 11.6875 1.21875 12.75 1.1875 12.75C0.96875 12.9688 0.9375 13.2812 1.03125 13.5625C1.15625 13.8438 1.4375 14 1.71875 14C3.65625 14 5.15625 13.2188 6.09375 12.5625C7 12.8438 7.96875 13 9 13C13.4062 13 17 10.0938 17 6.5C17 2.9375 13.4062 0 9 0Z"
          fill="#595959"
        />
      </svg>
    );
    const iconShare = (
      <svg
        className={styles.iconShare}
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.625 6.15625L12.125 0.40625C11.375 -0.40625 10 0.125 10 1.28125V4.03125C4.8125 4.09375 0 5.03125 0 10.375C0 13.3438 1.71875 15.0625 2.78125 15.8125C3.53125 16.375 4.59375 15.6562 4.3125 14.75C3.125 10.5312 5.15625 10.0625 10 10.0312V12.75C10 13.9062 11.375 14.4375 12.125 13.625L17.625 7.875C18.0938 7.40625 18.0938 6.625 17.625 6.15625ZM16.9062 7.1875L11.4062 12.9375C11.25 13.0938 11 13 11 12.75V9C5.625 9 1.75 9.3125 3.375 15C2.25 14.1875 1 12.6875 1 10.375C1 5.375 6.0625 5 11 5V1.25C11 1.03125 11.25 0.9375 11.4062 1.09375L16.9062 6.84375C16.9688 6.875 17 6.96875 17 7C17 7.0625 16.9688 7.15625 16.9062 7.1875Z"
          fill="#595959"
        />
      </svg>
    );

    return (
      <>
        {!_.isEmpty(this.state.data) ? (
          <Skeleton avatar paragraph={{ rows: 5 }} loading={this.state.loading}>
            <div className={styles.newDetails}>
              <div className={styles.container}></div>
              <Row>
                <div className={styles.titleNews}>{this.state.data.Title}</div>
              </Row>

              <Row className={styles.margin10}>
                <div className={styles.quickInfor}>
                  <Row className={styles.row}>
                    <span
                      style={{ marginRight: 10, display: "none" }}
                      className={styles.viewAvartar}
                    >
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3TDQBB-_F1sfu-gElz73vtUAdlOdLerHDw&usqp=CAU"
                        }
                        className={styles.iconPusher}
                      />
                    </span>
                    <span className={styles.textQuickInfor}>Quản trị viên</span>

                    <span className={styles.textQuickInfor2}>
                      {this.state.data.Category
                        ? this.state.data.Category.Title
                        : ""}
                    </span>
                    <span className={styles.textQuickInfor3}>11/7/2021</span>
                  </Row>
                </div>
              </Row>
              <div className={styles.shortdescription}>
                {this.state.data.ShortDescription}
              </div>
              <Row gutter={16}>
                <Col span={24}>
                  <CKEditor5 value={this.state.data.FullDescription} />
                  <CommentComp
                    colectionName={`NewsDetail__${this.state.data.KeyDoc}`}
                    colectionReaction={`NewsDetail__RC${this.state.data.KeyDoc}`}
                  />
                </Col>
              </Row>
            </div>
            <Footer />
          </Skeleton>
        ) : (
          <span style={{ width: `100%`, textAlign: "center" }}>
            {" "}
            <Empty description={"Bản tin này không tồn tại"} />
          </span>
        )}
      </>
    );
  }

  public render(): React.ReactElement<NewDetailsProps> {
    return <>{this.renderNewsDetail()}</>;
  }
}
