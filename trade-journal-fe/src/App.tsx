import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./routes/login/login.route";
import Dashboard from "./routes/dashboard/dashboard.route";
import Journal from "./routes/journal/journal.route";
import JournalEntries from "./routes/journal-entries/journal-entries.route";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path = "login" element = {<Login />}/>
        <Route path = "/" element = {<Dashboard />}>
          <Route path = "/journal" element = {<Journal />} />
          <Route path = "/entries" element = {<JournalEntries />} />
        </Route>
      </Routes>
    </QueryClientProvider>
   
  );
}

export default App;
