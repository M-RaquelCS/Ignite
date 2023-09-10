import { Container, Content, NewTransactionButton } from "./styles";

import logo from "../../assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          
          <NewTransactionModal/>
        </Dialog.Root>
      </Content>
    </Container>
  )
}