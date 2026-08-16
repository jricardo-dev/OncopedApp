import { useEffect } from 'react';
import { useAppDispatch } from "../../app/hooks/hooks";
import { PaginaAtual, alterarPagina } from "../pagina_atual/paginaAtualSlice";

/**
 * Hook para sincronizar a página atual no Redux de maneira segura (dentro de useEffect)
 */
export default function Navegacao(idPag: number, nmPag: string) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const pag: PaginaAtual = {
            id: idPag,
            nome: nmPag
        };
        dispatch(alterarPagina(pag));
    }, [idPag, nmPag, dispatch]);
}