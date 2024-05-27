import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TodayMenu from "./components/TodayMenu";
import EmployeeChoice from "./components/EmployeeChoice";
import AddEmployee from "./components/AddEmployee";
import Archive from "./components/Archive";
import ChangePassword from "./components/ChangePassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="today-menu" element={<TodayMenu />} />
          <Route path="choices" element={<EmployeeChoice />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="archive" element={<Archive />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="logout" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
