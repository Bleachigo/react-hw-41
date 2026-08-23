import { use } from 'react';

interface MessageComponentProps {
  messagePromise: Promise<string>;
}

export const MessageComponent = ({ messagePromise }: MessageComponentProps) => {
  const data = use(messagePromise);

  return (
    <div className="message-box">
      <h3>Message Box</h3>
      <p>{data}</p>
    </div>
  );
};
