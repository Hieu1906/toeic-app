import { Empty, Popover, Skeleton, Tooltip } from "antd";
import * as _ from "lodash";
import * as React from "react";
import styles from "./StoryStudent.module.scss";
import Slider from "react-slick";

import { orderBy } from "lodash";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { storyStudentService } from "../../00.common/02.service/storyStudentService";
import { StoryStudent } from "../../00.common/01.model/StoryStudent";
import { Link } from "react-router-dom";
import { ROUTER } from "../../00.common/const";
interface StoryStudentProps {}
interface StoryStudentStates {
  allData: StoryStudent[];
}
export class StoryStudentToeic extends BaseComponent<
  StoryStudentProps,
  StoryStudentStates
> {
  public constructor(props: StoryStudentProps) {
    super(props);
    this.state = {
      allData: [],
    };
    this.onMount(async () => {
      await this.getDataStoryStudent();
    });
  }

  public openDetail(emp: any) {}

  async getDataStoryStudent() {
    let allData = orderBy(
      await storyStudentService.getAll<StoryStudent>("StoryStudent"),
      "Order",
      "asc"
    );

    this.setState({
      allData,
    });
  }
  public renderItem() {
    let icon = (
      <svg
        className={styles.StoryStudent__contentLeft__content__iconComma}
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4375 9.75H17V7C17 5.49609 18.2031 4.25 19.75 4.25H20.0938C20.6523 4.25 21.125 3.82031 21.125 3.21875V1.15625C21.125 0.597656 20.6523 0.125 20.0938 0.125H19.75C15.9258 0.125 12.875 3.21875 12.875 7V17.3125C12.875 18.4727 13.7773 19.375 14.9375 19.375H20.4375C21.5547 19.375 22.5 18.4727 22.5 17.3125V11.8125C22.5 10.6953 21.5547 9.75 20.4375 9.75ZM8.0625 9.75H4.625V7C4.625 5.49609 5.82812 4.25 7.375 4.25H7.71875C8.27734 4.25 8.75 3.82031 8.75 3.21875V1.15625C8.75 0.597656 8.27734 0.125 7.71875 0.125H7.375C3.55078 0.125 0.5 3.21875 0.5 7V17.3125C0.5 18.4727 1.40234 19.375 2.5625 19.375H8.0625C9.17969 19.375 10.125 18.4727 10.125 17.3125V11.8125C10.125 10.6953 9.17969 9.75 8.0625 9.75Z"
          fill="white"
        />
      </svg>
    );
    let star = (
      <svg
        width="25"
        height="25"
        className={
          styles.StoryStudent__contentLeft__content__contaninerMonth__iconStar
        }
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6406 4.03125L14.9844 5.01562L15.9688 7.35938C16.0156 7.45312 16.1094 7.54688 16.25 7.54688C16.3438 7.54688 16.4375 7.45312 16.4844 7.35938L17.4688 5.01562L19.8125 4.03125C19.9062 3.98438 19.9531 3.89062 19.9531 3.79688C19.9531 3.65625 19.9062 3.5625 19.8125 3.51562L17.4688 2.53125L16.4844 0.1875C16.4375 0.09375 16.3438 0 16.25 0C16.1094 0 16.0156 0.09375 15.9688 0.1875L14.9844 2.53125L12.6406 3.51562C12.5469 3.5625 12.5 3.65625 12.5 3.79688C12.5 3.89062 12.5469 3.98438 12.6406 4.03125ZM17.5625 12.5625L12.6406 11.8125L10.4375 7.35938C10.0625 6.5625 8.89062 6.5625 8.51562 7.35938L6.3125 11.8125L1.39062 12.5625C0.5 12.6562 0.171875 13.7812 0.78125 14.3906L4.34375 17.8594L3.5 22.7812C3.35938 23.625 4.29688 24.3281 5.09375 23.9062L9.45312 21.5625L13.8594 23.9062C14 23.9531 14.2344 24 14.375 24C14.9844 24 15.4531 23.5312 15.4531 22.9219C15.4531 22.875 15.4531 22.8281 15.4531 22.7812L14.6094 17.8594L18.1719 14.3906C18.7812 13.7812 18.4531 12.6562 17.5625 12.5625ZM24.3594 10.3125L22.4844 9.51562L21.6875 7.64062C21.6406 7.59375 21.5469 7.54688 21.5 7.54688C21.4062 7.54688 21.3125 7.59375 21.2656 7.64062L20.4688 9.51562L18.5938 10.3125C18.5469 10.3594 18.5 10.4531 18.5 10.5C18.5 10.5938 18.5469 10.6875 18.5938 10.7344L20.4688 11.5312L21.2656 13.4062C21.3125 13.4531 21.4062 13.5 21.5 13.5C21.5469 13.5 21.6406 13.4531 21.6875 13.4062L22.4844 11.5312L24.3594 10.7344C24.4062 10.6875 24.5 10.5938 24.5 10.5C24.5 10.4531 24.4062 10.3594 24.3594 10.3125Z"
          fill={"#33abe5"}
        />
      </svg>
    );

    return this.state.allData.map((item) => (
      <div className={styles.StoryStudent}>
    
          <div className={styles.StoryStudent__contentLeft}>
            <img
              className={styles.StoryStudent__contentLeft__backgroundImage}
              src={`${item.BannerHomeUrl}`}
            />

            <div className={styles.StoryStudent__contentLeft__overlay}></div>
            <Tooltip
              title={
                <div>
                  {iconEye} {item.ViewsCount ? item.ViewsCount : 0} lượt xem
                </div>
              }
              trigger="hover"
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.openDetail(item);
                }}
                className={styles.StoryStudent__contentLeft__content}
              >
                {icon}
                {iconArrow}
                {165 < item.Title.length ? (
                  <Tooltip title={item.Title}>
                    <div
                      className={
                        styles.StoryStudent__contentLeft__content__description
                      }
                    >
                      {" "}
                      {item.Title.slice(0, 164).concat("...")}{" "}
                    </div>
                  </Tooltip>
                ) : (
                  <div
                    className={
                      styles.StoryStudent__contentLeft__content__description
                    }
                  >
                    {item.Title}
                  </div>
                )}
                <div
                  className={
                    styles.StoryStudent__contentLeft__content__contaninerMonth
                  }
                >
                  {star}
                  <div
                    className={
                      styles.StoryStudent__contentLeft__content__contaninerMonth__dateAndMonth
                    }
                  >
                    Tháng {item.Month}-{item.Year}
                  </div>
                </div>
              </div>
            </Tooltip>
          </div>
     
        <div className={styles.StoryStudent__contentRight}>
          <div className={styles.StoryStudent__contentRight__ViewContent}>
            <div
              className={styles.StoryStudent__contentRight__ViewContent__title}
            >
              Chuyện học hành
            </div>
            <Link to={`${ROUTER.STORYSTUNDENTDETAIL}?keyDoc=${item.KeyDoc}`}>
            <div
          
              className={
                styles.StoryStudent__contentRight__ViewContent__inforUser
              }
            >
              <img
                src={`${item.Avatar}`}
                className={
                  styles.StoryStudent__contentRight__ViewContent__inforUser__avartar
                }
              />
              <div
                className={
                  styles.StoryStudent__contentRight__ViewContent__inforUser__infor
                }
              >
                <div
                  className={
                    styles.StoryStudent__contentRight__ViewContent__inforUser__infor__name
                  }
                >
                  {item.Name}
                </div>
                <div
                  className={
                    styles.StoryStudent__contentRight__ViewContent__inforUser__infor__jobTitle
                  }
                >
                  {item.JobTitle ? item.JobTitle : ""}
                </div>
              </div>
            </div>
            </Link>
            <div
              className={
                styles.StoryStudent__contentRight__ViewContent__decription
              }
            >
              {item.Description1}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  public render(): React.ReactElement<StoryStudentProps> {
    let settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3500,
      autoplay: true,
    };
    return (
      <Skeleton loading={false} paragraph={{ rows: 7 }} avatar>
        {this.state.allData.length > 0 ? (
          <div style={{ width: "100%", marginTop: -80 }}>
            <Slider {...settings}>{this.renderItem()}</Slider>
          </div>
        ) : (
          <Empty />
        )}
      </Skeleton>
    );
  }
}

const iconArrow = (
  <svg
    className={styles.StoryStudent__contentLeft__content__IconLeft}
    viewBox="0 0 96 237"
    fill="#33abe5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M95.6499 161.287C95.6523 155.475 93.7316 149.838 90.2072 145.313L89.2322 144.111L-26.8501 0.755859H-65L65.4606 161.287L70.9288 167.813C74.4643 172.285 76.4276 177.866 76.4969 183.643C76.5662 189.42 74.7375 195.05 71.3103 199.611V200.173L89.4527 178.138L89.9274 177.559L90.47 176.892V176.831C93.7976 172.384 95.602 166.919 95.599 161.295L95.6499 161.287Z"
      fill="#33abe5"
    />
    <path
      d="M72.4039 198.085L74.837 193.243C76.4384 189.03 76.9243 184.452 76.2448 179.98C75.5652 175.508 73.7447 171.305 70.9711 167.804L60.8233 155.699V155.743C62.1521 157.321 62.8684 159.353 62.834 161.446C62.7996 163.539 62.0168 165.545 60.6368 167.076L52.0912 177.602L33.6945 155.672L19.9521 139.409C17.0585 141.204 14.5518 143.595 12.5873 146.433C10.6227 149.271 9.24206 152.496 8.53079 155.909C7.81953 159.321 7.79278 162.849 8.45221 166.272C9.11164 169.696 10.4432 172.943 12.3645 175.813L32.9146 200.252L-40.3501 287.226H-2.20027L71.3018 200.173V199.611C71.7002 199.111 72.0478 198.611 72.4039 198.085Z"
      fill="#33abe5"
    />
  </svg>
);
const iconEye = (
  <svg
    style={{ marginRight: 4 }}
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.25 1.875C7.03906 1.89844 6.71094 1.94531 6.5 1.99219C6.59375 2.15625 6.66406 2.46094 6.6875 2.625C6.6875 3.35156 6.07812 3.9375 5.375 3.9375C5.1875 3.9375 4.88281 3.86719 4.74219 3.77344C4.67188 3.98438 4.625 4.28906 4.625 4.5C4.625 5.95312 5.79688 7.125 7.25 7.125C8.70312 7.125 9.875 5.95312 9.875 4.5C9.875 3.07031 8.70312 1.875 7.25 1.875ZM13.9062 4.17188C12.6406 1.6875 10.1094 0 7.25 0C4.36719 0 1.83594 1.6875 0.570312 4.17188C0.523438 4.26562 0.5 4.40625 0.5 4.52344C0.5 4.61719 0.523438 4.75781 0.570312 4.85156C1.83594 7.33594 4.36719 9 7.25 9C10.1094 9 12.6406 7.33594 13.9062 4.85156C13.9531 4.75781 13.9766 4.61719 13.9766 4.5C13.9766 4.40625 13.9531 4.26562 13.9062 4.17188ZM7.25 7.875C4.92969 7.875 2.79688 6.58594 1.67188 4.5C2.79688 2.41406 4.92969 1.125 7.25 1.125C9.54688 1.125 11.6797 2.41406 12.8047 4.5C11.6797 6.58594 9.54688 7.875 7.25 7.875Z"
      fill="#33abe5"
    />
  </svg>
);
