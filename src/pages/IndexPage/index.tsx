import React, { useState } from "react";
import { DesktopOutlined, FileOutlined, PieChartOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Button, Divider, Layout, Menu, Popover, theme } from "antd";
import ConfigGame from "../CreateGameCampain";
import Profile from "../Profile";
import SubPage from "../SubPage";
import { PlusOneOutlined } from "@mui/icons-material";
import { createUseStyles } from "react-jss";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  label: React.ReactNode;
  content?: React.ReactNode;
};
const items: MenuItem[] = [
  {
    key: "logo",
    icon: (
      <img
        src="https://hugs.agency/wp-content/uploads/2022/03/ty-le-tuong-tac-la-gi.jpg"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    label: "",
    content: <></>,
  },
  {
    key: "creategame",
    icon: <PieChartOutlined />,
    label: "Create game",
    content: <ConfigGame />,
  },
  {
    key: "profile",
    icon: <DesktopOutlined />,
    label: "Profile",
    content: <Profile />,
  },
  {
    key: "sub",
    children: [
      {
        key: "sub1",
        label: "Sub 1",
        content: <SubPage />,
      },
    ],
    label: "Sub",
    icon: <FileOutlined />,
  },
];

const itemsFlat = items
  .map((item) => {
    if (item.children && item.children.length) {
      return item.children;
    } else {
      return item;
    }
  })
  .flat();

const itemsMap: { [key: string]: MenuItem } = itemsFlat.reduce((acc, item) => {
  return {
    ...acc,
    [item?.key as string]: item,
  };
}, {});
console.log("🚀 ~ file: index.tsx:52 ~ constitemsMap:{[key:string]:MenuItem}=items.reduce ~ itemsMap:", itemsMap);
const IndexPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPageKey, setSelectedPageKey] = useState("creategame");
  console.log("🚀 ~ file: index.tsx:65 ~ IndexPage ~ selectedPageKey:", selectedPageKey);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const classes = useStyles();

  return (
    <Layout style={{ minHeight: "100vh", position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["creategame"]}
          onSelect={(e) => {
            setSelectedPageKey(e.key);
          }}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            padding: "0 18px",
          }}
        >
          <h2>Hello world</h2>
          <div className="flex gap-3 items-center justify-between">
            <Button type="primary" style={{ backgroundColor: "#1677ff" }} icon={<PlusOutlined />}>
              Add game campain
            </Button>

            <Popover
              trigger="click"
              content={
                <div>
                  <h2 className="px-2 py-3 cursor-pointer hover:bg-slate-300 hover:text-blue-500 rounded-t-[8px]">
                    Profile
                  </h2>
                  <Divider className="m-0" />
                  <h2 className="px-2 py-3 cursor-pointer hover:bg-slate-300 hover:text-blue-500 rounded-b-[8px]">
                    Log out
                  </h2>
                </div>
              }
              placement="bottomLeft"
              overlayClassName={classes.popoverContainer}
            >
              <Avatar
                className="cursor-pointer"
                src={
                  <img
                    src={"https://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/122023/1_20231212092258.jpg"}
                    alt="avatar"
                  />
                }
              />
            </Popover>
          </div>
        </Header>
        <Content style={{ margin: "0 16px", overflowY: "auto" }}>
          {/* TODO: Need to improve */}
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{itemsMap[selectedPageKey]?.label}</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {itemsMap[selectedPageKey]?.content}
        </Content>
        <Footer style={{ textAlign: "center" }}>DATN@20CLC</Footer>
      </Layout>
    </Layout>
  );
};

const useStyles = createUseStyles({
  popoverContainer: {
    "& .ant-popover-inner": {
      padding: 0,
    },
  },
});

export default IndexPage;
