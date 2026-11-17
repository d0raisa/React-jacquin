export type Produtos = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorKg: number;
    ativo:boolean;
    imagem: string;
    categoriaIds: number[]
}
