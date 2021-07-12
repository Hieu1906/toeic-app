import { Skeleton, Tooltip } from "antd";
import * as _ from "lodash";
import * as React from "react";
import { Link } from "react-router-dom";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { StoryStudent } from "../../00.common/01.model/StoryStudent";
import { storyStudentService } from "../../00.common/02.service/storyStudentService";
import { ROUTER } from "../../00.common/const";
import styles from "./HeaderEmployee.module.scss";
interface HeaderEmployeeProps {}
interface INewsDetailState {
  color?: string;
  enable?: boolean;
  selectedUser?: StoryStudent;
  loading: boolean;
}
export default class HeaderEmployee extends BaseComponent<
  HeaderEmployeeProps,
  INewsDetailState
> {
  constructor(props: HeaderEmployeeProps) {
    super(props);
    this.state = {
      enable: false,
      selectedUser: {} as StoryStudent,
      loading: true,
    };
    this.onMount(async () => {
      const keyDoc = this.getParameterByName("keyDoc");
      if (keyDoc) {
        let selectedUser =
          await storyStudentService.getItemByDocId<StoryStudent>(
            "StoryStudent",
            keyDoc
          );
        this.setState({
          selectedUser,
        });
      }

      this.setState({
        loading: false,
      });
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

  public render(): React.ReactElement<HeaderEmployeeProps> {
    const iconArrow = (
      <svg
        className={styles.content__BreadCrumb__iconArrow}
        width="4"
        height="7"
        viewBox="0 0 4 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.265625 0.078125L0.15625 0.1875C0.078125 0.265625 0.078125 0.375 0.15625 0.453125L3.20312 3.5L0.15625 6.5625C0.078125 6.64062 0.078125 6.75 0.15625 6.82812L0.265625 6.9375C0.34375 7.01562 0.453125 7.01562 0.53125 6.9375L3.82812 3.64062C3.90625 3.5625 3.90625 3.45312 3.82812 3.375L0.53125 0.078125C0.453125 0 0.34375 0 0.265625 0.078125Z"
          fill="white"
        />
      </svg>
    );
    return (
      <Skeleton avatar paragraph={{ rows: 10 }} loading={this.state.loading}>
        {this.state.selectedUser && (
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#262626",
            }}
          >
            <div className={styles.overlay}></div>
            <img
              src={this.state.selectedUser!.BannerHomeUrl}
              className={styles.imageBanner}
            ></img>
            <div
              className={styles.content}
              style={{
                position: "absolute",
              }}
            >
              <div className={styles.content__BreadCrumb}>
                <Link to={ROUTER.ROOT}>
                  <span style={{ cursor: "pointer" }}>Trang chủ</span>
                </Link>

                <span>{iconArrow}</span>
                <span> Chi tiết</span>
              </div>
              <div className={styles.content__titleContent}>
                Vinh danh nhân viên
              </div>
              {this.state.selectedUser.Title &&
              this.state.selectedUser.Title.length > 100 ? (
                <Tooltip
                  title={this.state.selectedUser.Title}
                  style={{ height: "100px", color: "#FA541C" }}
                >
                  <div className={styles.content__title}>
                    {this.state.selectedUser.Title.slice(0, 99).concat("...")}
                  </div>
                </Tooltip>
              ) : (
                <div className={styles.content__title}>
                  {this.state.selectedUser.Title}
                </div>
              )}

              <img
                src={`${this.state.selectedUser.Avatar}?width=138&height=138`}
                className={styles.content__avarta}
              />
              <div className={styles.content__name}>
                {this.state.selectedUser.Name}
              </div>
              <div className={styles.content__jobtitle}>
                {this.state.selectedUser.JobTitle}
              </div>
              <div
                className={styles.content__favorite}
                style={{
                  backgroundColor: this.state.enable
                    ? this.state.color
                    : "#faad14",
                }}
              >
                {favoriteIcon}
                <div style={{ marginLeft: "8px" }}>
                  Tháng {this.state.selectedUser.Month}-
                  {this.state.selectedUser.Year}
                </div>
              </div>
            </div>
          </div>
        )}
      </Skeleton>
    );
  }
}

const favoriteIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.58203 3.10156L8.94922 3.67578L9.52344 5.04297C9.55078 5.09766 9.60547 5.15234 9.6875 5.15234C9.74219 5.15234 9.79688 5.09766 9.82422 5.04297L10.3984 3.67578L11.7656 3.10156C11.8203 3.07422 11.8477 3.01953 11.8477 2.96484C11.8477 2.88281 11.8203 2.82812 11.7656 2.80078L10.3984 2.22656L9.82422 0.859375C9.79688 0.804688 9.74219 0.75 9.6875 0.75C9.60547 0.75 9.55078 0.804688 9.52344 0.859375L8.94922 2.22656L7.58203 2.80078C7.52734 2.82812 7.5 2.88281 7.5 2.96484C7.5 3.01953 7.52734 3.07422 7.58203 3.10156ZM10.4531 8.07812L7.58203 7.64062L6.29688 5.04297C6.07812 4.57812 5.39453 4.57812 5.17578 5.04297L3.89062 7.64062L1.01953 8.07812C0.5 8.13281 0.308594 8.78906 0.664062 9.14453L2.74219 11.168L2.25 14.0391C2.16797 14.5312 2.71484 14.9414 3.17969 14.6953L5.72266 13.3281L8.29297 14.6953C8.375 14.7227 8.51172 14.75 8.59375 14.75C8.94922 14.75 9.22266 14.4766 9.22266 14.1211C9.22266 14.0938 9.22266 14.0664 9.22266 14.0391L8.73047 11.168L10.8086 9.14453C11.1641 8.78906 10.9727 8.13281 10.4531 8.07812ZM14.418 6.76562L13.3242 6.30078L12.8594 5.20703C12.832 5.17969 12.7773 5.15234 12.75 5.15234C12.6953 5.15234 12.6406 5.17969 12.6133 5.20703L12.1484 6.30078L11.0547 6.76562C11.0273 6.79297 11 6.84766 11 6.875C11 6.92969 11.0273 6.98438 11.0547 7.01172L12.1484 7.47656L12.6133 8.57031C12.6406 8.59766 12.6953 8.625 12.75 8.625C12.7773 8.625 12.832 8.59766 12.8594 8.57031L13.3242 7.47656L14.418 7.01172C14.4453 6.98438 14.5 6.92969 14.5 6.875C14.5 6.84766 14.4453 6.79297 14.418 6.76562Z"
      fill="white"
    />
  </svg>
);
