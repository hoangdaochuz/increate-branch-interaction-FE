import { PlusOneOutlined } from "@mui/icons-material";
import { Form, Input, InputNumber, Modal, Upload } from "antd";
import { normFile } from "../../../../utils/common";

const AddGiftModal = ({
  isOpenModal,
  setOpenModal,
}: {
  isOpenModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAddGift = () => {};

  return (
    <Modal title="Add gift" open={isOpenModal} onOk={handleAddGift} onCancel={() => setOpenModal(false)} destroyOnClose>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        labelAlign="left"
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOneOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Quantity">
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddGiftModal;
