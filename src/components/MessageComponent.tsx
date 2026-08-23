import { use } from 'react';

interface MessageComponentProps {
  messagePromise: Promise<string>;
}

export const MessageComponent = ({ messagePromise }: MessageComponentProps) => {
  const data = use(messagePromise);

  return (
    <div className="message-box">
      <h2>Message Box</h2>
      <p>{data}</p>
    </div>
  );
};
