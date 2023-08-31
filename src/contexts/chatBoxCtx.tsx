import { ReactNode, createContext, useEffect, useState } from "react";

export type ReplyMsgType = {
  id: string;
  sender: string;
  content: string;
};

interface Props {
  replyMsg: ReplyMsgType | null;
  setReplyMsg(msg: ReplyMsgType | null): void;
}

const initialValue: Props = {
  replyMsg: null,
  setReplyMsg: () => null,
};

export const ChatBoxCtx = createContext(initialValue);

export default function ChatBoxStatesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [replyMsg, setReplyMsgState] = useState<ReplyMsgType | null>(null);

  const setReplyMsg = (msg: ReplyMsgType | null) => {
    setReplyMsgState(() => msg);
  };

  return (
    <ChatBoxCtx.Provider
      value={{
        replyMsg,
        setReplyMsg,
      }}
    >
      {children}
    </ChatBoxCtx.Provider>
  );
}
