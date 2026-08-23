import { Suspense } from 'react';
import { MessageComponent } from './components/MessageComponent';
import { simulateServerRequest } from './utils/simulateServerRequest';
import { ErrorBoundary } from 'react-error-boundary';

const myMessagePromise = simulateServerRequest('Fake server request', 2000);

export function App() {
  return (
    <div className="app-wrapper">
      <h1>React Hooks Homework</h1>
      <ErrorBoundary
        fallback={<div className="error-fallback">Something went wrong.</div>}
      >
        <Suspense fallback={<div>Loading dynamic data... Please wait.</div>}>
          <MessageComponent messagePromise={myMessagePromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
