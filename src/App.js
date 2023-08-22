import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import Home from "./components/Home";

function App() {
  const isSignedIn = false;
  const canViewHomePage = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute condition={canViewHomePage}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                condition={isSignedIn}
                noAccess={<Navigate to="/login" />}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
