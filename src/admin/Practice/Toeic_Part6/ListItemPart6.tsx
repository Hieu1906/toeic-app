import { Table, Input, Button, Space, Select, Popover, Radio } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  PlusCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import React from "react";

import _ from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";

import ModalToeicPart6 from "./ModalToeicPart6";
import { ANSWER_PART3_4_5 } from "../../../00.common/const";
import { toeicPart6Service } from "../../../00.common/02.service/toeicPart6Service";
import { ToeicPart5 } from "../../../00.common/01.model/ToeicPart5";
import { ToeicPart6 } from "../../../00.common/01.model/ToeicPart6";

interface ToeicPart6Props {}

interface ToeicPart6State {
  searchText: string;
  searchedColumn: string;
  allData: ToeicPart6[];
  dataSource: ToeicPart6[];
  visiblePopover: boolean;
  index?: number;
  indexQuestion?: number;
}
const { Option } = Select;
export default class ListToeicPart6 extends BaseComponent<
  ToeicPart6Props,
  ToeicPart6State
> {
  private refModalToeicPart6 = React.createRef<ModalToeicPart6>();
  constructor(props: ToeicPart6Props) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
      allData: [],
      dataSource: [],
      visiblePopover: false,
    };
    this.onMount(async () => {
      await Promise.all([this.loadAllData()]);
    });
  }

  async loadAllData() {
    let allData = await toeicPart6Service.getAll<ToeicPart6>("ToeicPart6");

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
        Title: "Dễ",
        Color: "#007ACC",
      };
    } else if (level == 2) {
      return {
        Title: "Trung bình",
        Color: "#FFDD00",
      };
    } else {
      return {
        Title: "Khó",
        Color: "red",
      };
    }
  }

  checkCorrect(Select: any, answer: string, selectText: string) {
    return (
      <>
        {Select.Value == answer ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 260,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: 30,
                  width: 30,
                  border: "1px solid",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#37F026",
                  fontWeight: 500,
                  marginRight: 5,
                  color: "#37F026",
                }}
              >
                {selectText}
              </div>
              <div style={{ color: "#37F026", maxWidth: 200 }}>
                {Select.Title}{" "}
              </div>
            </div>
            <div>
              <CheckCircleOutlined style={{ fontSize: 25, color: "#37F026" }} />{" "}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: 30,
                width: 30,
                border: "1px solid",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "grey",
                fontWeight: 500,
                marginRight: 5,
              }}
            >
              {selectText}
            </div>
            <div>{Select.Title} </div>
          </div>
        )}
      </>
    );
  }
  renderPopover(Question: any, index?: number) {
    return (
      <Popover
        content={
          <div>
            <Space direction="vertical" style={{ width: 300 }}>
              {this.checkCorrect(
                Question.SelectA,
                Question.Answer as string,
                "A"
              )}

              {this.checkCorrect(
                Question.SelectB,
                Question.Answer as string,
                "B"
              )}

              <div>
                {this.checkCorrect(
                  Question.SelectC,
                  Question.Answer as string,
                  "C"
                )}
              </div>

              {this.checkCorrect(
                Question.SelectD,
                Question.Answer as string,
                "D"
              )}
            </Space>
          </div>
        }
        title={"Câu hỏi "}
        trigger="click"
        visible={
          this.state.visiblePopover &&
          this.state.index == index &&
          (this.state.indexQuestion as number) === Question.indexQuestion
        }
        onVisibleChange={(visible) => {
          // push câu hỏi vào 1 mảng

          this.setState({
            index,
            visiblePopover: visible,
            indexQuestion: Question.indexQuestion,
          });
        }}
      >
        <a style={{ textAlign: "center" }}>
          Ô trống thứ {Question.indexQuestion}
        </a>
      </Popover>
    );
  }
  handleAnswer(answer: string) {
    if (answer == ANSWER_PART3_4_5.A.value) {
      return "Đáp án A";
    } else if (answer == ANSWER_PART3_4_5.B.value) {
      return "Đáp án B";
    } else if (answer == ANSWER_PART3_4_5.C.value) {
      return "Đáp án C";
    } else {
      return "Đáp án D";
    }
  }
  render() {
    const columns = [
      {
        title: "Cấp độ ",
        dataIndex: "Level",
        key: "Level",
        width: "15%",

        render: (Level: any, record) => (
          <a
            onClick={() => {
              this.refModalToeicPart6.current!.openModal(record);
            }}
            style={{ color: this.handelLevelColor(Level).Color }}
          >
            {this.handelLevelColor(Level).Title}
          </a>
        ),
      },
      {
        title: "Câu hỏi",
        dataIndex: "Title",
        key: "Title",
        width: "25%",

        render: (Title, record) => (
          <a
            onClick={() => {
              this.refModalToeicPart6.current!.openModal(record);
            }}
          >
            {Title.slice(0, 150)}...
          </a>
        ),
      },
      {
        title: "Chỗ trống 1",
        dataIndex: "Question1",
        key: "Question1",
        width: "15%",

        render: (Question1: any, record, index) =>
          this.renderPopover(Question1, index),
      },
      {
        title: "Chỗ trống 2",
        dataIndex: "Question2",
        key: "Question2",
        width: "15%",

        render: (Question1: any, index) => this.renderPopover(Question1, index),
      },
      {
        // ...this.getColumnSearchProps("Question"),
        title: "Chỗ trống 3",
        dataIndex: "Question3",
        key: "Question3",
        width: "15%",

        render: (Question1: any, record, index) =>
          this.renderPopover(Question1, index),
      },
      {
        // ...this.getColumnSearchProps("Question"),
        title: "Chỗ trống 4",
        dataIndex: "Question4",
        key: "Question3",
        width: "15%",

        render: (Question4: any, record, index) =>
          this.renderPopover(Question4, index),
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
          <Button
            onClick={() => {
              this.refModalToeicPart6.current!.openModal();
            }}
            type="primary"
            icon={<PlusCircleOutlined />}
          >
            Tạo mới
          </Button>
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
            <Option value={0}>Tất cả</Option>
            <Option value={1}>
              <a style={{ color: "#007ACC" }}>Dễ</a>
            </Option>
            <Option value={2}>
              <a style={{ color: "#FFDD00" }}>Trung bình</a>
            </Option>
            <Option value={3} style={{ color: "red" }}>
              Khó
            </Option>
          </Select>
        </div>

        <Table
          pagination={{ pageSize: 8 }}
          columns={columns as any}
          dataSource={
            this.state.dataSource && this.state.dataSource.length > 0
              ? this.state.dataSource
              : []
          }
        />
        <ModalToeicPart6
          ref={this.refModalToeicPart6}
          onSave={async () => {
            this.loadAllData();
          }}
        />
      </div>
    );
  }
}
