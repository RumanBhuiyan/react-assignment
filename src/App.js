import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Comments from "./Components/Comment/Comments";
import Products from "./Components/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/comments"
          element={
            <>
              <Header />
              <Comments />{" "}
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
            </>
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
