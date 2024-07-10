import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import LearningList from "./containers/Learning/LearningList";
import Login from "./containers/Auth/Login";
import ForgotPass from "./containers/Auth/ForgotPass";
import CreateNewPass from "./containers/Auth/CreateNewPass";
import AddLearning from "./containers/Learning/AddLearning";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LearningList />,
  },
  {
    path: "/learningList",
    element: <LearningList />,
  },
  {
    path: "/learningList/addLearningActivities",
    element: <AddLearning />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/forgotpass",
    element: <ForgotPass />,
  },
  {
    path: "/login/createnewpass",
    element: <CreateNewPass />,
  },
];

export const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
