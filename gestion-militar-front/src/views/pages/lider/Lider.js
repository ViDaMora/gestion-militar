import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { liderAction } from '../../../application/actions/LiderAction'
import Header from "../../components/Header";


const Lider = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const lideres = () => dispatch(liderAction());
        lideres();
    }, [dispatch]);


    const lideres = useSelector((state) => state.lideres.lideres)

    return (
        <div>

            <Header />
            <br />
            <br />
            <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cédula</th>
                        <th scope="col">Nacionalidad</th>
                        <th scope="col">Género</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Autoridad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {lideres.length === 0
                        ? <p>No hay militares</p>
                        : lideres.map((lider) => (
                            <tr>
                                <td>{lider.nombre}</td>
                                <td>{lider.cc}</td>
                                <td>{lider.nacionalidad}</td>
                                <td>{lider.genero}</td>
                                <td>{lider.edad}</td>
                                <td>{lider.autoridad}</td>
                                <td>{lider.activo}</td>
                                <td>
                                    <button className="btn btn-info">Editar</button>
                                    <button className="btn btn-danger">Borrar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Lider;