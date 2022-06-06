import {Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Vector4 from '../../assets/Vector4.svg'
import './candidatos.css';


function Candidatos() {
  return (
    <div className="candidatos-app">
        <div className="retangulo-container"> 
            <div className="container-candidatos">
                <h2 className="titulo-candidatos">Candidatos</h2>
                <div className="lista-candidatos"> 
                    <Row className="row-candidatos">
                        <Col className="candidatos">
                            <label className="nome-candidatos">Nome</label>
                            <div className="candidatos-btn">
                                    <Button className="btn-ver">
                                        <img src={Vector4} alt="lupa">
                                        </img>
                                        Ver
                                        </Button>{' '}
                                </div> 
                        </Col>
                        <Col className="candidatos-2">
                            <label className="nome-candidatos">Nome</label>
                            <div className="candidatos-btn">
                                    <Button className="btn-ver">
                                        <img src={Vector4} alt="lupa">
                                        </img>
                                        Ver
                                        </Button>{' '}
                                </div> 
                        </Col>
                        <Col className="candidatos">
                            <label className="nome-candidatos">Nome</label>
                            <div className="candidatos-btn">
                                    <Button className="btn-ver">
                                        <img src={Vector4} alt="lupa">
                                        </img>
                                        Ver
                                        </Button>{' '}
                                </div> 
                        </Col>
                        <Col className="candidatos-2">
                            <label className="nome-candidatos">Nome</label>
                            <div className="candidatos-btn">
                                    <Button className="btn-ver">
                                        <img src={Vector4} alt="lupa">
                                        </img>
                                        Ver
                                        </Button>{' '}
                                </div> 
                        </Col>
                    
                    </Row>
                     
                </div>     
                <div className="footer-candidatos">
                    <Link to="/">
                        <Button  className="button-voltar" variant="primary" size="lg">
                            Voltar
                        </Button>{' '}
                    </Link>
                </div> 
            </div>
        </div>
        
    </div>

  )
}

export default Candidatos;
