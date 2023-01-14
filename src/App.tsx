import { useState } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NotFound from "./page/NotFound";
import routes from "./routes";
import Map from "./page/main/components/Map";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          {routing}
          asdfasdf
          <Map />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
