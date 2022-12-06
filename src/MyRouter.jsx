import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircularLoader from "./components/loader/CircularLoader";

const MainPage = lazy(() => import("./pages/main/MainPage"));
const SigninPage = lazy(() => import("./pages/signin/SigninPage"));

const MyRouter = () => {
  return (
    <Suspense fallback={<CircularLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
