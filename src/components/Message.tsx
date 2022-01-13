import { MessageStyles } from '../utils/styles';
import { MessageType } from '../utils/types';

type Props = {
  message: MessageType;
};

export const Message = ({ message }: Props) => {
  return <MessageStyles>{message.content}</MessageStyles>;
};
