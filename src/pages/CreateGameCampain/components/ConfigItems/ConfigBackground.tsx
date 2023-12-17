import { ColorPicker, Divider, Radio, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const ConfigBackground = () => {
  return (
    <div>
      <ColorPicker />
      <Divider></Divider>
      <Radio.Group className="grid grid-cols-4 gap-3 mt-6">
        <Radio value={"bg-1"}>
          <img
            className="w-[100px] h-[100px]"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </Radio>
        <Radio value={"bg-2"}>
          <img
            className="w-[100px] h-[100px]"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </Radio>
        <Radio value={"bg-3"}>
          <img
            className="w-[100px] h-[100px]"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </Radio>
        <Radio value={"bg-4"}>
          <img
            className="w-[100px] h-[100px]"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </Radio>
        <Radio value={"bg-5"}>
          <img
            className="w-[100px] h-[100px]"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </Radio>
        <Radio value={"bg-6"}>
          <img
            className="w-[100px] h-[100px]"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </Radio>
      </Radio.Group>
      <Divider></Divider>
      <Upload action="/upload.do" listType="picture-card" maxCount={1}>
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
    </div>
  );
};

export default ConfigBackground;
