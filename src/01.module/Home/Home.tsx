import styles from "./Home.module.scss";
import "antd/dist/antd.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ParPart2 } from "../Practice/Part2/Part2";
import { QuickLinkApp } from "../QuickLink/QuickLink";
import { StoryStudentToeic } from "../StoryStudent/EmployeeOfTheMonth";
import { UpcomingBirthdays } from "../UpcommingStudent/UpcomingBirthday";
import { NewEmployees } from "../NewMember/NewEmployees";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Select, Skeleton, Menu, Dropdown, Button, message } from "antd";

import { orderBy } from "lodash";
import {
  CaretUpOutlined,
  SolutionOutlined,
  CaretDownOutlined,
  EditOutlined,
  BulbOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import React from "react";
import { quickLinkService } from "../../00.common/02.service/quickLinkService";
import { firestore, storage } from "../../firebase.config";
import GrammarCom from "../Grammar/Grammar";
import { UploadFile } from "../../00.common/00.components/UploadFile";
import Words600Com from "../600WordsToeic/WordsToeics600";
import MainPage from "../../admin/MainPage";
import { ParPart1 } from "../Practice/Part1/Part1";
import { ParPart3 } from "../Practice/Part3/Part3";
import Part4 from "../Practice/Part4Nghia/Part4";
import { ModalUpdateUser } from "../MySetting/UpdateInforUser";
import firebase from "firebase";
import { userInforService } from "../../00.common/02.service/userInforService";
import { permissionService } from "../../00.common/02.service/permissionService";
import { MemberInfor } from "../../00.common/01.model/MemberInfor";
import { TopMenu } from "../../00.common/01.model/TopMenu";
import { PermissionUser } from "../../00.common/01.model/PermissionUser";
import { Permission, ROUTER } from "../../00.common/const";

import { CommentComp } from "../../00.common/00.components/Comment/CommentComp";
import { requestAccessService } from "../../00.common/02.service/RequestAccess";
import { RequestAccess } from "../../00.common/01.model/RequestAccess";
import { ExamComp } from "../Exam/Exam";
import { ListExamPart1 } from "../Exam/ExamPart1/ListExamPart1";
import { ExamPart1 } from "../Exam/ExamPart1/ExamPart1";
import { MyWord } from "../MyWords/MyWords";
const { Option } = Select;
interface propsHome {
  inforUser: {
    PhotoUrl: string;
    LoginName: string;
    Email: string;
    PhoneNumber?: string;
    Uid: string;
  };

  signOut: () => void;
}
interface stateHome {
  allTopMenu: TopMenu[];
  logo: string;
  flatArrTopMenu: any[];
  showDrowdown: boolean;
  userPermission: PermissionUser;
  MemberInfor: MemberInfor;
}
export default class Home extends BaseComponent<propsHome, stateHome> {
  public refModalUpdateInfor = React.createRef<ModalUpdateUser>();
  constructor(props: propsHome) {
    super(props);
    this.state = {
      allTopMenu: [],
      logo: "",
      flatArrTopMenu: [],
      showDrowdown: false,
      userPermission: undefined as any,
      MemberInfor: undefined as any,
    };
    this.onMount(async () => {
      await Promise.all([
        this.getTopMenu(),
        this.getImgUrl(),
        this.CheckExistUser(),
      ]);
    });
  }

  //Kiểm tra xem user này đã từng login chưa nếu rồi thì lấy ra không thì tạo mới

  async CheckExistUser() {
    let result = await userInforService.getItemByQuery<MemberInfor>(
      "MemberDirectory",
      "Uid",
      "==",
      this.props.inforUser.Uid
    );
    // nếu tài khoản vừa mới tạo thì lưu thông tin đăng nhập với các thông tin cớ bản vào 2 coloectin là MemberInfor và UserPermission
    if (result && result.length == 0) {
      await userInforService.save("MemberDirectory", "", this.props.inforUser);
      await this.setState({
        MemberInfor: {
          Address: "",
          Alias: "",
          DateOfBirth: undefined as any,
          Email: this.props.inforUser.Email,
          Sex: undefined as any,
          LoginName: this.props.inforUser.LoginName,
          Uid: this.props.inforUser.Uid,
          JobTitle: undefined as any,
          KeyDoc: undefined as any,
          PhoneNumber: this.props.inforUser.PhoneNumber as any,
          PhotoUrl: this.props.inforUser.PhotoUrl,
        },
      });
      permissionService.save("PermissionUser", "", {
        LoginName: this.props.inforUser.LoginName,
        Deleted: false,
        Uid: this.props.inforUser.Uid,
        Permission: Permission.ReadOnly,
      });
    } else {
      await this.setState({
        MemberInfor: result[0],
      });
    }

    await this.getPermission();
  }

  async requestAccess() {
    let checkSendRequest =
      await requestAccessService.getItemByQuery<RequestAccess>(
        "RequestAccess",
        "Uid",
        "==",
        this.state.MemberInfor.Uid
      );
    if (checkSendRequest && checkSendRequest.length > 0) {
      message.info(
        "Bạn đã gửi yêu cầu tới quản trị viên , vui lòng đợi cho tới khi quản trị viên phê duyệt và nhận lại thông báo!",
        10
      );
    } else {
      requestAccessService.save<RequestAccess>("RequestAccess", "", {
        LoginName: this.state.MemberInfor.LoginName,
        Status: "Pending",
        Uid: this.state.MemberInfor.Uid,
        Permission: this.state.userPermission.Permission,
      });
      message.info(
        "Yêu cầu của bạn đã gửi đi, vui lòng đợi cho tới khi quản trị viên phê duyệt và nhận lại thông báo!",
        10
      );
    }
  }
  getMenu() {
    return (
      <Menu style={{ marginTop: 20, width: 230 }}>
        <Menu.Item
          onClick={() => {
            this.refModalUpdateInfor.current!.openItem(
              this.state.MemberInfor as MemberInfor
            );
          }}
          style={{ borderBottom: "grey solid 1px", fontWeight: 400 }}
          key="1"
          icon={
            <SolutionOutlined
              style={{ fontSize: 22, marginRight: 40, color: "#777777" }}
            />
          }
        >
          Cập nhật thông tin
        </Menu.Item>
        <Menu.Item
          style={{ borderBottom: "grey solid 1px", fontWeight: 400 }}
          key="2"
          icon={
            <EditOutlined
              style={{ fontSize: 22, marginRight: 40, color: "#777777" }}
            />
          }
        >
          <Link to={ROUTER.MY_WORDS}> Từ Vựng của tôi</Link>
        </Menu.Item>
        <Menu.Item
          style={{ borderBottom: "grey solid 1px", fontWeight: 400 }}
          key="3"
          icon={
            <BulbOutlined
              style={{ fontSize: 22, marginRight: 40, color: "#777777" }}
            />
          }
        >
          Hướng dẫn cách học
        </Menu.Item>
        <Menu.Item
          onClick={this.props.signOut}
          key="4"
          icon={
            <LogoutOutlined
              style={{ fontSize: 22, marginRight: 40, color: "#777777" }}
            />
          }
        >
          Đăng xuất
        </Menu.Item>
        {this.state &&
          this.state.userPermission !== undefined &&
          this.state.userPermission.Permission == Permission.FullControl && (
            <Menu.Item
              icon={
                <SettingOutlined
                  style={{ fontSize: 22, marginRight: 40, color: "#777777" }}
                />
              }
            >
              <Link to={`/admin`}>Quản trị viên</Link>
            </Menu.Item>
          )}
      </Menu>
    );
  }
  async getPermission() {
    //lấy permission của user
    let userPermissions =
      await permissionService.getItemByQuery<PermissionUser>(
        "PermissionUser",
        "Uid",
        "==",
        this.state.MemberInfor!.Uid
      );
    this.setState({
      userPermission: userPermissions[0],
    });
  }
  async getImgUrl() {
    let [logo] = await Promise.all([
      storage.ref().child("CommonDoc/Logo/logo.png").getDownloadURL(),
    ]);
    this.setState({
      logo,
    });
  }

  renderRouter(arrTopMenu: any[]) {
    let flatArrTopMenu: { Title: string; Code: string }[] = [];

    arrTopMenu.forEach((item) => {
      flatArrTopMenu.push({ Title: item.Title, Code: item.Code });
      if (item.SubItem && item.SubItem.length > 0) {
        // lấy ra code và title của các phần tử trong subItem
        let arrSubitem = item.SubItem.map((item) => {
          return { Title: item.Title, Code: item.Code };
        });
        flatArrTopMenu = flatArrTopMenu.concat(arrSubitem);
      }
    });
    this.setState({
      flatArrTopMenu,
    });
  }
  async getTopMenu() {
    let allTopMenu = orderBy(
      await quickLinkService.getAll<TopMenu>("TopMenu"),
      "OrderBy",
      "asc"
    );
    await this.setState({
      allTopMenu,
    });
  }

  getSubitems(arrSubitems: any[]) {
    let itemsRender: JSX.Element;
    if (arrSubitems && arrSubitems.length > 0) {
      itemsRender = (
        <Menu style={{ backgroundColor: "white", border: "solid 1px #F1F3F4" }}>
          {arrSubitems.map((item) => (
            <MenuItem>
              <Link style={{ color: "#33ABE5" }} to={`/${item.Code}`}>
                {item.Title}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      );
    } else {
      itemsRender = <div style={{ display: "none" }}></div>;
    }
    return itemsRender;
  }
  render() {
    return (
      <div>
        {this.state.allTopMenu && this.state.allTopMenu.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Router>
              {!window.location.href.includes("admin") && (
                <div className={styles.HomePageApp}>
                  <div className={styles.HomePageApp__header}>
                    <div className={styles.HomePageApp__header__left}>
                      <img
                        onClick={() => {
                          window.open("https://feed.hust.edu.vn/");
                        }}
                        className={styles.HomePageApp__header__left__img}
                        src={this.state.logo}
                      />
                      <div></div>
                      <Link
                        className={styles.HomePageApp__header__left__title}
                        style={{ color: "white" }}
                        to={`/`}
                      >
                        TOEIC SINH VIÊN HUST
                      </Link>
                      <div
                        className={styles.HomePageApp__header__left__topMenu}
                      >
                        {this.state.allTopMenu.map((item) => (
                          <>
                            {item.SubItem && item.SubItem.length > 0 ? (
                              <div
                                className={
                                  styles.HomePageApp__header__left__topMenu__itemSub
                                }
                                style={{ zIndex: 1000 }}
                              >
                                <Dropdown
                                  trigger={["hover"]}
                                  overlay={this.getSubitems(item.SubItem)}
                                >
                                  <div> {item.Title}</div>
                                </Dropdown>
                              </div>
                            ) : (
                              <Link
                                to={`/${item.Code}`}
                                className={
                                  styles.HomePageApp__header__left__topMenu__item
                                }
                                style={{ zIndex: 1000 }}
                              >
                                <div> {item.Title}</div>
                              </Link>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                    <div className={styles.HomePageApp__header__right}>
                      <div
                        className={styles.HomePageApp__header__right__divider}
                      />

                      <img
                        src={
                          this.state.MemberInfor &&
                          this.state.MemberInfor!.PhotoUrl
                            ? this.state.MemberInfor!.PhotoUrl
                            : ""
                        }
                        className={styles.HomePageApp__header__right__avatar}
                      ></img>
                      <div
                        style={{
                          marginRight: 10,
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {this.state.MemberInfor &&
                        this.state.MemberInfor.LoginName
                          ? this.state.MemberInfor.LoginName.toUpperCase()
                          : "User".toUpperCase()}
                      </div>
                      <Dropdown trigger={["click"]} overlay={this.getMenu()}>
                        {!this.state.showDrowdown ? (
                          <CaretUpOutlined
                            onClick={() => {
                              this.setState({
                                showDrowdown: !this.state.showDrowdown,
                              });
                            }}
                            style={{ color: "white" }}
                          />
                        ) : (
                          <CaretDownOutlined
                            onClick={() => {
                              this.setState({
                                showDrowdown: !this.state.showDrowdown,
                              });
                            }}
                            style={{ color: "white" }}
                          />
                        )}
                      </Dropdown>
                    </div>
                  </div>
                </div>
              )}
              <div
                style={{
                  marginTop: !window.location.href.includes("admin") ? 77 : 0,
                }}
              >
                <Switch>
                  <Route exact path={ROUTER.ROOT}>
                    <QuickLinkApp />
                    <StoryStudentToeic />
                    <UpcomingBirthdays />
                    <NewEmployees />
                  </Route>
                  <Route path={ROUTER.NGU_PHAP}>
                    <GrammarCom></GrammarCom>
                  </Route>
                  <Route path={ROUTER.HUONG_DAN}>
                    <div>Hướng dẫn</div>
                  </Route>
                  <Route path={ROUTER.MEO_THI}>
                    <div
                      style={{
                        height: 800,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <UploadFile
                        type={"audio"}
                        refDocLib={"hihihi"}
                        result={(value) => {}}
                      />
                    </div>
                  </Route>
                  <Route path={ROUTER.TOEIC_600_TU}>
                    <Words600Com />
                  </Route>
                  <Route path={ROUTER.DE_THI}>
                    <ExamComp />
                  </Route>
                  <Route path={ROUTER.DE_THI}>
                    <div>Mẹo thi</div>
                  </Route>

                  <Route path={ROUTER.QUAN_TRI}>
                    {this.state &&
                    this.state.userPermission !== undefined &&
                    this.state.userPermission.Permission ==
                      Permission.FullControl ? (
                      <MainPage />
                    ) : (
                      <div
                        style={{
                          height: window.innerHeight,
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",

                          padding: "30",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 150,
                            width: "80%",
                            border: "gray solid 1px",
                            backgroundColor: "#E7EAED",
                          }}
                        >
                          <h3>
                            Bạn không có quyền truy cập site này , vui lòng{" "}
                            <a
                              onClick={async () => {
                                await this.requestAccess();
                              }}
                            >
                              {" "}
                              nhấn vào đây{" "}
                            </a>
                            để yêu cầu cấp quyền truy cập
                          </h3>
                        </div>
                      </div>
                    )}
                  </Route>

                  <Route path={ROUTER.PAR_PART1}>
                    <ParPart1 />
                  </Route>
                  <Route path={ROUTER.PAR_PART2}>
                    <ParPart2 />
                  </Route>
                  <Route path={ROUTER.PAR_PART3}>
                    <ParPart3 />
                  </Route>
                  <Route path={ROUTER.PAR_PART4}>
                    <Part4 />
                  </Route>
                  <Route path={ROUTER.PAR_PART5}>
                    <ParPart2 />
                  </Route>
                  <Route path={ROUTER.PAR_PART6}>
                    <ParPart3 />
                  </Route>
                  <Route path={ROUTER.PAR_PART7}>
                    <ParPart1 />
                  </Route>

                  <Route path={ROUTER.lIST_EXAM_PART1}>
                    <ListExamPart1 />
                  </Route>
                  <Route path={ROUTER.EXAM_PART1}>
                    <ExamPart1 />
                  </Route>
                  <Route path={ROUTER.MY_WORDS}>
                    <MyWord />
                  </Route>
                </Switch>
              </div>
            </Router>

            <ModalUpdateUser
              onUpdate={() => {
                this.CheckExistUser();
              }}
              ref={this.refModalUpdateInfor}
            />
          </div>
        ) : (
          <Skeleton avatar paragraph={{ rows: 10 }} />
        )}
      </div>
    );
  }
}
