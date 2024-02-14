import Button from "../Button/Button";
import "./ErrorFallback.scss";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <main className="error-fallback">
      <div className="error-fallback__box">
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
};

export default ErrorFallback;
