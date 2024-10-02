import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login/login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Alterado para Login */}
                <Route path="/Cadastro" element={<Cadastro />} /> {/* Alterado o caminho do Home */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
