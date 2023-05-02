import { Route, Routes } from "react-router";
import Layout from "./Pages/Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import Library from "./Pages/Library/Library";
import("./scss/global.scss");

const App = () => {
  return (
    <Routes>
      <Route path="/react-filmoteka" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  );
};

export default App;
