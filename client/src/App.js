import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { SidebarProvider } from "./components/LeftSidebar/LeftSidebarContext";
import { fetchChat } from "./actions/chat";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
    dispatch(fetchChat());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <SidebarProvider>
          <Navbar />
          <AllRoutes />
        </SidebarProvider>
      </Router>
    </div>
  );
}

export default App;
