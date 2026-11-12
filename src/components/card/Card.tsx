import { Link } from 'react-router-dom';

import user from '../../assets/icones/user.svg'
import star from '../../assets/icones/star.svg'


import './Card.css'


type CardProps = {
    lista:  string;
    nome: string;
    descricao: string;
    valor: number;
    quantidadeAvaliacoes: number;
    nota: number;
}

function Card({
    lista,
    nome,
    descricao,
    valor,
    quantidadeAvaliacoes,
    nota,
}: CardProps){

    return(
    <article className="prod_card">
    <figure>
        <img
            src={lista}
            alt="foto do produto"
        />
    </figure>
    <h2>
        <Link to="/detalheProduto">{nome}</Link>
    </h2>
    <p className="card_desc">
        {descricao}
    </p>
    <p className="card_rodape">
        <data value={valor}>R$ {valor}</data>
        <span className="card_av">
            <img src={user} alt="icone de usuarios" />
            <data value={quantidadeAvaliacoes}>{quantidadeAvaliacoes}</data>
            <img src={star} alt="icone de estrela" />
            <data value={nota}>{nota}</data>
        </span>
    </p>
</article>
)
}

export default Card;