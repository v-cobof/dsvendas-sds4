import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import Pagination from "../Pagination";

const DataTable = () => {

  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  /*
  Chamar apenas quando a página carregar
  o segundo argumento do useEffect serve para que ele
  monitora algo, neste caso, quando o valor de activePage
  for alterada, o useEffect chama a API de novo
  */

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data);
      })
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  }


  // aquele {page} no Pagination é aquele do useState acima
  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive pb-5 pt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map(item => (
              /* esse key é uma necessidade do react. 
               Ao mostrar uma coleção (i.e  tenho 1 <tr>, 
                mas várias linhas aparecem na tela), 
               cada item precisa de um id diferente
               nesse caso está aproveitando o id que vem do 
               próprio banco de dados
              */
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
              </tr>
              // to fixed é para arredondar para duas casas
            ))}


          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;