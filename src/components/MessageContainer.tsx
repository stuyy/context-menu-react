import { useEffect, useState } from 'react';
import { ContextMenu } from '../utils/styles';
import { MessageType } from '../utils/types';
import { Message } from './Message';

type Props = {
  messages: MessageType[];
};

export const MessageContainer = ({ messages }: Props) => {
  const [show, setShow] = useState(false);
  const [points, setPoints] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = () => setShow(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div>
      {messages.map((m) => (
        <div
          onContextMenu={(e) => {
            console.log('Context Menu Opened');
            e.preventDefault();
            setShow(true);
            console.log(e.pageX);
            console.log(e.pageY);
            setPoints({ x: e.pageX, y: e.pageY });
          }}
        >
          <Message message={m} />
        </div>
      ))}
      {show && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            <li>Delete Message</li>
            <li>Pin Message</li>
            <li>Edit Message</li>
          </ul>
        </ContextMenu>
      )}
    </div>
  );
};
