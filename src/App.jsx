import { ErrorBoundary } from "react-error-boundary";
import MyRouter from "./MyRouter";
import MyErrorBoundary from "./components/errorBoundary/MyErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<MyErrorBoundary />}>
      <MyRouter />
    </ErrorBoundary>
  );
}

export default App;
