import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircularLoader from "./components/loader/CircularLoader";

const MainPage = lazy(() => import("./pages/main/MainPage"));
const SigninPage = lazy(() => import("./pages/auth/signin/SigninPage"));
const SignupPage = lazy(() => import("./pages/auth/signup/SignupPage"));

const MyRouter = () => {
  return (
    <Suspense fallback={<CircularLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
