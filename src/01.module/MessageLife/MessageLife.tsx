import { Button, Empty, Modal, Skeleton } from "antd";
import * as _ from "lodash";
import * as React from "react";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { MessageLife } from "../../00.common/01.model/MessageLife";
import { mesageLifeService } from "../../00.common/02.service/messageLifeService";
import styles from "./MessageLife.module.scss";

interface MessageLifeProps {}
interface MessageLifeStates {
  data: MessageLife[];

  loading: boolean;
  visible: boolean;
}

export default class MessageLifeCom extends BaseComponent<
  MessageLifeProps,
  MessageLifeStates
> {
  constructor(props: MessageLifeProps) {
    super(props);
    this.state = {
      data: [],

      loading: true,
      visible: false,
    };
    this.onMount(async () => {
      await this.getdata();
    });
  }

  async getdata() {
    this.setState({
      loading: true,
    });
    let data = await mesageLifeService.getAll<MessageLife>("MessageLife");
    this.setState({
      data,
      loading: false,
    });
  }
  public renderItem() {
    const icon = (
      <svg
        className={styles.MessageLife__container__containerContent__icon}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
      >
        <path
          d="M19.9375 9.75H16.5V7C16.5 5.49609 17.7031 4.25 19.25 4.25H19.5938C20.1523 4.25 20.625 3.82031 20.625 3.21875V1.15625C20.625 0.597656 20.1523 0.125 19.5938 0.125H19.25C15.4258 0.125 12.375 3.21875 12.375 7V17.3125C12.375 18.4727 13.2773 19.375 14.4375 19.375H19.9375C21.0547 19.375 22 18.4727 22 17.3125V11.8125C22 10.6953 21.0547 9.75 19.9375 9.75ZM7.5625 9.75H4.125V7C4.125 5.49609 5.32812 4.25 6.875 4.25H7.21875C7.77734 4.25 8.25 3.82031 8.25 3.21875V1.15625C8.25 0.597656 7.77734 0.125 7.21875 0.125H6.875C3.05078 0.125 0 3.21875 0 7V17.3125C0 18.4727 0.902344 19.375 2.0625 19.375H7.5625C8.67969 19.375 9.625 18.4727 9.625 17.3125V11.8125C9.625 10.6953 8.67969 9.75 7.5625 9.75Z"
          fill={"rgb(47, 84, 235)"}
        />
      </svg>
    );
    return (
      <Skeleton avatar paragraph={{ rows: 5 }} loading={this.state.loading}>
        {this.state.data.length > 0 ? (
          <div className={styles.MessageLife}>
            <div className={styles.MessageLife__overlay2}></div>
            <img
              src={`${this.state.data[0].BannerUrl}?width=586&height=586`}
              className={styles.MessageLife__backgroundImg}
            />
            <div className={styles.MessageLife__container}>
              <>
                <div className={styles.MessageLife__container__inforCEO}>
                  <img
                    height={64}
                    width={64}
                    style={{ borderRadius: "50%" }}
                    src={`${this.state.data[0].Author.Avatar}`}
                    className={styles.MessageLife__container__inforCEO__avatar}
                  />
                  <div
                    className={styles.MessageLife__container__inforCEO__infor}
                  >
                    <div
                      className={
                        styles.MessageLife__container__inforCEO__infor__nameCEO
                      }
                    >
                      Thông điệp lãnh đạo
                    </div>
                    <div
                      className={
                        styles.MessageLife__container__inforCEO__infor__JobTiltle
                      }
                    >
                      {" "}
                      {this.state.data[0].Author.JobTitle}
                      {" " + this.state.data[0].Author.Name}
                    </div>
                  </div>
                </div>
                <div
                  className={styles.MessageLife__container__containerContent}
                >
                  {icon}
                  <div
                    className={
                      styles.MessageLife__container__containerContent__message
                    }
                  >
                    {this.state.data[0].Title}
                  </div>
                </div>
              </>

              <div
                style={{
                  backgroundColor: "rgb(47, 84, 235)",
                }}
                onClick={() => {}}
                className={styles.MessageLife__container__button}
              >
                Xem thêm
              </div>
            </div>
          </div>
        ) : (
          <span style={{ width: `100%` }}>
            <Empty description={"Không có dữ liệu"} />
          </span>
        )}
      </Skeleton>
    );
  }
  render() {
    return <>{this.renderItem()}</>;
  }
}
