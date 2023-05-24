import ChatFooter from "../chat-footer";

/* eslint-disable react/no-unescaped-entities */
const Chat: React.FC = () => {
  return (
    <div className="h-[calc(100vh-65px)] border-l border-base-300 bg-base-100 p-5">
      <div
      // className="fixed flex w-full justify-between bg-green-100"
      // style="bottom: 0px;"
      >
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
      </div>

      <div className="fixed bottom-0 mx-auto">
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;
