import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faCalendar,
  faQuestionCircle,
  faEye,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import styles from "./ListExamPart1.module.scss";
import React from "react";
import { ROUTER } from "../../../00.common/const";
import { Link } from "react-router-dom";
interface ListExamPart1Props {}
interface ListExamPart2State {}

export class ListExamPart1 extends BaseComponent<
  ListExamPart1Props,
  ListExamPart2State
> {
  constructor(props: ListExamPart1Props) {
    super(props);
  }

  renderItem(item: any) {
    return (
      <Link to={`${ROUTER.EXAM_PART1}?id=9`}>
        <div className={styles.Contanier__leftcontent__item}>
          <div
            className={styles.Contanier__leftcontent__item__round}
            style={{
              backgroundColor: this.radomColor(),
              color: "white",
              fontWeight: 600,
            }}
          >
            Test 1
          </div>
          <div className={styles.Contanier__leftcontent__item__infor}>
            <div className={styles.Contanier__leftcontent__item__infor__title}>
              Đề thi Toeic Part 1 - Ets 2020 - Test 2 - Có đáp án chi tiết
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                className={
                  styles.Contanier__leftcontent__item__infor__wrapInfor
                }
              >
                <div
                  className={
                    styles.Contanier__leftcontent__item__infor__wrapInfor__item
                  }
                >
                  <span className={styles.examShortExam__content__infor}>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginRight: 5, color: "#909399" }}
                    />
                    Hiếu kayo
                  </span>
                </div>
                <div
                  className={
                    styles.Contanier__leftcontent__item__infor__wrapInfor__item
                  }
                >
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ marginRight: 5, color: "#909399" }}
                  />
                  19/06/1998
                </div>
                <div
                  className={
                    styles.Contanier__leftcontent__item__infor__wrapInfor__item
                  }
                >
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ marginRight: 5, color: "#909399" }}
                  />
                  6 phút
                </div>
                <div
                  className={
                    styles.Contanier__leftcontent__item__infor__wrapInfor__item
                  }
                >
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    style={{ marginRight: 5, color: "#909399" }}
                  />
                  10 câu
                </div>
              </div>
              <div
                className={
                  styles.Contanier__leftcontent__item__infor__viewAndExam
                }
              >
                <div
                  style={{ backgroundColor: "#FF9933", color: "white" }}
                  className={
                    styles.Contanier__leftcontent__item__infor__viewAndExam__item
                  }
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginRight: 5, color: "white" }}
                  />{" "}
                  27699 lượt thi
                </div>
                <div
                  style={{ backgroundColor: "#00CC00", color: "white" }}
                  className={
                    styles.Contanier__leftcontent__item__infor__viewAndExam__item
                  }
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ marginRight: 5, color: "white" }}
                  />{" "}
                  222699 lượt xem
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  radomColor() {
    let arrColor = ["#F9BD2C", "#1A73E8", "#62BA7E", "#28334B", "#F55454"];
    let randomColor = Math.floor(Math.random() * arrColor.length);
    return arrColor[randomColor];
  }
  render() {
    return (
      <div className={styles.Contanier}>
        <div className={styles.Contanier__leftcontent}>
          <h3>Series: Bộ đề thi Toeic Part 1 - Có đáp án chi tiết</h3>
          {[1, 2, 3, 4].map((item) => this.renderItem(item))}
        </div>
        <div className={styles.Contanier__rightContent}>
          <img
            style={{ width: "100%" }}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2F3.png?alt=media&token=b4e7a35d-e8fa-460b-a2d3-587b39ab6dd4"
            }
          ></img>
          <img
            style={{ width: "100%", marginTop: 20 }}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2FTOEIC%20Test%20Examples%20for%20Preparation%202.jpg?alt=media&token=77aec091-eca1-4df8-998f-613016450228"
            }
          />
        </div>
      </div>
    );
  }
}
