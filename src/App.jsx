import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";

function App() {
    return (
        <>
            <Header />
            <main style={{ padding: 24 }}>
                <Routes>
                    <Route path="/" element={<CatalogPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/*<Route path="/dashboard" element={<DashboardPage />} />*/}
                </Routes>
            </main>
        </>
    );
}

export default App;

