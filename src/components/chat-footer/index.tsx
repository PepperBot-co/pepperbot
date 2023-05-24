import SendArrow from "../icons/send-arrow";

const ChatFooter = () => {
  return (
    <div className="mx-auto flex">
      <input
        type="text"
        placeholder="Type here"
        className="flex-9 input-bordered input max-w-xs"
      />
      <button className="btn-square btn flex-1">
        <SendArrow />
      </button>
    </div>
  );
};

export default ChatFooter;
