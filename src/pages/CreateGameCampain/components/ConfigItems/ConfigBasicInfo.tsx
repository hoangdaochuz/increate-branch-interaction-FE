import { Input, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ConfigBasicInfo = () => {
  return (
    <div>
      <div>
        <span>Game's name</span>
        <Input placeholder="Game's name" />
      </div>
      <div>
        <span>Logo</span>
        <Upload action="/upload.do" listType="picture-card" maxCount={1}>
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </div>
      <div>
        <span style={{ display: "block" }}>Size's logo</span>
        <Select
          style={{ width: 120 }}
          options={[
            { value: "small", label: "Small" },
            { value: "medium", label: "Medium" },
            { value: "large", label: "Large" },
          ]}
        />
      </div>
    </div>
  );
};

export default ConfigBasicInfo;
