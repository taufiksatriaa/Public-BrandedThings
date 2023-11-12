import router from "../routers";
import { RouterProvider } from "react-router-dom";
// import router from "./routers";
function App() {
  // seeting up the state
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
