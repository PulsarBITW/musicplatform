import { RouterProvider } from "react-router-dom";
import router from "../router/routerInitial";
import { Provider } from "react-redux";
import store from "../../store/store";

const MainProvider = ({ children }) => {
  return (
    <RouterProvider router={router}>
      <Provider store={store}> </Provider>
    </RouterProvider>
  );
};

export default MainProvider;
