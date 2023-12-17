import { RadioGroup } from "@mui/material";
import { Button, Form, Input, Modal, Radio } from "antd";

const CreateGameCampainModal = ({
  isOpenModal,
  setOpenModal,
}: {
  isOpenModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCreateGameCampian = () => {};

  return (
    <Modal
      title="Create game campain"
      open={isOpenModal}
      onOk={handleCreateGameCampian}
      onCancel={() => setOpenModal(false)}
      width={600}
    >
      <Form>
        <Form.Item label="Game campain game">
          <Input />
        </Form.Item>
        <Form.Item label="Game template">
          <Radio.Group className="grid grid-cols-3 gap-2">
            <Radio value={"game-1"}>
              <img
                className="w-[100px] h-[100px]"
                src="https://kenh14cdn.com/2020/2/24/photo-1-15825282172301099647419.jpg"
              />
            </Radio>
            <Radio value={"game-2"}>
              <img
                className="w-[100px] h-[100px]"
                src="https://kenh14cdn.com/2020/2/24/photo-1-15825282172301099647419.jpg"
              />
            </Radio>
            <Radio value={"game-3"}>
              <img
                className="w-[100px] h-[100px]"
                src="https://kenh14cdn.com/2020/2/24/photo-1-15825282172301099647419.jpg"
              />
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateGameCampainModal;
