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
import { Select, Skeleton, Menu, Dropdown, Button } from "antd";

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
import { ModalUpdateUser } from "../MySetting/UpdateInforUser";
import firebase from "firebase";
import { userInforService } from "../../00.common/02.service/userInforService";
import { permissionService } from "../../00.common/02.service/permissionService";
import { MemberInfor } from "../../00.common/01.model/MemberInfor";
import { TopMenu } from "../../00.common/01.model/TopMenu";
import { PermissionUser } from "../../00.common/01.model/PermissionUser";
import { Permission } from "../../00.common/const";
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
          DateOfBirth: undefined,
          Email: this.props.inforUser.Email,
          Sex: undefined,
          LoginName: this.props.inforUser.LoginName,
          Uid: this.props.inforUser.Uid,
          JobTitle: undefined,
          KeyDoc: undefined,
          PhoneNumber: this.props.inforUser.PhoneNumber,
          PhotoUrl: this.props.inforUser.PhotoUrl,
        },
      });
      permissionService.save("PermissionUser", "", {
        LoginName: this.props.inforUser.LoginName,
        Deleted: false,
        Uid: this.props.inforUser.Uid,
        Permission: Permission.ReadAndWrite,
      });
    } else {
      await this.setState({
        MemberInfor: result[0],
      });
    }

    await this.getPermission();
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
          Ghi chú của tôi
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
                          <Link
                            to={`/${item.Code}`}
                            className={
                              styles.HomePageApp__header__left__topMenu__item
                            }
                            style={{ zIndex: 1000 }}
                          >
                            <Dropdown
                              trigger={["hover"]}
                              overlay={this.getSubitems(item.SubItem)}
                            >
                              <div> {item.Title}</div>
                            </Dropdown>
                          </Link>
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
                  <Route exact path="/">
                    <QuickLinkApp />
                    <StoryStudentToeic />
                    <UpcomingBirthdays />
                    <NewEmployees />
                  </Route>
                  <Route path="/ngu-phap">
                    <GrammarCom></GrammarCom>
                  </Route>
                  <Route path="/huong-dan">
                    <div>Hướng dẫn</div>
                  </Route>
                  <Route path="/meo-thi">
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
                  <Route path="/600-tu-toeic">
                    <Words600Com />
                  </Route>
                  <Route path="/de-thi">
                    <div>Mẹo thi</div>
                  </Route>
                  <Route path="/theme-detail">
                    <div>Mẹo thi</div>
                  </Route>

                  <Route path="/admin">
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
                            <a> nhấn vào đây </a>
                            để yêu cầu cấp quyền truye cập
                          </h3>
                        </div>
                      </div>
                    )}
                  </Route>

                  <Route path="/part1">
                    <ParPart1 />
                  </Route>
                  <Route path="/part2">
                    <ParPart2 />
                  </Route>
                  <Route path="/part3">
                    <ParPart3 />
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
