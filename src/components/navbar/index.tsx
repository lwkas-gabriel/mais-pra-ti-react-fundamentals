import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <NavLink className="text-decoration-none" to="/">Home</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-1">
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/counter">
              Contador Simples
            </NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/background">Alteração de Cor de Fundo</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/todo-list">Lista de Tarefas</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/timer">Temporizador</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/filter-names">Filtro</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/form">Formulário</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/posts-list">Requisição de Dados Simples</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/image-gallery">Galeria</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/pomodoro-timer">Timer</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/tabs">Tabs Navegáveis</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}