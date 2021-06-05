import {
  Modal,
  Spin,
  Tooltip,
  Menu,
  Dropdown,
  Avatar,
  Popover,
  Button,
  Mentions,
} from "antd";

import { EllipsisOutlined } from "@ant-design/icons";

import { FacebookCounter, FacebookSelector } from "@charkour/react-reactions";
import * as _ from "lodash";
import * as React from "react";
import { BaseComponent } from "../BaseComponent";
import styles from "./Comment.module.scss";
import { CommentItem } from "../../01.model/CommentItem";
import { commentService } from "../../02.service/CommentService";
import { userInforService } from "../../02.service/userInforService";
import { MemberInfor } from "../../01.model/MemberInfor";
import moment from "moment";
import firebase from "firebase";
import { firestore } from "../../../firebase.config";
import { facebookIcon } from "../../const";
import { reactionService } from "../../02.service/ReactionService";
import { Reaction } from "../../01.model/Reaction";
import { sendMail } from "../../02.service/sendMailService";

const { confirm } = Modal;

interface ICommentUpdateProps {
  colectionName: string;
  colectionReaction: string;
  width?:number;
}
interface CommentsStates {
  allComments: CommentItem[];
  commentParent: CommentItem[];
  currentUser?: MemberInfor;
  isLoading: boolean;
  loadingComment: boolean;
  input: string;
  isHover: boolean;
  keyHover?: number;
  keyEdit?: string;
  isEdit?: boolean;
  isReply?: boolean;
  keyReply?: string;
  inputReply?: string;
  inputEdit?: string;
  IdParent?: number;
  usersAdmin: any[];
  reaction?: string;
  listUserReaction?: string[];
  ReactionSelected?: Reaction;
  allReaction: Reaction[];
  allMember: MemberInfor[];
  userSelected: MemberInfor[];
}
export class CommentComp extends BaseComponent<
  ICommentUpdateProps,
  CommentsStates
> {
  private divWrapInputRef = React.createRef<HTMLSpanElement>();
  public constructor(props: ICommentUpdateProps) {
    super(props);
    this.state = {
      allComments: [],
      commentParent: [],
      input: "",
      isLoading: false,
      loadingComment: false,
      allReaction: [],
      isHover: false,
      isReply: false,
      usersAdmin: [],
      allMember: [],
      userSelected: [],
    };

    this.onMount(async () => {
      let currentUser = await userInforService.getCurrentUser();
      await this.setState({
        currentUser,
      });
      await Promise.all([
        this.getComment(),
        this.getReaction(),
        this.getAllMember(),
      ]);
    });
  }
  // lấy ra tất cả các user trong app
  async getAllMember() {
    let allMember = await userInforService.getAll<MemberInfor>(
      "MemberDirectory"
    );
    this.setState({
      allMember,
    });
  }

  async onSearchMention(value: string) {
    let userSelected = this.state.allMember.filter((item) => {
      return item.LoginName.toLocaleLowerCase().includes(
        value.toLocaleLowerCase()
      );
    });
    this.setState({
      userSelected,
    });
  }

  //lấy ra thông tin ng dùng đã bày tỏ vào bài viết và trạng thái
  async getReaction() {
    let [checkUserReaction, allReaction] = await Promise.all([
      reactionService.getItemByQuery<Reaction>(
        this.props.colectionReaction,
        "Uid",
        "==",
        this.state.currentUser?.Uid as string
      ),
      reactionService.getAll<Reaction>(this.props.colectionReaction),
    ]);

    if (checkUserReaction && checkUserReaction.length > 0) {
      this.setState({
        reaction: checkUserReaction[0].Reaction,
      });
    }
    if (allReaction && allReaction.length > 0) {
      let listUserReaction = allReaction.map((item) => {
        return item.LoginName;
      });
      await this.setState({
        listUserReaction,
        allReaction,
      });
    }
  }
  // bắt sự kiện khi hover vào 1 bình luận
  protected mouseEnter = (index?: number) => {
    this.setState({ isHover: true, keyHover: index as any });
  };

  // bắt sự kiện khi di chuột khỏi  1 bình luận
  protected mouseLeave = (index?: number) => {
    this.setState({ isHover: false, keyHover: undefined as any });
  };

  //hiển thị popup xác xác nhận việc có xóa comment đi hay không
  private showDeleteConfirm(IdComment: string) {
    confirm({
      title: "Xác nhận xóa bình luận này",
      okText: "Xác nhận",
      okType: "danger",
      cancelText: "Hủy",
      onOk: async () => {
        this.setState({
          loadingComment: true,
        });
        await commentService.delete(this.props.colectionName, IdComment);
        await this.getComment();
        this.setState({
          loadingComment: false,
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  //check quyển chỉnh sửa hoặc xóa
  // CanEidtOrDelete(comment: any) {
  //   // admin trong hệ thống thì có quyền chỉnh sửa xóa comment
  //   // người cmt thì có quyền chỉnh sửa  hoặc xóa cmt của mình
  //   let usersAdminLoginName = this.state.usersAdmin.map((item) => {
  //     return item.Email;
  //   });
  //   let checkAdmin: boolean = false;
  //   checkAdmin = _.includes(usersAdminLoginName, this.state.currUser.LoginName);
  //   if (comment.LoginName === this.state.currUser.LoginName || checkAdmin) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  //check quyển chỉnh sửa hoặc xóa
  // CanReply(commnet: IntranetComment) {
  //   const view = this.checkView(window.location.href);

  //   if (commnet.LoginName === this.state.currUser.LoginName) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  renderListUser(listUser: string[]) {
    return (
      <Menu style={{ maxWidth: 150, backgroundColor: "rgba(0,0,0,.75)" }}>
        {listUser.map((item) => (
          <Menu.Item>
            <a style={{ color: "white" }}>{item}</a>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
  getChidComment(CommentItem: CommentItem) {
    let childComment = this.state.allComments.filter((item) => {
      return item.ParentId == CommentItem.KeyDoc;
    });
    return childComment;
  }

  async postComment(value: string, ParentId?: string) {
    this.setState({
      loadingComment: true,
    });
    let a = firebase.firestore.Timestamp.fromDate(moment().toDate());
    await commentService.save<CommentItem>(this.props.colectionName, "", {
      Content: value,
      JobTitle: this.state.currentUser?.JobTitle as string,
      LoginName: this.state.currentUser?.LoginName as string,
      Uid: this.state.currentUser?.Uid as string,
      Created: firebase.firestore.Timestamp.fromDate(moment().toDate()) as any,
      Email: this.state.currentUser?.Email as string,
      PhotoUrl: this.state.currentUser?.PhotoUrl as any,
      ParentId: ParentId ? ParentId : "",
    });
    await sendMail.sendEmail({
      toUser: "ngotrunghieu19061998@gmail.com",
      fromUser: "hieukayo1906@gmail.com",
      value: "ahihihi",
    });
    await this.getComment();
    this.setState({
      loadingComment: false,
      input: "",
      inputReply: "",
      isReply: false,
    });
  }
  async eitComment(keyDoc: string) {
    this.setState({
      loadingComment: true,
    });
    await commentService.update<CommentItem>(this.props.colectionName, keyDoc, {
      Content: this.state.inputEdit as string,
      JobTitle: this.state.currentUser?.JobTitle as string,
      LoginName: this.state.currentUser?.LoginName as string,
      Uid: this.state.currentUser?.Uid as string,
      Created: firebase.firestore.Timestamp.fromDate(moment().toDate()) as any,
      Email: this.state.currentUser?.Email as string,
      PhotoUrl: this.state.currentUser?.PhotoUrl as string,
    });
    await this.getComment();
    this.setState({
      loadingComment: false,
      inputEdit: "",
      isEdit: false,
    });
  }
  async getComment() {
    let allComments = await commentService.getAll<CommentItem>(
      this.props.colectionName,
      "Created"
    );
    let commentParent = allComments.filter((item) => {
      return !item.ParentId;
    });
    this.setState({
      allComments,
      commentParent,
    });
  }

  public renderComment(comments: CommentItem[]): React.ReactNode {
    return comments.map((comment, index) => (
      <div
        style={{ maxHeight: 500 }}
        className={styles.comments__container__wrapComment__contentComment}
        key={comment.KeyDoc as any}
      >
        <div
          className={
            styles.comments__container__wrapComment__contentComment__inforUser
          }
        >
          <Avatar
            icon="user"
            className={
              styles.comments__container__wrapComment__contentComment__inforUser__avatar
            }
            size={35}
            src={comment.PhotoUrl}
          />
          <div
            className={
              styles.comments__container__wrapComment__contentComment__inforUser__userInfor
            }
          >
            <div
              className={
                styles.comments__container__wrapComment__contentComment__inforUser__userInfor__name
              }
            >
              {comment.LoginName ? comment.LoginName : "User"}
            </div>
            <div
              className={
                styles.comments__container__wrapComment__contentComment__inforUser__userInfor__title
              }
            >
              {comment.JobTitle ? comment.JobTitle : ""}
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            this.mouseEnter(index);
          }}
          onMouseLeave={() => {
            this.mouseLeave(index);
          }}
          key={index}
          className={
            styles.comments__container__wrapComment__contentComment__contentCommentBackground
          }
        >
          {this.state.isEdit && this.state.keyEdit == comment.KeyDoc ? (
            <span
              style={{ flexDirection: "column" }}
              className={styles.comments__container__inputComment__inputText}
            >
              <div style={{ display: "flex" }}>
                <Mentions
                  style={{
                    flex: 1,
                    minHeight: "50px",
                  }}
                  placeholder="Aa"
                  value={this.state.inputEdit as string}
                  autoSize={{ minRows: 1, maxRows: 5 }}
                  onChange={(e) => {
                    this.setState({ inputEdit: e });
                  }}
                  onSearch={(value) => {
                    if (value && value.length > 3) {
                      this.onSearchMention(value);
                    } else {
                      this.setState({
                        userSelected: [],
                      });
                    }
                  }}
                >
                  {this.state.userSelected.length > 0 ? (
                    <>
                      {this.state.userSelected.map((item) => (
                        <Mentions.Option
                          value={item.LoginName}
                          key={item.Uid}
                          className="antd-demo-dynamic-option"
                        >
                          <img
                            style={{
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                            }}
                            src={item.PhotoUrl as string}
                          />
                          <span>{item.LoginName}</span>
                        </Mentions.Option>
                      ))}
                    </>
                  ) : (
                    <Mentions.Option>
                      <Spin spinning={true} />
                    </Mentions.Option>
                  )}
                </Mentions>
                <Button
                  onClick={async () => {
                    if (_.trim(this.state.inputEdit).length > 0) {
                      this.eitComment(comment.KeyDoc as string);
                    }
                  }}
                  shape="round"
                  type="primary"
                  style={{ marginLeft: 5 }}
                >
                  Đăng
                </Button>
              </div>
              <div
                style={{
                  marginTop: "10px",
                }}
              >
                Nhấn{" "}
                <a
                  onClick={() => {
                    this.setState({
                      isEdit: false,
                    });
                  }}
                >
                  hủy
                </a>{" "}
                để bỏ lưu chỉnh sửa
              </div>
            </span>
          ) : (
            <>
              <div
                className={
                  styles.comments__container__wrapComment__contentComment__contentCommentBackground__content
                }
              >
                {comment.Content}
              </div>

              {this.state.isHover && this.state.keyHover == index && (
                <Dropdown
                  overlay={
                    <Menu style={{ width: 120 }}>
                      <Menu.Item
                        onClick={() => {
                          this.setState({
                            isEdit: true,
                            keyEdit: comment.KeyDoc as any,
                            inputEdit: comment.Content as any,
                          });
                        }}
                        style={{ fontSize: 16 }}
                        key="0"
                      >
                        Chỉnh sửa
                      </Menu.Item>
                      <Menu.Item
                        style={{ fontSize: 16 }}
                        key="1"
                        onClick={() => {
                          this.showDeleteConfirm(comment.KeyDoc as string);
                        }}
                      >
                        Xóa
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Tooltip title="Chỉnh sửa hoặc xóa bình luận">
                    <EllipsisOutlined
                      onClick={(e) => e.preventDefault()}
                      className={
                        styles.comments__container__wrapComment__contentComment__contentCommentBackground__Icon
                      }
                    />
                  </Tooltip>
                </Dropdown>
              )}
            </>
          )}
        </div>

        {this.state.isReply && this.state.keyReply === comment.KeyDoc ? (
          <>
            {" "}
            <div
              style={{
                paddingLeft: "50px",
                marginTop: "15px",
              }}
              className={styles.comments__container__inputComment}
            >
              <Avatar
                icon="user"
                className={
                  styles.comments__container__wrapComment__contentComment__inforUser__avatar
                }
                size={35}
                src={comment.PhotoUrl}
              />
              <span
                className={styles.comments__container__inputComment__inputText}
              >
                <Mentions
                  style={{
                    flex: 1,
                    minHeight: "50px",
                  }}
                  autoFocus={true}
                  value={this.state.inputReply as string}
                  autoSize={{ minRows: 1, maxRows: 5 }}
                  onChange={(e) => {
                    this.setState({ inputReply: e });
                  }}
                  onSearch={(value) => {
                    if (value && value.length > 3) {
                      this.onSearchMention(value);
                    } else {
                      this.setState({
                        userSelected: [],
                      });
                    }
                  }}
                >
                  {this.state.userSelected.length > 0 ? (
                    <>
                      {this.state.userSelected.map((item) => (
                        <Mentions.Option
                          value={item.LoginName}
                          key={item.Uid}
                          className="antd-demo-dynamic-option"
                        >
                          <img
                            style={{
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                            }}
                            src={item.PhotoUrl as string}
                          />
                          <span>{item.LoginName}</span>
                        </Mentions.Option>
                      ))}
                    </>
                  ) : (
                    <Mentions.Option>
                      <Spin spinning={true} />
                    </Mentions.Option>
                  )}
                </Mentions>
                <Button
                  onClick={() => {
                    if (_.trim(this.state.inputReply).length > 0) {
                      this.postComment(
                        this.state.inputReply as string,
                        comment.KeyDoc
                      );
                    }
                  }}
                  shape="round"
                  type="primary"
                  style={{ marginLeft: 5 }}
                >
                  Đăng
                </Button>
              </span>
            </div>
            <div
              style={{
                paddingLeft: "50px",
                marginTop: "10px",
              }}
            >
              Nhấn{" "}
              <a
                onClick={() => {
                  this.setState({
                    isReply: false,
                  });
                }}
              >
                hủy
              </a>{" "}
              để bỏ lưu chỉnh sửa
            </div>
          </>
        ) : (
          <div
            style={{
              display: this.state.isEdit ? "none" : "flex",
              marginLeft: "100px",
              marginTop: "5px",
            }}
          >
            <a
              onClick={() => {
                this.setState({
                  isReply: true,
                  keyReply: comment.KeyDoc as any,
                });
              }}
              className={
                styles.comments__container__wrapComment__contentComment__contentCommentBackground__reply
              }
            >
              Trả lời
            </a>

            <span>
              {/* {comment.Created ? comment.Created.locale("vi").fromNow() : ""} */}
              {moment(comment.Created!.seconds * 1000).fromNow()}
            </span>
          </div>
        )}
        {this.getChidComment(comment).length > 0 && (
          <div style={{ marginLeft: 45 }}>
            {this.renderComment(this.getChidComment(comment))}
          </div>
        )}
      </div>
    ));
  }

  //render comment
  public renderFormComments(): React.ReactNode {
    return (
      <div className={styles.comments__container}>
        <div className={styles.comments__container__commentTitle}>
          Bình luận
        </div>
        <Spin
          tip="Loading..."
          style={{ textAlign: "center" }}
          spinning={this.state.loadingComment}
        >
          <div className={styles.comments__container__inputComment}>
            {/* <img
              className={styles.comments__container__inputComment__avartar}
              src={this.state.avatarUserPost}
            /> */}
            {this.state.currentUser ? (
              <Avatar
                icon="user"
                className={
                  styles.comments__container__wrapComment__contentComment__inforUser__avatar
                }
                size={35}
                src={this.state.currentUser!.PhotoUrl}
              />
            ) : (
              <Avatar
                icon="user"
                className={
                  styles.comments__container__wrapComment__contentComment__inforUser__avatar
                }
                size={35}
              />
            )}

            <span
              ref={this.divWrapInputRef}
              className={styles.comments__container__inputComment__inputText}
            >
              <Mentions
                key="Binh_Luan"
                style={{
                  flex: 1,
                  minHeight: "50px",
                }}
                autoFocus={true}
                placeholder="Thêm @ để nhắc đến ai "
                value={this.state.input}
                autoSize={{ minRows: 1, maxRows: 5 }}
                onChange={(e) => {
                  this.setState({ input: e });
                }}
                onSearch={(value) => {
                  if (value && value.length >= 3) {
                    this.onSearchMention(value);
                  } else {
                    this.setState({
                      userSelected: [],
                    });
                  }
                }}
              >
                {this.state.userSelected.length > 0 ? (
                  <>
                    {this.state.userSelected.map((item) => (
                      <Mentions.Option
                        value={item.LoginName}
                        key={item.Uid}
                        className="antd-demo-dynamic-option"
                      >
                        <img
                          style={{
                            height: 35,
                            width: 35,
                            borderRadius: "50%",
                            marginRight: 10,
                          }}
                          src={item.PhotoUrl as string}
                        />
                        <span>{item.LoginName}</span>
                      </Mentions.Option>
                    ))}
                  </>
                ) : (
                  <Mentions.Option>
                    <Spin spinning={true} />
                  </Mentions.Option>
                )}
              </Mentions>

              <Button
                onClick={() => {
                  if (_.trim(this.state.input).length > 0) {
                    if (this.state.isReply) {
                      // this.postComment(temp, undefined, this.state.IdParent);
                    } else {
                      this.postComment(this.state.input);
                    }
                  }
                }}
                shape="round"
                type="primary"
                style={{ marginLeft: 5 }}
              >
                Đăng
              </Button>
            </span>
          </div>
          {this.state.allComments.length > 0 ? (
            <div className={styles.comments__container__wrapComment}>
              {this.renderComment(this.state.commentParent)}
            </div>
          ) : null}
        </Spin>
      </div>
    );
  }

  getTextReaction(reaction: string) {
    let reactionSelected: {
      Title: string;
      Color: string;
      icon: string;
    } = {
      Title: "Thích",
      Color: "rgba(0, 0, 0, 0.85)",
      icon: "",
    };
    if (reaction == "like") {
      reactionSelected = {
        Title: "Thích",
        Color: "#2D86FF",
        icon: facebookIcon.like,
      };
    } else if (reaction == "love") {
      reactionSelected = {
        Title: "Yêu thích",
        Color: "#EC2952",
        icon: facebookIcon.love,
      };
    } else if (reaction == "haha") {
      reactionSelected = {
        Title: "Haha",
        Color: "##F8B63C",
        icon: facebookIcon.haha,
      };
    } else if (reaction == "wow") {
      reactionSelected = {
        Title: "Wow",
        Color: "#F8B141",
        icon: facebookIcon.wow,
      };
    } else if (reaction == "sad") {
      reactionSelected = {
        Title: "Buồn",
        Color: "#EAB125",
        icon: facebookIcon.sad,
      };
    } else if (reaction == "angry") {
      reactionSelected = {
        Title: "Phẫn nộ",
        Color: "#C9710F",
        icon: facebookIcon.angry,
      };
    }
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            color: reactionSelected.Color,
            marginRight: 5,
            fontWeight: 500,
          }}
        >
          {reactionSelected.Title}
        </div>
        {reactionSelected.icon && (
          <img height={25} width={25} src={reactionSelected.icon} />
        )}
      </div>
    );
  }

  async saveReaction(label: string) {
    //check xem user đã từng reaction chưa nểu rồi cập nhaajt ko thì tạo mới
    let checkUserReaction = await reactionService.getItemByQuery<Reaction>(
      this.props.colectionReaction,
      "Uid",
      "==",
      this.state.currentUser?.Uid as string
    );
    if (checkUserReaction && checkUserReaction.length > 0) {
      await reactionService.update<Reaction>(
        this.props.colectionReaction,
        checkUserReaction[0].KeyDoc as string,
        {
          Uid: this.state.currentUser?.Uid as string,
          LoginName: this.state.currentUser?.LoginName as string,
          Reaction: label as string,
        }
      );
    } else {
      await reactionService.save<Reaction>(this.props.colectionReaction, "", {
        Uid: this.state.currentUser?.Uid as string,
        LoginName: this.state.currentUser?.LoginName as string,
        Reaction: label as string,
      });
    }
  }
  public render() {
    return (
      <div className={styles.comments}>
        <div className={styles.comments__action}>
          <div className={styles.comments__action__item}>
            <Popover
              content={
                <FacebookSelector
                  onSelect={async (label) => {
                    await this.setState({
                      reaction: label,
                    });
                    this.saveReaction(label);
                  }}
                  iconSize={30}
                />
              }
              title="Title"
            >
              {this.getTextReaction(this.state.reaction as string)}
            </Popover>{" "}
          </div>
          <div
            onClick={() => {
              this.divWrapInputRef.current!.scrollIntoView();
            }}
            className={styles.comments__action__item}
          >
            Bình luận {iconComment}
          </div>
          <div className={styles.comments__action__item}>
            Chia sẻ {iconShare}
          </div>
        </div>

        {this.state.listUserReaction && this.state.listUserReaction.length > 0 && (
          <Dropdown
            overlay={this.renderListUser(
              this.state.listUserReaction.length > 10
                ? this.state.listUserReaction.slice(0, 10).concat("...")
                : this.state.listUserReaction
            )}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <FacebookCounter
                counters={this.state.allReaction.map((item) => {
                  return {
                    emoji: item.Reaction, // String name of reaction
                    by: item.Reaction, // String of persons name
                  };
                })}
                alwaysShowOthers
                important={this.state.listUserReaction}
              />
            </a>
          </Dropdown>
        )}
        {this.renderFormComments()}
      </div>
    );
  }
}
const iconLike = (
  <svg
    width="16"
    height="16"
    style={{ marginLeft: 7 }}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.25 7H0.75C0.3125 7 0 7.34375 0 7.75V15.25C0 15.6875 0.3125 16 0.75 16H3.25C3.65625 16 4 15.6875 4 15.25V7.75C4 7.34375 3.65625 7 3.25 7ZM2 14.75C1.5625 14.75 1.25 14.4375 1.25 14C1.25 13.5938 1.5625 13.25 2 13.25C2.40625 13.25 2.75 13.5938 2.75 14C2.75 14.4375 2.40625 14.75 2 14.75ZM12 2.5625C12 0.25 10.5 0 9.75 0C9.09375 0 8.8125 1.25 8.6875 1.8125C8.5 2.5 8.34375 3.1875 7.875 3.65625C6.875 4.6875 6.34375 5.96875 5.09375 7.1875C5.03125 7.28125 5 7.375 5 7.46875V14.1562C5 14.3438 5.15625 14.5 5.34375 14.5312C5.84375 14.5312 6.5 14.8125 7 15.0312C8 15.4688 9.21875 16 10.7188 16H10.8125C12.1562 16 13.75 16 14.375 15.0938C14.6562 14.7188 14.7188 14.25 14.5625 13.6875C15.0938 13.1562 15.3438 12.1562 15.0938 11.3438C15.625 10.625 15.6875 9.59375 15.375 8.875C15.75 8.5 16 7.90625 15.9688 7.34375C15.9688 6.375 15.1562 5.5 14.125 5.5H10.9375C11.1875 4.625 12 3.875 12 2.5625Z"
      fill={"#096DD9"}
    />
  </svg>
);
const iconComment = (
  <svg
    style={{ marginLeft: 7 }}
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
    style={{ marginLeft: 7 }}
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
