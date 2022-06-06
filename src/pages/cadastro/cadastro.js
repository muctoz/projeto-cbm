import {Button,Row,Col,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Vector from '../../assets/Vector.svg'
import Vector2 from '../../assets/Vector2.svg'
import Vector3 from '../../assets/Vector3.svg'
import './cadastro.css';

function Cadastro() {
  return (
    <div className="container-cadastro">
        <div className="container-header">
            <div className="header">
                <div className="elipse-1" variant="primary" size="lg ">
                        <img src={Vector} alt=' '></img>
                    </div>
                <div className="line-1" variant="primary" size="lg">
                    </div>
                <div className="elipse-2" variant="primary" size="lg">
                        <img src={Vector2} alt=' '></img>
                    </div>
                <div className="line-2" variant="primary" size="lg">
                    </div>
                <div className="elipse-3" variant="primary" size="lg">
                        <img src={Vector3} alt=''></img>
                    </div>       


            </div>
            <div className="formulario">
                <h1 className="title-form">Dados Pessoais</h1>
                <Form>
                    <Row>
                        <Col>
                            Nome
                            <Form.Control className="col-nome"/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                            CPF
                            <Form.Control className='col-cpf'/>
                        </Col>
                        <Col >
                            Data
                            <Form.Control className='col-data'/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            Signo
                            <Form.Control className="col-signo"/>
                        </Col>
                        <Col>
                            Tipo Sanguíneo
                            <Form.Control className="col-tipo-sanguinio"/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            Email
                            <Form.Control className="col-email"/>
                        </Col>
                        <Col>
                            Telefone
                            <Form.Control className="col-tipo-telefone"/>
                        </Col>
                    </Row>
                </Form>
                <div className="footer-cadastro">    
                    <Link to="/">
                        <Button  className="btn-voltar" variant="primary" size="lg">
                            Voltar
                        </Button>
                    </Link>
                    <Link to="/experiencia">
                        <Button variant="primary" size="lg" className="btn-proximo">
                            Proximo
                        </Button>
                    </Link>
                    {' '}
                </div>


            </div>    
                
                    
        </div>  

    </div>
  );
}

export default Cadastro;
