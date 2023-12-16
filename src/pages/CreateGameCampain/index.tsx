import { useState } from "react";
import ConfigGame from "./components/ConfigGame";
import ExportGameCampain from "./components/ExportGameCampain";
import GiftTable from "./components/GiftTable";
import { Button, Steps, message } from "antd";

const CreateGameCampain = () => {
  const steps = [
    {
      title: "Config",
      content: <ConfigGame />,
    },
    {
      title: "Gift",
      content: <GiftTable />,
    },
    {
      title: "Publish",
      content: <ExportGameCampain />,
    },
  ];

  const [current, setCurrent] = useState(0);
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div style={{ minHeight: "100%" }}>
      <span>ConfigGame</span>
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" style={{ backgroundColor: "#1677ff" }} onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            style={{ backgroundColor: "#1677ff" }}
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateGameCampain;
