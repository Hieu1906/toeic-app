// eslint-disable-next-line

import {
  Modal,
  FormInstance,
  Form,
  Row,
  Col,
  Input,
  Select,
  Button,
  message,
} from "antd";

import React from "react";

import _, { pick } from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { UploadFile } from "../../../00.common/00.components/UploadFile";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ANSWER_PART1 } from "../../../00.common/const";
import { storage } from "../../../firebase.config.js";
import { toeicPart4Service } from "../../../00.common/02.service/toeicPart4Service";
const { TextArea } = Input;
interface ModalToeicPart4Props {
  onSave: () => void;
}

interface ModalToeicPart4State {
  visible: boolean;
  item?: any;
  loading: boolean;
  AudioUrl?: string;
}
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const { Option } = Select;
export default class ModalToeicPart4 extends BaseComponent<
  ModalToeicPart4Props,
  ModalToeicPart4State
> {
  private initialState = {
    visible: false,
    loading: false,
    item: undefined,

    AudioUrl: "",
  };
  private refUploadAudio = React.createRef<UploadFile>();
  private formRef = React.createRef<FormInstance>();
  constructor(props: ModalToeicPart4Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,

      AudioUrl: "",
    };
  }
  async delete(item) {
    this.setState({
      loading: true,
    });

    await toeicPart4Service.delete("ToeicPart4", item.KeyDoc);
    storage.refFromURL(this.state.item.AudioUrl).delete();

    this.setState(this.initialState as any);
    this.props.onSave();
  }
  async openModal(item?: any) {
    await this.setState({
      loading: true,
      visible: true,
    });
    if (item) {
      await this.setState({
        item,
        AudioUrl: item.AudioUrl,
      });

      this.formRef.current!.setFieldsValue({
        Level: item.Level,
        Answer1: item.Question1.Answer,
        Answer2: item.Question2.Answer,
        Answer3: item.Question3.Answer,

        Question1: item.Question1.Question,
        Question2: item.Question2.Question,
        Question3: item.Question3.Question,

        Select1A: item.Question1.SelectA.Title,
        Select1B: item.Question1.SelectB.Title,
        Select1C: item.Question1.SelectC.Title,
        Select1D: item.Question1.SelectD.Title,

        Select2A: item.Question2.SelectA.Title,
        Select2B: item.Question2.SelectB.Title,
        Select2C: item.Question2.SelectC.Title,
        Select2D: item.Question2.SelectD.Title,

        Select3A: item.Question3.SelectA.Title,
        Select3B: item.Question3.SelectB.Title,
        Select3C: item.Question3.SelectC.Title,
        Select3D: item.Question3.SelectD.Title,
      });

      this.refUploadAudio.current?.getSourceFromForm(item.AudioUrl);
    }
    await this.setState({
      loading: false,
    });
  }

  async saveItem() {
    if (!this.state.AudioUrl) {
      message.error("ba??n ch??a ta??i pha??t ??m");
      return;
    }

    try {
      //check xem fom ???? ????? th??ng tin c???n thi???t ????? l??u ch??a
      await this.formRef.current!.validateFields();

      await this.setState({
        loading: true,
      });
      //l???y ra d?? li???u t??? form
      const value = this.formRef.current!.getFieldsValue();

      value.AudioUrl = this.state.AudioUrl;
      let itemSave = {
        AudioUrl: this.state.AudioUrl,
        Level: value.Level,
        Question1: {
          Answer: value.Answer1,
          Question: value.Question1,
          SelectA: {
            Title: value.Select1A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select1B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select1C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select1D,
            Value: "0001",
          },
        },
        Question2: {
          Answer: value.Answer2,
          Question: value.Question2,
          SelectA: {
            Title: value.Select2A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select2B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select2C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select2D,
            Value: "0001",
          },
        },
        Question3: {
          Answer: value.Answer3,
          Question: value.Question3,
          SelectA: {
            Title: value.Select3A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select3B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select3C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select3D,
            Value: "0001",
          },
        },
      };
      if (this.state.item) {
        await toeicPart4Service.update(
          "ToeicPart4",
          this.state.item.KeyDoc,
          itemSave
        );
      } else {
        await toeicPart4Service.save("ToeicPart4", "", itemSave);
      }
      this.setState(this.initialState as any);

      await this.setState(this.initialState as any);
      this.formRef.current!.resetFields();
      this.props.onSave();
    } catch (error) {
      console.log("l???i nha" + error);
    }
  }

  confirm(item) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Ba??n co?? ch????c xo??a c??u ho??i na??y kh??ng?",
      okText: "Xa??c nh????n",
      cancelText: "Xo??a",
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
        ??o??ng
      </Button>,
      <Button
        onClick={async () => {
          await this.saveItem();
        }}
        type={"primary"}
      >
        L??u
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
          Xo??a
        </Button>
      );
    }
    return (
      <Modal
        width={900}
        title={`Th??m m???i c??u ho??i part 4`}
        visible={this.state.visible}
        closable={true}
        onCancel={() => {
          this.setState({
            visible: false,
          });
        }}
        footer={footer}
        onOk={async () => {
          await this.saveItem();
        }}
      >
        <Form
          ref={this.formRef}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
        >
              <Row>
              <Col span={24}>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 3 }}
                  label="?????? ba??i"
                  name={"Description"}
                >
                  <TextArea rows={7} />
                </Form.Item>
              </Col>
            </Row>
          <Row gutter={16}>
        
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 5 }}
                label="C????p ?????? "
                name="Level"
                rules={[{ required: true, message: "Thi????u th??ng tin Level!" }]}
              >
                <Select defaultValue={0} style={{ width: 120 }}>
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
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 5 }}
                label="C??u ho??i"
                rules={[{ message: "Thi????u th??ng tin title!" }]}
              >
                <UploadFile
                  ref={this.refUploadAudio}
                  onLoading={(loading) => {
                    this.setState({
                      loading,
                    });
                  }}
                  type={"audio"}
                  result={async (values) => {
                    await this.setState({
                      AudioUrl: values[0],
                    });
                  }}
                  refDocLib={`Pactice/ToeicPart4/Audio/`}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelCol={{ span: 24 }} label="C??u 1">
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C??u h???i"
                  name={"Question1"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 6 }}
                  label="????p ??n A"
                  name={"Select1A"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="????p ??n B"
                  name={"Select1B"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="????p ??n C"
                  name={"Select1C"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="????p ??n D"
                  name={"Select1D"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C??u tr??? l???i"
                  name={"Answer1"}
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Ch???n ????p ??n ????ng"}
                    style={{ width: "100%", marginLeft: 10 }}
                  >
                    <Option value={ANSWER_PART1.A.value}>
                      <a>??a??p a??n A</a>
                    </Option>
                    <Option value={ANSWER_PART1.B.value}>
                      <a>??a??p a??n B</a>
                    </Option>
                    <Option value={ANSWER_PART1.C.value}>
                      <a>??a??p a??n C</a>
                    </Option>
                    <Option value={ANSWER_PART1.D.value}>
                      <a>??a??p a??n D</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                label="C??u 2"
              >
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C??u h???i"
                  name={"Question2"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>

                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n A"
                  name={"Select2A"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n B"
                  name={"Select2B"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n C"
                  name={"Select2C"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n D"
                  name={"Select2D"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C??u tr??? l???i"
                  name={"Answer2"}
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Ch???n ????p ??n ????ng"}
                    style={{ width: "100%", marginLeft: 10 }}
                  >
                    <Option value={ANSWER_PART1.A.value}>
                      <a>??a??p a??n A</a>
                    </Option>
                    <Option value={ANSWER_PART1.B.value}>
                      <a>??a??p a??n B</a>
                    </Option>
                    <Option value={ANSWER_PART1.C.value}>
                      <a>??a??p a??n C</a>
                    </Option>
                    <Option value={ANSWER_PART1.D.value}>
                      <a>??a??p a??n D</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelCol={{ span: 24 }} label="C??u 3">
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="C??u h???i"
                  name={"Question3"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>

                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n A"
                  name={"Select3A"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n B"
                  name={"Select3B"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n C"
                  name={"Select3C"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="????p ??n D"
                  name={"Select3D"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C??u tr??? l???i"
                  name="Answer3"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Ch???n ????p ??n ????ng"}
                    style={{ width: "100%", marginLeft: 10 }}
                  >
                    <Option value={ANSWER_PART1.A.value}>
                      <a>??a??p a??n A</a>
                    </Option>
                    <Option value={ANSWER_PART1.B.value}>
                      <a>??a??p a??n B</a>
                    </Option>
                    <Option value={ANSWER_PART1.C.value}>
                      <a>??a??p a??n C</a>
                    </Option>
                    <Option value={ANSWER_PART1.D.value}>
                      <a>??a??p a??n D</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Form.Item>
            </Col>
            <Col span={12}>
              <div
                style={{
                  marginTop: 100,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "-webkit-fill-available" }}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FPactice%2FToeicPart4%2FCommon%2F14864.jpg?alt=media&token=dcf5fc1d-9ef9-4686-a373-724fbac7a619"
                  }
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
