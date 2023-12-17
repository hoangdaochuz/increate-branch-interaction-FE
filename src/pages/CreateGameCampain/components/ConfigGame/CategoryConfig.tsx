import { Collapse, CollapseProps, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";
import ConfigBasicInfo from "../ConfigItems/ConfigBasicInfo";
import ConfigBackground from "../ConfigItems/ConfigBackground";
const CategoryConfig = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (panelStyle) => [
    {
      key: "1",
      label: "Basic information",
      children: <ConfigBasicInfo />,
      style: panelStyle,
    },
    {
      key: "2",
      label: "Background",
      children: <ConfigBackground />,
      style: panelStyle,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>Hello</p>,
      style: panelStyle,
    },
  ];

  return (
    <div className="flex-1">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
        accordion
      />
    </div>
  );
};

export default CategoryConfig;
