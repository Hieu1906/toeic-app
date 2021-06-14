import { Button, Checkbox, Col, Row } from "antd";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { ItemsPracticeExam } from "./constParam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faClock } from "@fortawesome/free-solid-svg-icons";
import Countdown from "react-countdown";
import styles from "./Exam.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../00.common/const";
interface ExamProps {}
interface ExamState {
  autoStart: boolean;
}

export class ExamComp extends BaseComponent<ExamProps, ExamState> {
  public refCountdown = React.createRef<Countdown>();
  constructor(props: ExamProps) {
    super(props);
    this.state = {
      autoStart: false,
    };
  }

  renderExamPractice() {
    return (
      <div style={{ width: "100%" }}>
        <Row gutter={32}>
          {ItemsPracticeExam.slice(0, 3).map((item) => (
            <Col span={8}>
              <div className={styles.examPracticeItem}>
                <div className={styles.examPracticeItem__img}>
                  <img src={item.ImgUrl} />
                </div>
                <div className={styles.examPracticeItem__infor}>
                  <h3 className={styles.examPracticeItem__infor__title}>
                    {item.Title}
                  </h3>
                  <div className={styles.examPracticeItem__infor__des}>
                    {item.Des}
                  </div>
                  {item.Link.map((item) => (
                    <div className={styles.examPracticeItem__infor__a}>
                      {item.Title}
                    </div>
                  ))}

                  <div className={styles.examPracticeItem__infor__btns}>
                    <Link to={item.LinkPractice}>
                      {" "}
                      <a
                        href={item.LinkPractice}
                        style={{ backgroundColor: "#FFBA00", marginRight: 10 }}
                        className={styles.examPracticeItem__infor__btns__button}
                      >
                        Luyện
                      </a>
                    </Link>
                    <Link to={item.LinkStudy}>
                      <a
                        href={item.LinkStudy}
                        style={{ backgroundColor: "#999999" }}
                        className={styles.examPracticeItem__infor__btns__button}
                      >
                        Học
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row gutter={32} style={{ marginTop: 30 }}>
          <Col span={8}>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={ItemsPracticeExam[3].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <h3 className={styles.examPracticeItem__infor__title}>
                  {ItemsPracticeExam[3].Title}
                </h3>
                <div className={styles.examPracticeItem__infor__des}>
                  {ItemsPracticeExam[3].Des}
                </div>
                {ItemsPracticeExam[3].Link.map((item) => (
                  <div className={styles.examPracticeItem__infor__a}>
                    {item.Title}
                  </div>
                ))}

                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href={ItemsPracticeExam[3].LinkPractice}
                    style={{ backgroundColor: "#33ABE5", marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện
                  </a>
                  <a
                    href={ItemsPracticeExam[3].LinkStudy}
                    style={{ backgroundColor: "#999999" }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Học
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col span={16}>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={ItemsPracticeExam[4].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <h3 className={styles.examPracticeItem__infor__title}>
                  {ItemsPracticeExam[4].Title}
                </h3>
                <div className={styles.examPracticeItem__infor__des}>
                  {ItemsPracticeExam[4].Des}
                </div>
                {ItemsPracticeExam[4].Link.map((item) => (
                  <div className={styles.examPracticeItem__infor__a}>
                    {item.Title}
                  </div>
                ))}

                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href={ItemsPracticeExam[4].LinkPractice}
                    style={{ backgroundColor: "#33ABE5", marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện
                  </a>
                  <a
                    href={ItemsPracticeExam[4].LinkStudy}
                    style={{ backgroundColor: "#999999" }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Học
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 50,
                }}
              >
                <div>
                  <Checkbox style={{ marginRight: 5 }} /> <span>Từ Loại</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <Checkbox style={{ marginBottom: 30, marginRight: 5 }} />
                    <span>Từ Vựng</span>
                  </div>
                  <div>
                    <Checkbox style={{ marginRight: 5 }} />
                    <span>Tổng hợp</span>
                  </div>
                </div>
                <div>
                  <Checkbox style={{ marginRight: 5 }} />
                  <span>Từ Vựng</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ marginTop: 30 }}>
          {ItemsPracticeExam.slice(5, 8).map((item) => (
            <Col span={8}>
              <div className={styles.examPracticeItem}>
                <div className={styles.examPracticeItem__img}>
                  <img src={item.ImgUrl} />
                </div>
                <div className={styles.examPracticeItem__infor}>
                  <h3 className={styles.examPracticeItem__infor__title}>
                    {item.Title}
                  </h3>
                  <div className={styles.examPracticeItem__infor__des}>
                    {item.Des}
                  </div>
                  {item.Link.map((item) => (
                    <div className={styles.examPracticeItem__infor__a}>
                      {item.Title}
                    </div>
                  ))}

                  <div className={styles.examPracticeItem__infor__btns}>
                    <a
                      href={item.LinkPractice}
                      style={{ backgroundColor: "#33ABE5", marginRight: 10 }}
                      className={styles.examPracticeItem__infor__btns__button}
                    >
                      Luyện
                    </a>
                    <a
                      href={item.LinkStudy}
                      style={{ backgroundColor: "#999999" }}
                      className={styles.examPracticeItem__infor__btns__button}
                    >
                      Học
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  renderAuditions() {}

  renderShortExam() {
    return (
      <div className={styles.examShortExam}>
        <div className={styles.examShortExam__calendar}>
          <span className={styles.examShortExam__calendar__year}>14</span>
          <span className={styles.examShortExam__calendar__month}>06</span>
          <span className={styles.examShortExam__calendar__date}>04</span>
        </div>
        <div className={styles.examShortExam__content}>
          <span className={styles.examShortExam__content__infor}>
            <FontAwesomeIcon icon={faPen} style={{ marginRight: 20 }} />
            51 câu
          </span>
          <span className={styles.examShortExam__content__inforTime}>
            {" "}
            <FontAwesomeIcon icon={faClock} style={{ marginRight: 20 }} />
            39 phút
          </span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container__header}>
          <div
            className={styles.container__header__item}
            style={{ backgroundColor: "#32A9E3" }}
          >
            ĐỀ THI RÚT GỌN
          </div>
          <div
            className={styles.container__header__item}
            style={{ backgroundColor: "#FFBA00" }}
          >
            ĐỀ THI THỬ TOEIC
          </div>
          <div
            className={styles.container__header__item}
            style={{ backgroundColor: "#87C52E" }}
          >
            ĐỀ LUYỆN TẬP
          </div>
        </div>

       
        <div style={{ width: "100%", marginTop: 50 }}>
          {/* {this.renderExamPractice()} */}
          {this.renderExamPractice()}
        </div>
      </div>
    );
  }
}
