import { Breadcrumb, Col, Divider, Empty, Row, Skeleton } from "antd";
import * as _ from "lodash";

import * as React from "react";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { CKEditor5 } from "../../00.common/00.components/ckeditor5/CKEditor";
import { CommentComp } from "../../00.common/00.components/Comment/CommentComp";
import { MessageLife } from "../../00.common/01.model/MessageLife";
import { mesageLifeService } from "../../00.common/02.service/messageLifeService";
import { Footer } from "../Footer/Footer";
import styles from "./MessageLifeDetail.module.scss";

interface MessageLifeProps {}
interface MessageLifeState {
  data: MessageLife;
  liked: boolean;

  loading: boolean;
}
export class MessageLifeDetail extends BaseComponent<
  MessageLifeProps,
  MessageLifeState
> {
  public constructor(props: any) {
    super(props);

    this.state = {
      data: {} as any,
      liked: false,

      loading: true,
    };
    this.onMount(async () => {
      const KeyDoc = this.getParameterByName("keyDoc");

      if (KeyDoc) {
        const data = (await mesageLifeService.getItemByDocId<MessageLife>(
          "MessageLife",
          KeyDoc as string
        )) as MessageLife;

        this.setState({
          data: data,
          loading: false,
        });
      }
    });
  }

  public getPageBreadCrumb() {
    let bread = [
      { Link: "/sites/intranet/SitePages/Home.aspx", Title: "Trang chủ" },

      {
        Link: "/sites/intranet/SitePages/MessageLifeDetail.aspx",
        Title: "Chi tiết thông điệp cuộc sống",
      },
    ];
    return bread;
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

  public renderCeoMessageItem(): React.ReactNode {
    return (
      <Skeleton
        loading={this.state.loading}
        avatar
        paragraph={{ rows: 20 }}
        className="loading"
      >
        {!_.isEmpty(this.state.data) ? (
          <div className={styles.ceoMessageDetail}>
            <img
              src={this.state.data.BannerUrl}
              className={styles.backGround}
            />
            <Row className={styles.row}>
              <Col xxl={6} md={3} sm={3} xs={2}></Col>
              <Col xxl={12} md={18} sm={18} xs={20}>
                <div className={styles.container}>
                  <div className={styles.wrapperQuickInfor}>
                    <div className={styles.quickInfor1}>
                      <div className={styles.breadcumbs}>
                        <Breadcrumb separator=">">
                          {this.getPageBreadCrumb()?.map((lstHS) => {
                            return (
                              <Breadcrumb.Item href={lstHS.Link}>
                                <span className={styles.breadcumbs}>
                                  {lstHS.Title}
                                </span>
                              </Breadcrumb.Item>
                            );
                          })}
                        </Breadcrumb>
                      </div>
                      <div className={styles.textCeoMessage}>
                        Thông điệp cuộc sống
                      </div>
                      <div className={styles.titleCeoMessage}>
                        {this.state.data.Title}
                      </div>
                      <div className={styles.dateCeoMessage}>11/7/2021</div>
                    </div>
                    <div className={styles.wrapperQuickInfor2}>
                      <Row className={styles.row}>
                        <Col span={12}>
                          <img
                            src={this.state.data.Author.Avatar}
                            className={styles.borderRadiusIamge}
                          />
                        </Col>
                        <Col span={12}>
                          <div className={styles.inforCeoer}>
                            <div className={styles.nameCeo}>
                              {this.state.data.Author.Name}
                            </div>
                            <div className={styles.jobtitleCeo}>
                              {this.state.data.Author.JobTitle}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    
                    <Row gutter={16} className={styles.margin32}>
                      <Col span={24}>
                        <CKEditor5 value={this.state.data.FullDescription} />
                      </Col>
                      <CommentComp
                        colectionName={"MeassageLifeDetail"}
                        colectionReaction={"MeassageLifeDetail_RC"}
                      />
                    </Row>
                  </div>
                
                </div>
              </Col>
              <Col xxl={6} md={3} sm={3} xs={2} />
            
            </Row>
            <Footer/>
          </div>
        ) : (
          <>
            <Skeleton
              loading={_.isEmpty(this.state.data)}
              paragraph={{ rows: 20 }}
            ></Skeleton>
            <span style={{ width: `100%`, textAlign: "center" }}>
              {" "}
              <Empty description={"Thông điệp này không tồn tại"} />
            </span>
          </>
        )}
      </Skeleton>
    );
  }

  public render(): React.ReactElement<MessageLifeProps> {
    return <>{this.renderCeoMessageItem()}</>;
  }
}
