import Main from './components/Main';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Router from "./Router";
// import { RouterProvider } from "react-router-dom";
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Main />
      {/* <RouterProvider router={Router} /> */}
    </div>
  );
}

export default App;
