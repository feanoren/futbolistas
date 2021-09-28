import React from "react";
import { connect } from "react-redux"

const Suplentes = ({suplentes, quitarSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="banca">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={() => quitarSuplente(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapsStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
        
    }


})


export default connect(mapsStateToProps, mapDispatchToProps)(Suplentes)