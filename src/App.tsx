import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<ListaProdutos/>}/>
            </Routes>
            <Footer />
        </>
    )
}