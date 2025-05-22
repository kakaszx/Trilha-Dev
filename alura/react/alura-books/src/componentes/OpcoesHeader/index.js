import { Link } from "react-router-dom";
import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;

  margin-right: 10px;

  font-size: 16px;
`;

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcao className="opcao">
            <p>{texto} </p>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
