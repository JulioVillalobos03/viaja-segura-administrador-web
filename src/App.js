import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/home/Home';
import DashboardLayout from './components/common/MainLayout';
import UsersPage from './pages/users/UsersPage';
import UserRegisterPage from './pages/users/UserRegisterPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={
                            <DashboardLayout>
                                <Home />
                            </DashboardLayout>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <DashboardLayout>
                                <UsersPage />
                            </DashboardLayout>
                        }
                    />
                    <Route
                        path="/register-user"
                        element={
                            <DashboardLayout>
                                <UserRegisterPage />
                            </DashboardLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;