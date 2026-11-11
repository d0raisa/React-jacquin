import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProduto from "./pages/AdmProduto/AdmProduto";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/detalheProduto" element={<DetProduto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admproduto" element={<AdmProduto />} />
                <Route path="*" element={
                    <img className="container-notfoud" src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="Imagem de não encontrado" />} />
            </Routes>
            <Footer />
        </>
    )
}