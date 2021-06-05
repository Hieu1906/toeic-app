import {
  Table,
  Input,
  Button,
  Space,
  Spin,
  Select,
  Popover,
  Radio,
  Modal,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  PlusCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import ReactAudioPlayer from "react-audio-player";

import _ from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";

import { ANSWER_PART3_4_5, Permission, STATUS } from "../../../00.common/const";
import { toeicPart3Service } from "../../../00.common/02.service/toeicPart3Service";
import { ToeicPart3 } from "../../../00.common/01.model/ToeicPart3";
import { requestAccessService } from "../../../00.common/02.service/RequestAccess";
import { RequestAccess } from "../../../00.common/01.model/RequestAccess";

interface RequestAccessProps {}

interface RequestAccessState {
  searchText: string;
  searchedColumn: string;
  allData: RequestAccess[];
  dataSource: RequestAccess[];
  visiblePopover: boolean;
  index?: number;
  selectQuestion?: string;
  isModalVisible: boolean;
  Status?: string;
  SelectedPermission?: string;
  item?: RequestAccess;
  loading: boolean;
}
const { Option } = Select;
export default class RequestAccessCom extends BaseComponent<
  RequestAccessProps,
  RequestAccessState
> {
  constructor(props: RequestAccessProps) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
      allData: [],
      dataSource: [],
      visiblePopover: false,
      isModalVisible: false,
      loading: false,
    };
    this.onMount(async () => {
      await Promise.all([this.loadAllData()]);
    });
  }

  getColorStatus(status: string) {
    if (status == STATUS.Pending.TitleE) {
      return STATUS.Pending;
    } else if (status == STATUS.APPROVE.TitleE) {
      return STATUS.APPROVE;
    } else {
      return STATUS.REJECT;
    }
  }

  async loadAllData() {
    let allData = await requestAccessService.getAll<RequestAccess>(
      "RequestAccess"
    );

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
      <SearchOutlined style={{ color: filtered ? "#1890ff" : "none" }} />
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

  async saveItem() {
    this.setState({
      loading: true,
    });
    await requestAccessService.update(
      "RequestAccess",
      this.state.item?.KeyDoc as any,
      {
        ...this.state.item,
        Permission: this.state.SelectedPermission
          ? this.state.SelectedPermission
          : this.state.item?.Permission,
        Status: this.state.Status,
      }
    );
    this.loadAllData();
    this.setState({
      loading: false,
      isModalVisible: false,
    });
  }

  render() {
    const columns = [
      {
        title: "Số hiệu",
        dataIndex: "Uid",
        key: "Uid",
        width: "40%",

        render: (Level: any, record: RequestAccess) => (
          <a
            onClick={() => {
              this.setState({
                isModalVisible: true,
                item: record,
              });
            }}
          >
            {record.Uid}
          </a>
        ),
      },
      {
        title: "Người yêu cầu",
        dataIndex: "LoginName",
        key: "LoginName",
        width: "20%",

        render: (Level: any, record: RequestAccess) => (
          <a onClick={() => {}}>{record.LoginName}</a>
        ),
      },
      {
        title: "Quyền người dùng",
        dataIndex: "Permission",
        key: "Permission",
        width: "20%",

        render: (Level: any, record: RequestAccess) => (
          <a onClick={() => {}}>{record.Permission}</a>
        ),
      },
      {
        title: "Trạng thái",
        dataIndex: "Status",
        key: "Status",
        width: "20%",

        render: (Level: any, record: RequestAccess) => (
          <a
            style={{ color: this.getColorStatus(record.Status)?.Color }}
            onClick={() => {}}
          >
            {this.getColorStatus(record.Status)?.Title}
          </a>
        ),
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
            onClick={() => {}}
            type="primary"
            icon={<PlusCircleOutlined />}
          >
            Tạo mới
          </Button>
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
        <Modal
          title="Xử lý Yêu cầu"
          visible={this.state.isModalVisible}
          onOk={async () => {
            await this.saveItem();
          }}
          onCancel={() => {
            this.setState({
              isModalVisible: false,
            });
          }}
        >
          <Spin spinning={this.state.loading}>
            <Button
              style={{ marginRight: 20 }}
              type={"primary"}
              onClick={() => {
                this.setState({
                  Status: STATUS.REJECT.TitleE,
                });
              }}
              danger
            >
              Từ chối
            </Button>

            <Button
              onClick={() => {
                this.setState({
                  Status: STATUS.APPROVE.TitleE,
                });
              }}
              type={"primary"}
            >
              Phê duyệt
            </Button>
            {this.state.Status == STATUS.APPROVE.TitleE && (
              <div style={{ marginTop: 20 }}>
                <span>
                  Chọn Quyền người dùng:<span style={{ color: "red" }}>*</span>
                </span>
                <Select
                  defaultValue={Permission.ReadOnly}
                  style={{ width: 120 }}
                  onSelect={(value) => {
                    this.setState({
                      SelectedPermission: value,
                    });
                  }}
                >
                  <Option value={Permission.ReadOnly}>
                    {Permission.ReadOnly}
                  </Option>
                  <Option value={Permission.ReadAndWrite}>
                    {Permission.ReadAndWrite}
                  </Option>

                  <Option value={Permission.FullControl}>
                    {Permission.FullControl}
                  </Option>
                </Select>
              </div>
            )}
            {this.state.Status == STATUS.REJECT.TitleE && (
              <div style={{ marginTop: 20 }}>
                <span>Lý do:</span>
                <Input placeholder={"Lý do từ chối"} />
              </div>
            )}
          </Spin>
        </Modal>
      </div>
    );
  }
}
