import { ErrorBoundary } from 'react-error-boundary';
import AppLogger from './utilities/app-logger';
import Login from './components/login/Login';
const logger = new AppLogger();
logger.init();

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const errorHandler = (error: Error, info: { componentStack: string; }) => {
  logger.info(info.componentStack);
  logger.error(error);
};

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={errorHandler}
      >
        <div className='container'>
          <Login />
        </div>
      </ErrorBoundary>
    </div >
  );
}

export default App;
