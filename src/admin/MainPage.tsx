import { BaseComponent } from "../00.common/00.components/BaseComponent";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  BookOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import List600WordsToeic from "./600WordToeic/List600WordToeic";
import ListTheme from "./600WordToeic/ListTheme";
import { LIST_COMPONET_ADMIN } from "../00.common/const";
import ListToeicPart1 from "./Practice/Toeic_Part1/ListItemPart1";
import ListToeicPart2 from "./Practice/Toeic_Part2/ListItemPart2";
import ListToeicPart3 from "./Practice/Toeic_Part3/ListItemPart3";
import ListToeicPart4 from "./Practice/Toeic_Part4/ListItemPart4";
import ListToeicPart5 from "./Practice/Toeic_Part5/ListItemPart5";
import ListToeicPart6 from "./Practice/Toeic_Part6/ListItemPart6";
import ListToeicPart7 from "./Practice/Toeic_Part7/ListItemPart7";
import RequestAccessCom from "./Practice/Permission/RequestAccess";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
interface MainPageProps {}
interface MainPageState {
  element: JSX.Element;
}

export default class MainPage extends BaseComponent<
  MainPageProps,
  MainPageState
> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      element: <List600WordsToeic />,
    };
  }

  renderContent(keyContent: string) {
    let element: JSX.Element = <div></div>;
    if (keyContent == LIST_COMPONET_ADMIN.LIST_THEME_6000WORDS) {
      element = <ListTheme />;
    } else if (keyContent == LIST_COMPONET_ADMIN.LIST_600WORDS) {
      element = <List600WordsToeic />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_1) {
      element = <ListToeicPart1 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_2) {
      element = <ListToeicPart2 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_3) {
      element = <ListToeicPart3 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_4) {
      element = <ListToeicPart4 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_5) {
      element = <ListToeicPart5 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_6) {
      element = <ListToeicPart6 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.PART_7) {
      element = <ListToeicPart7 />;
    } else if (keyContent == LIST_COMPONET_ADMIN.REQUESTACCESS) {
      element = <RequestAccessCom />;
    }
    this.setState({
      element,
    });
  }
  render() {
    return (
      <Layout>
        <Header className="header" style={{ backgroundColor: "#33ABE5" }}>
          <div
            style={{
              float: "right",
            }}
          />
          <Menu
            style={{ backgroundColor: "#33ABE5" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              onClick={(e) => {
                this.renderContent(e.key as string);
              }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key={LIST_COMPONET_ADMIN.LIST_600WORDS}
                icon={<BookOutlined />}
                title="600 từ toeic "
              >
                <Menu.Item key={LIST_COMPONET_ADMIN.LIST_600WORDS}>
                  Danh sách
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.LIST_THEME_6000WORDS}>
                  Chủ đề
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key={LIST_COMPONET_ADMIN.PART_1}
                icon={<LaptopOutlined />}
                title="Luyện tập"
              >
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_1}>
                  Toeic Part 1
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_2}>
                  Toeic Part 2
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_3}>
                  Toeic Part 3
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_4}>
                  Toeic Part 4
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_5}>
                  Toeic Part 5
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_6}>
                  Toeic Part 6
                </Menu.Item>
                <Menu.Item key={LIST_COMPONET_ADMIN.PART_7}>
                  Toeic Part 7
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Thiết lập"
              >
                <Menu.Item key={LIST_COMPONET_ADMIN.REQUESTACCESS}>
                  Cấp quyền truy cập
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor: "#fff",
              }}
            >
              {this.state.element}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
