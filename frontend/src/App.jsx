import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar";

import DashboardPage from "./pages/DashboardPage";
import UserPage from "./pages/UsersPage";
import TaskPage from "./pages/TasksPage";
import EditTaskPage from "./pages/EditTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

    