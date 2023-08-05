import { Container, Content, NewTransactionButton } from "./styles";

import logo from "../../assets/logo.svg"

export function Header(){
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </Content>
    </Container>
  )
}