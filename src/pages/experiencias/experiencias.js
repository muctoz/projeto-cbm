import {Button,Row,Col,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Vector from '../../assets/Vector.svg'
import Vector2 from '../../assets/Vector2.svg'
import Vector3 from '../../assets/Vector3.svg'
import './experiencias.css';

function Experiencias() {
  return (
    <div className="container-cadastro">
        <div className="container-header-2">
            <div className="header">
                <div className="elipse-1-2" variant="primary" size="lg ">
                        <img src={Vector} alt=' '></img>
                    </div>
                <div className="line-1-2" variant="primary" size="lg">
                    </div>
                <div className="elipse-2-2" variant="primary" size="lg">
                        <img src={Vector2} alt=' '></img>
                    </div>
                <div className="line-2-2" variant="primary" size="lg">
                    </div>
                <div className="elipse-3-2" variant="primary" size="lg">
                        <img src={Vector3} alt=''></img>
                    </div>       


            </div>
            <div className="formulario">
                <h1 className="tille-experiencia">Experiencias</h1>
                <div className="header-formacao">
                    <label>Experiencias</label>
                </div>
                <div className="formação">
                    <Form className="">
                        <Row className="row-institucao">
                            <label>Instituição</label>
                            <Col className="col-institucao">
                                <Form.Control className=""/>
                            </Col>

                        </Row>
                    </Form>
                </div>
                <div className="experiencia">
                </div>
                <div className="competencia">

                </div>
                <div className="footer-cadastro">    
                    <Link to="/cadastro">
                        <Button  className="button-voltar-2" variant="primary" size="lg">
                            Voltar
                        </Button>
                    </Link>
                    <Button variant="primary" size="lg" className="button-proximo-2">
                        Proximo
                    </Button>{' '}
                </div>


            </div>    
                
                    
        </div>  

    </div>
  );
}

export default Experiencias;
