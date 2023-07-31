import { Routes, Route } from "react-router-dom";
import Login from "./routes/login/login.route";
import Dashboard from "./routes/dashboard/dashboard.route";
import Journal from "./routes/journal/journal.route";
import JournalEntries from "./routes/journal-entries/journal-entries.route";

function App() {
  return (
    <Routes>
      <Route path = "login" element = {<Login />}/>
      <Route path = "/" element = {<Dashboard />}>
        <Route path = "/journal" element = {<Journal />} />
        <Route path = "/journal-entries" element = {<JournalEntries />} />
      </Route>
    </Routes>
  );
}

export default App;
