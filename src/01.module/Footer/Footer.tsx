import { Col, message, Row, Skeleton } from "antd";
import _ from "lodash";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import styles from "./Footer.module.scss";
export class Footer extends BaseComponent<{}, {}> {
  public renderItem() {
    let allMenu: {
      Id: number;
      Url: string;
      Title: string;
    }[] = [
      {
        Id: 1,
        Url: "#",
        Title: "Trang chủ",
      },
      {
        Id: 2,
        Url: "#",
        Title: "Tin tức",
      },

      {
        Id: 3,
        Url: "#",
        Title: "Luyện đề",
      },
      {
        Id: 4,
        Url: "#",
        Title: "Luyện thi",
      },
      {
        Id: 5,
        Url: "#",
        Title: "Ngữ pháp",
      },

      {
        Id: 6,
        Url: "#",
        Title: "Từ vựng",
      },
      {
        Id: 7,
        Url: "#",
        Title: "Luyện tập",
      },
      {
        Id: 8,
        Url: "#",
        Title: "Hướng dẫn",
      },
      {
        Id: 9,
        Url: "#",
        Title: "Quản trị",
      },
    ];
    return (
      <>
        {allMenu.length > 0 ? (
          <Row style={{ width: `100%` }}>
            <Col span={8}>
              {allMenu.map((item, index) => {
                if (index < 4) {
                  return (
                    <Row
                      style={{ cursor: "pointer" }}
                      className={styles.text}
                      onClick={() => {
                        if (!_.isEmpty(item.Url) || item.Url === "#") {
                          window.open(
                            item.Url + "?menuid=" + item.Id.toString(),
                            "_self",
                            ""
                          );
                        } else {
                          message.info("Hiện tại chưa có link", 3);
                        }
                      }}
                    >
                      {item.Title}
                    </Row>
                  );
                }
              })}
            </Col>
            <Col span={8}>
              {allMenu.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <Row
                      style={{ cursor: "pointer" }}
                      className={styles.text}
                      onClick={() => {
                        if (!_.isEmpty(item.Url) || item.Url === "#") {
                          window.open(
                            item.Url + "?menuid=" + item.Id.toString(),
                            "_self",
                            ""
                          );
                        } else {
                          message.info("Hiện tại chưa có link", 3);
                        }
                      }}
                    >
                      {item.Title}
                    </Row>
                  );
                }
              })}
            </Col>
            <Col span={8}>
              {allMenu.map((item, index) => {
                if (index >= 8) {
                  return (
                    <Row
                      style={{ cursor: "pointer" }}
                      className={styles.text}
                      onClick={() => {
                        if (!_.isEmpty(item.Url) || item.Url === "#") {
                          window.open(
                            item.Url + "?menuid=" + item.Id.toString(),
                            "_self",
                            ""
                          );
                        } else {
                          message.info("Hiện tại chưa có link", 3);
                        }
                      }}
                    >
                      {item.Title}
                    </Row>
                  );
                }
              })}
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </>
    );
  }

  render() {
    return (
      <Skeleton loading={false} paragraph={{ rows: 5 }}>
        <div className={styles.footer}>
          <Row className={styles.paddingFooter}>
            <Col span={2}></Col>
            <Col span={10} className={styles.siteMapBlock}>
              <div>
                <p className={styles.textSiteMap}>Site Map</p>
                <div
                  className={styles.divider}
                  style={{
                    backgroundColor: "#25B0F3",
                  }}
                ></div>
              </div>
              <div className={styles.column_}>{this.renderItem()}</div>
            </Col>
            <Col span={6} className={styles.contactBlock}>
              <div>
                <p className={styles.textSiteMap}>Liên hệ</p>
                <div
                  className={styles.divider}
                  style={{
                    backgroundColor: "#25B0F3",
                  }}
                ></div>
              </div>

              <div className={styles.column_}>
                <Col>
                  <Row className={styles.text}>Bộ phận hỗ trợ</Row>
                  <Row className={styles.text}>Ban Truyền thông</Row>
                  <Row style={{ width: `100%` }}>
                    <Col span={1}>
                      <MailOutlined
                        style={{ marginRight: 10, color: "#25B0F3" }}
                      />
                    </Col>
                    <Col span={20}>
                      <span>hieu.nt165210@sis.hust.edu.vn</span>
                    </Col>
                  </Row>
                  <Row style={{ width: `100%` }}>
                    <Col span={1}>
                      <PhoneOutlined
                        style={{ marginRight: 10, color: "#25B0F3" }}
                      />
                    </Col>
                    <Col span={20}>
                      <span className={styles.text2}>0358007171</span>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </Skeleton>
    );
  }
}
