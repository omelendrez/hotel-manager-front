import { Provider } from 'react-redux';
import store from './store';
import { ErrorBoundary } from 'react-error-boundary';
import { AppLogger } from './utilities/app-logger';
import { Login } from './components/login';
import { NavBar } from './components/NavBar';
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
        <Provider store={store}>
          <NavBar />
          <Login />
        </Provider>
      </ErrorBoundary>
    </div >
  );
}

export default App;
