import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { Container, PriceHighlight, Table } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transactions(){
  const { transactions } = useContext(TransactionsContext)
  return (
    <>
      <Header />
      <Summary />

      <Container>
        <SearchForm />
        <Table>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="44.6%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type} >R$ {transaction.price}</PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  )
}