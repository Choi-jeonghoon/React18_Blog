import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircularLoader from "./components/loader/CircularLoader";
import ListBoardPage from "./pages/Board/ListBoardPage";

const MainPage = lazy(() => import("./pages/MainPage"));

const MyRouter = () => {
  return (
    <Suspense fallback={<CircularLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/listBoard" element={<ListBoardPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
