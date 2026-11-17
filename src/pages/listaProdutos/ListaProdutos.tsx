import './ListaProdutos.css'
import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import type { Produtos } from '../../types/Produto'
import produtoService from '../../services/produtoService'


function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [erro, setErro] = useState(``);
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {
        // Promise.call
        produtoService.listar()
            .then(lista => { setProdutos(lista), console.log(lista) })
            .catch(() => setErro("Não foi possivel carregar os produtos"))
            .finally(() => setCarregando(false))
    }, [])

    return (
        <>
            <main>
                <section className="prod_banner" />
                <section className="container prod_container">
                    <div className="box_h2">
                        <h1>Nossos Bolos</h1>
                        <span>Nos Gâteaux</span>
                        <hr />
                    </div>
                    {carregando && <p>Carregando produtos...</p>}
                    {carregando && !erro && produtos.length === 0 &&
                        <p>Nehum produto encontrado.</p>}
                    <div className="prod_cards">
                        {produtos.map(produto => {
                            return <Card
                            id={produto.id}
                                key={ produto.id}
                                lista={`http://localhost:3000${produto.imagem}`}
                                nome={produto.nome}
                                descricao={produto.descricaoCurta}
                                valor={produto.precoPorKg}
                                quantidadeAvaliacoes={10}
                                nota={9.5}
                            />
                        })}
                    </div>
                </section>
            </main>
        </>

    )
}

export default ListaProdutos