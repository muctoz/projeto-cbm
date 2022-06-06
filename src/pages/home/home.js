import logo from '../../assets/Brasao_CBM_SE1.svg'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Style.css';


function Home() {
  return (
    <div className="container-home">
      <div className="app-container">
        <div className="container-logo">
          <img src={logo} className="CBM-logo" alt="logo" />
        </div>
        <div className="container-resto">
            <h2 className="trabalhe-conosco">Trabalhe Conosco</h2>
            <div className="container-button">
              <Link to={'/cadastro'}>
                <Button variant="primary" size="lg" className="btn-cadastre-se">
                    Cadastre-se
                  </Button>
              </Link>
                {' '}
              <Link to={'/candidatos'}>
                  <Button variant="primary" size="lg" className="btn-ver-concorrentes">
                      Ver Concorrentes
                  </Button>
                </Link>  
                {' '}
              
            </div>  
        </div>
          
      </div>
    </div>
  );
}

export default Home;
