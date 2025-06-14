import React from "react";
import style from "./Botao.module.scss";

// O tipo das props é definido usando TypeScript: { children: React.ReactNode }
class Botao extends React.Component <{children: React.ReactNode}> {
    // O método render é obrigatorio em componentes de classe
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
