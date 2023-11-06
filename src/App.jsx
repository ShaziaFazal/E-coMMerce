import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/Details"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Routes path='/detail' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
