import React, { useState } from 'react';
import './Produtos.css';

interface Produto {
  id: number;
  descricao: string;
  preco: number;
  ativo: boolean;
}

const estiloSemProdutos: React.CSSProperties = {
  textAlign: 'center',
  color: 'crimson',
};

function Produtos(): React.JSX.Element {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  function getProdutos(): void {
    const novosProdutos: Produto[] = [
      { id: 1, descricao: 'Computador Lenovo', preco: 1745, ativo: true },
      { id: 2, descricao: 'Computador Apple', preco: 987, ativo: false },
      { id: 3, descricao: 'Computador HP', preco: 1190, ativo: true },
      { id: 4, descricao: 'Computador Samsung', preco: 870, ativo: false },
    ];

    setProdutos(novosProdutos);
  }

  const formatCss = (produto: Produto): React.CSSProperties =>
    produto.ativo === false ? { color: 'crimson' } : {};

  return (
    <div className="divtable">
      <h2>InfoLoja</h2>
      <hr />

      {produtos.length === 0 ? (
        <p style={estiloSemProdutos}>Não existem produtos</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td style={formatCss(produto)}>{produto.id}</td>
                <td style={formatCss(produto)}>{produto.descricao}</td>
                <td style={formatCss(produto)}>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ textAlign: 'right' }}>
        <button className="btn btn-primary" onClick={getProdutos}>
          Obter produtos
        </button>
      </div>
    </div>
  );
}

export default Produtos;
