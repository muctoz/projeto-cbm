import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/home';
import Cadastro from "./pages/cadastro/cadastro";
import Experiencia from "./pages/experiencias/experiencias";
import Candidatos from './pages/candidatos/candidatos'
import NotFound from './pages/404';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element ={<Home />} />
          <Route path='/cadastro' element ={<Cadastro />} />
          <Route path='/candidatos' element ={<Candidatos />} />
          <Route path='/experiencia' element ={<Experiencia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
