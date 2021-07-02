// eslint-disable-next-line
import {
  Modal,
  FormInstance,
  Form,
  Row,
  Col,
  Spin,
  Select,
  Button,
  Input,
} from "antd";

import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import _, { pick } from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";

import { ANSWER_PART3_4_5 } from "../../../00.common/const";
import { storage } from "../../../firebase.config.js";
import { toeicPart5Service } from "../../../00.common/02.service/toeicPart5Service";
import TextArea from "antd/lib/input/TextArea";
import { Ckedtor } from "../../../00.common/00.components/ckeditor/Ckeditor";

interface ModalToeicPart5Props {
  onSave: () => void;
}

interface ModalToeicPart5State {
  visible: boolean;
  item?: any;
  loading: boolean;
}
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const { Option } = Select;
export default class ModalToeicPart5 extends BaseComponent<
  ModalToeicPart5Props,
  ModalToeicPart5State
> {
  private initialState = {
    visible: false,
    loading: false,
    item: undefined,
  };

  private formRef = React.createRef<FormInstance>();
  constructor(props: ModalToeicPart5Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
    };
  }

  async openModal(item?: any) {
    await this.setState({
      visible: true,
    });
    if (item) {
      await this.setState({
        item,
      });
      let formControlValues = pick(item, ["Level", "Answer"]);
      this.formRef.current!.setFieldsValue(formControlValues);
    }
    await this.setState({
      loading: false,
    });
  }
  async delete(item) {
    this.setState({
      loading: true,
    });

    await toeicPart5Service.delete("ToeicPart5", item.KeyDoc);

    await this.setState(this.initialState as any);
    this.props.onSave();
  }
  async saveItem() {
    try {
      //check xem fom đã đủ thông tin cần thiết để lưu chưa
      await this.formRef.current!.validateFields();

      await this.setState({
        loading: true,
      });

      //lấy ra dư liệu từ form
      const value = this.formRef.current!.getFieldsValue();

      let itemSave = {
        Level: value.Level,

        Question: value.Question,
        Answer: value.Answer,
        SelectA: {
          Title: value.SelectA,
          Value: "1000",
        },
        SelectB: {
          Title: value.SelectB,
          Value: "0100",
        },
        SelectC: {
          Title: value.SelectC,
          Value: "0010",
        },
        SelectD: {
          Title: value.SelectD,
          Value: "0001",
        },
      };

      if (this.state.item) {
        await toeicPart5Service.update(
          "ToeicPart5",
          this.state.item.KeyDoc,
          itemSave
        );
      } else {
        await toeicPart5Service.save("ToeicPart5", "", itemSave);
      }

      await this.setState(this.initialState as any);
      this.formRef.current!.resetFields();
      this.props.onSave();
    } catch (error) {
      console.log("lỗi nha" + error);
    }
  }

  confirm(item) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc xóa câu hỏi này không?",
      okText: "Xác nhận",
      cancelText: "Xóa",
      onOk: () => {
        this.delete(item);
      },
    });
  }

  render() {
    let { item } = this.state;
    let footer = [
      <Button
        onClick={async () => {
          await this.setState(this.initialState as any);
        }}
        type={"default"}
      >
        Đóng
      </Button>,
      <Button
        onClick={async () => {
          await this.saveItem();
        }}
        type={"primary"}
      >
        Lưu
      </Button>,
    ];
    if (this.state.item) {
      footer.splice(
        0,
        0,
        <Button
          onClick={() => {
            this.confirm(this.state.item);
          }}
          type="primary"
          danger
        >
          Xóa
        </Button>
      );
    }
    return (
      <Modal
        width={900}
        title={`Thêm mới câu hỏi part 5`}
        visible={this.state.visible}
        closable={true}
        onCancel={() => {
          this.setState({
            visible: false,
          });
        }}
        onOk={async () => {
          this.saveItem();
        }}
        footer={footer}
      >
        {this.state.visible && (
          <Form
            ref={this.formRef}
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => {}}
            onFinishFailed={() => {}}
          >
            <Row>
              <Ckedtor/>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Cấp độ "
                  name="Level"
                  rules={[
                    { required: true, message: "Thiếu thông tin Level!" },
                  ]}
                >
                  <Select style={{ width: 120 }}>
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
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  initialValue={ANSWER_PART3_4_5.A.value}
                  labelCol={{ span: 6 }}
                  label="Đáp án"
                  name="Answer"
                  rules={[
                    { required: true, message: "Thiếu thông tin Answer!" },
                  ]}
                >
                  <Select style={{ width: 120 }}>
                    <Option value={ANSWER_PART3_4_5.A.value}>
                      <a>Đáp án A</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.B.value}>
                      <a>Đáp án B</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.C.value}>
                      <a>Đáp án C</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.D.value}>
                      <a>Đáp án D</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item labelCol={{ span: 24 }} label="Câu 3">
                  <Col span={24} style={{ marginRight: 70 }}>
                    <Form.Item
                      rules={[{ required: true }]}
                      labelCol={{ span: 3 }}
                      label="Câu hỏi"
                      name={"Question"}
                    >
                      <TextArea style={{ marginLeft: 10, width: "100%" }} />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      rules={[{ required: true }]}
                      labelCol={{ span: 6 }}
                      label="Đáp án A"
                      name={"SelectA"}
                    >
                      <Input style={{ marginLeft: 10 }} />
                    </Form.Item>
                    <Form.Item
                      rules={[{ required: true }]}
                      labelCol={{ span: 6 }}
                      label="Đáp án B"
                      name={"SelectB"}
                    >
                      <Input style={{ marginLeft: 10 }} />
                    </Form.Item>
                    <Form.Item
                      rules={[{ required: true }]}
                      labelCol={{ span: 6 }}
                      label="Đáp án C"
                      name={"SelectC"}
                    >
                      <Input style={{ marginLeft: 10 }} />
                    </Form.Item>
                    <Form.Item
                      rules={[{ required: true }]}
                      labelCol={{ span: 6 }}
                      label="Đáp án D"
                      name={"SelectD"}
                    >
                      <Input style={{ marginLeft: 10 }} />
                    </Form.Item>
                  </Col>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}{" "}
      </Modal>
    );
  }
}
