import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircularLoader from "./components/loader/CircularLoader";

const MainPage = lazy(() => import("./pages/MainPage"));

const MyRouter = () => {
  return (
    <Suspense fallback={<CircularLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
