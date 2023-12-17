import { Button, Form, Input } from "antd";

const ProfileForm = () => {
  const handleUpdateProfile = (data: never) => {
    console.log(data);
  };

  return (
    <div className="flex-shrink">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ width: 600 }}
        labelAlign="left"
        onFinish={handleUpdateProfile}
      >
        <Form.Item label="Username" name="username" rules={[{ required: true, message: "Username must not be empty" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Gmail"
          name="gmail"
          rules={[{ required: true, type: "email", message: "The input is not valid E-mail!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phonenumber"
          rules={[{ required: true, message: "Phone number must not be empty" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: "#1677ff" }}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
