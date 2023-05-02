import { Route, Routes } from "react-router";
import Layout from "./Pages/Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/react-filmoteka" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;
