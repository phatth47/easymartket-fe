import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
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

export { useQueryClient };
