import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        <LayoutContext.Provider value={{ data, dispatch }}>
          <Routes />
        </LayoutContext.Provider>
      </Fragment>
    </QueryClientProvider>
  );
}

export default App;
