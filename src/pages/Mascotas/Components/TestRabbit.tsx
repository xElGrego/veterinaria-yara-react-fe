import React, { useEffect, useState } from "react";
import { AMQPWebSocketClient, AMQPChannel } from "@cloudamqp/amqp-client";

const url = "ws://localhost:15670";
const username = "grego977";
const password = "yara19975";

const client = new AMQPWebSocketClient(url, "/", username, password);

interface Notification {
  message: string;
}

export const TestRabbit: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [channel, setChannel] = useState<AMQPChannel>();
  const [recvBuffer, setRecvBuffer] = useState("");

  // Conexión a RabbitMQ
  useEffect(() => {
    rabbitmxd();
  }, []);

  const rabbitmxd = async () => {
    try {
      if (channel?.connection.closed === false) {
        console.log("Already connected");
        return;
      }
      console.log("Connecting...");
      const conn = await client.connect();
      const ch = await conn.channel();
      const q = await ch.queue("");
      await q.bind("amq.fanout");
      await q.subscribe({ noAck: false }, (msg) => {
        console.log("Received message");
        setRecvBuffer((prev) => prev + msg.bodyToString() + "\n");
        msg.ack();
      });
      setChannel(ch);
      console.log("Connected!");
    } catch (err) {
      console.error("connect Error", err, "reconnecting in 1s");
      setChannel(undefined);
    }

    console.log("Calling connect");
    /* rabbitmxd(); */
  };

  return (
    <div>
      <h1>Notificaciones</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};
