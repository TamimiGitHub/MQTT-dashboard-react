import React, { useEffect, useState } from "react";
import { Card, List, Button } from "antd";

const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (payload.topic) {
      setMessages((messages) => [...messages, payload]);
    }
  }, [payload]);

  const renderListItem = (item) => {
    let color = "white";
    console.log(item);

    if (item.topic.includes("aws")) {
      color = "#ff81003b";
    }
    if (item.topic.includes("gke")) {
      color = "#56ff003b";
    }
    if (item.topic.includes("azure")) {
      color = "#007eff3b";
    }
    return (
      <List.Item>
        <List.Item.Meta style={{ background: color }} title={item.topic} description={item.message} />
      </List.Item>
    );
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <Card title="Dashboard">
      <Button type="danger" style={{ marginLeft: "10px" }} onClick={handleClear}>
        Clear
      </Button>
      <List size="large" bordered dataSource={messages} renderItem={renderListItem} />
    </Card>
  );
};

export default Receiver;
