import { BrowserRouter, Route, Routes } from"react-router-dom"
import Home from "./pages/home/Home"
import NavBar from "./components/navbar/Navbar"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Footer from "./components/footer/Footer"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/tema/listatema/ListaTemas"
import FormTema from "./components/tema/formtema/FormTema"
import DeletarTema from "./components/tema/deletartema/DeletarTema"
import FormPostagem from "./components/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagem/deletarpostagem/DeletarPostagem"
import ListaPostagem from "./components/postagem/listapostagem/ListaPostagem"
import Perfil from "./pages/perfil/Perfil"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil"
function App() {

  return (
    <>
    <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={< Home />} />
                <Route path="/login" element={< Login />} />
                <Route path="/cadastro" element={< Cadastro />} />
                <Route path="/temas" element={<ListaTemas />}/>
                <Route path="/cadastrartema" element={<FormTema />} />
                <Route path="/editartema/:id" element={<FormTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
                <Route path="/postagens" element={<ListaPostagem />} />
                <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
            </Routes>
        </div>
        <Footer /> 


     </BrowserRouter>
    </AuthProvider>


    </>

  )
}

export default App