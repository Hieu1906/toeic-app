import {
  Col,
  Dropdown,
  Form,
  FormInstance,
  InputNumber,
  Menu,
  message,
  Modal,
  Row,
} from "antd";
import { Table, Input, Button, Space, Select, Popover } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  PlusCircleOutlined,
  SaveOutlined,
  CloseSquareOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
import styles from "../common/custom.module.scss";
import ReactAudioPlayer from "react-audio-player";
import React from "react";

import _ from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { toeicPart1Service } from "../../../00.common/02.service/toeicPart1Service";
import ModalToeicPart1 from "./ModalToeicPart1";
import { ANSWER_PART1 } from "../../../00.common/const";
import { ToeicPart1 } from "../../../00.common/01.model/ToeicPart1";
import { toeicPart1ExamService } from "../../../00.common/02.service/toeicPart1ExamService";
import { ToeicPart1Exam } from "../../../00.common/01.model/ToeicPart1Exam";
import { MemberInfor } from "../../../00.common/01.model/MemberInfor";
import { userInforService } from "../../../00.common/02.service/userInforService";
import firebase from "firebase";
import moment from "moment";


interface ToeicPart1Props {
  type: "ListExam" | "Part1";
}

interface ToeicPart1State {
  searchText: string;
  searchedColumn: string;
  allData: ToeicPart1[];
  dataSource: ToeicPart1[];
  selectedRowKeys: string[];
  createExam: boolean;
  type?: "Practice" | "Exam";
  isModalVisible: boolean;
  currentUser?: MemberInfor;
}
const { Option } = Select;
export default class ListToeicPart1 extends BaseComponent<
  ToeicPart1Props,
  ToeicPart1State
> {
  private formRefModal = React.createRef<FormInstance>();
  private refModalToeicPart1 = React.createRef<ModalToeicPart1>();
  constructor(props: ToeicPart1Props) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
      allData: [],
      dataSource: [],
      selectedRowKeys: [],
      createExam: false,
      isModalVisible: false,
    };
    this.onMount(async () => {
      await Promise.all([this.loadAllData()]);
      let currentUser = await userInforService.getCurrentUser();
      this.setState({
        currentUser,
      });
    });
  }

  async loadAllData() {
    let allData = await toeicPart1Service.getAll<ToeicPart1>("ToeicPart1");

    this.setState({
      allData: allData,
      dataSource: allData,
    });
  }

  getColumnSearchProps = (dataIndex: any, color?: string) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (
      value: string,
      record: { [x: string]: { toString: () => string } }
    ) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
      }
    },
    render: (text: { toString: () => string }) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys: any[], confirm: () => void, dataIndex: any) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters: () => void) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  handelLevelColor(level: number) {
    if (level == 1) {
      return {
        Title: "D????",
        Color: "#007ACC",
      };
    } else if (level == 2) {
      return {
        Title: "Trung bi??nh",
        Color: "#FFDD00",
      };
    } else {
      return {
        Title: "Kh??",
        Color: "red",
      };
    }
  }

  handleAnswer(answer: string) {
    if (answer == ANSWER_PART1.A.value) {
      return "??a??p a??n A";
    } else if (answer == ANSWER_PART1.B.value) {
      return "??a??p a??n B";
    } else if (answer == ANSWER_PART1.C.value) {
      return "??a??p a??n C";
    } else {
      return "??a??p a??n D";
    }
  }

  async saveExam() {
    try {
      //check xem fom ???? ????? th??ng tin c???n thi???t ????? l??u ch??a
      await this.formRefModal.current!.validateFields();

      const value = this.formRefModal.current!.getFieldsValue();
      console.log(value);
      console.log(this.state.selectedRowKeys)
      await toeicPart1ExamService.save<ToeicPart1Exam>("ToeicPart1Exam", "", {
        
        CountItem: 0,
        Created: firebase.firestore.Timestamp.fromDate(
          moment().toDate()
        ) as any,
        Creator: {
          Title: this.state.currentUser?.LoginName as string,
          Id: this.state.currentUser?.Uid as string,
        },
        DoExam: 0,
        LookUpKeyDoc: this.state.selectedRowKeys,
        ...value,
        View: 0,
      } as any);
      message.success("Ta??o m????i tha??nh c??ng")
      this.setState({
        searchText: "",
        searchedColumn: "",
     
        selectedRowKeys: [],
        createExam: false,
        isModalVisible: false,
      })
      this.formRefModal.current!.resetFields();
    } catch (error) {}
  }
  render() {
    const columns = [
      {
        title: "C???p ????? ",
        dataIndex: "Level",
        key: "Level",
        width: "20%",

        render: (Level: any, record: any) => (
          <a
            onClick={() => {
              this.refModalToeicPart1.current?.openModal(record);
            }}
            style={{ color: this.handelLevelColor(Level).Color }}
          >
            {this.handelLevelColor(Level).Title}
          </a>
        ),
      },
      {
        title: "C??u h???i",
        dataIndex: "AudioUrl",
        key: "AudioUrl",
        width: "30%",

        render: (AudioUrl: any) => (
          <ReactAudioPlayer src={AudioUrl} autoPlay={false} controls />
        ),
      },
      {
        title: "A??nh trong c??u ho??i",
        dataIndex: "ImgUrl",
        key: "ImgUrl",
        width: "30%",
        render: (ImgUrl: any) => <img src={ImgUrl} height={173} width={259} />,
      },
      {
        title: "C??u tra?? l????i ??u??ng",
        dataIndex: "Answer",
        key: "Answer",
        width: "20%",

        render: (Answer: any) => <a>{this.handleAnswer(Answer)}</a>,
      },
    ];

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            {this.props.type == "ListExam" ? (
              <div>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        key="0"
                        onClick={() => {
                          this.setState({
                            createExam: true,
                            type: "Practice",
                            isModalVisible: true,
                          });
                        }}
                      >
                        <a>T???o ????? luy???n t???p</a>
                      </Menu.Item>
                      <Menu.Item
                        key="1"
                        onClick={() => {
                          this.setState({
                            createExam: true,
                            type: "Exam",
                            isModalVisible: true,
                          });
                        }}
                      >
                        <a>T???o ????? thi</a>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      style={{ marginRight: 10 }}
                      type="primary"
                      icon={<PlusCircleOutlined />}
                    >
                      T???o m???i 1 b??i ki???m tra
                    </Button>
                  </a>
                </Dropdown>

                {this.state.createExam && (
                  <Button
                    onClick={() => {
                      this.setState({
                        createExam: false,
                      });
                    }}
                    type="primary"
                    danger
                    icon={<CloseSquareOutlined />}
                  >
                    H???y
                  </Button>
                )}
              </div>
            ) : (
              <Button
                onClick={() => {
                  this.refModalToeicPart1.current!.openModal();
                }}
                type="primary"
                icon={<PlusCircleOutlined />}
              >
                T???o m???i
              </Button>
            )}
          </div>
          {this.props.type == "ListExam" &&
            this.state.createExam &&
            this.state.selectedRowKeys.length > 0 && (
              <Button
                onClick={() => {
                  this.saveExam();
                }}
                type="primary"
                icon={<SaveOutlined />}
              >
                L??u b??i thi
              </Button>
            )}
          {this.props.type == "Part1" && (
            <Select
              defaultValue={0}
              style={{ width: 120 }}
              onChange={(value) => {
                let data: any = [];
                if (value !== 0) {
                  data = this.state.allData.filter((item) => {
                    return item.Level == value;
                  });
                } else {
                  data = this.state.allData;
                }
                this.setState({
                  dataSource: data,
                });
              }}
            >
              <Option value={0}>T????t ca??</Option>
              <Option value={1}>
                <a style={{ color: "#007ACC" }}>D????</a>
              </Option>
              <Option value={2}>
                <a style={{ color: "#FFDD00" }}>Trung bi??nh</a>
              </Option>
              <Option value={3} style={{ color: "red" }}>
                Kho??
              </Option>
            </Select>
          )}
        </div>

        <Table
          className={this.state.createExam ? "" : styles.custom}
          rowKey={"KeyDoc"}
          rowSelection={
            this.state.createExam
              ? {
                  selectedRowKeys: this.state.selectedRowKeys,
                  onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
                    this.setState({
                      selectedRowKeys: selectedRowKeys,
                    });
                  },
                }
              : { columnWidth: 20, renderCell: () => "" }
          }
          pagination={{ pageSize: 8 }}
          columns={columns as any}
          dataSource={
            this.state.dataSource && this.state.dataSource.length > 0
              ? this.state.dataSource
              : []
          }
        />
        <Modal
          onCancel={() => {
            this.setState({
              isModalVisible: false,
              createExam: false,
            });
          }}
          closable={true}
          footer={[
            <Button
              type={"primary"}
              onClick={async () => {
                await this.formRefModal.current!.validateFields();
                this.setState({
                  isModalVisible: false,
                });
              }}
            >
              Ch???n c??c c??u h???i tr??n danh s??ch
            </Button>,
          ]}
          title="T???o m???i b??i thi"
          visible={this.state.isModalVisible}
        >
          <Form
            ref={this.formRefModal}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => {}}
            onFinishFailed={() => {}}
          >
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="T??n "
                  name="Title"
                  rules={[
                    { required: true, message: "Thi????u th??ng tin t??n b??i thi!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Th???i gian l??m b??i (gi??y)"
                  name="Time"
                  rules={[
                    {
                      required: true,
                      message: "Thi????u th??ng tin th???i gian l??m b??i!",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        <ModalToeicPart1
          ref={this.refModalToeicPart1}
          onSave={async () => {
            this.loadAllData();
          }}
        />
      </div>
    );
  }
}
