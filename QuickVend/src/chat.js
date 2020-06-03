import React from "react";
import "./chat.css";

function chat() {
  return (
    <div>
      <title>Socket.IO chat</title>
      <ul id="messages" />
      <form action>
        <input id="m" autoComplete="off" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default chat;
