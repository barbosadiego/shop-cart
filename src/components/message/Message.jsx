import './Message.scss';

const Message = ({ msg }) => {
  return <div className={`message ${msg ? 'active' : ''}`}>{msg}</div>;
};

export default Message;
