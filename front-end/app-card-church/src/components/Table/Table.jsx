// https://getbootstrap.com/docs/4.0/content/tables/
import React from "react";
import dataMemberBackEnd from '../../data/member.json';
import './Table.css';

function Table() {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center mt-4 mb-4">
            <table className='table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl'>
                <tr>
                    <thead className="bg-custo-thead color-custom-thead">
                        <tr>
                            <th scope='col' className="text-center" >Register</th>
                            <th scope='col' className="text-center" >Nome</th>
                            <th scope='col' className="text-center">Ano</th>
                            <th scope='col' className="text-center" >DtNasc</th>
                            <th scope='col' className="text-center" >País</th>
                            <th scope='col' className="text-center" >Estado</th>
                            <th scope='col' className="text-center">Cidade</th>
                            <th scope='col' className="text-center">Bairro</th>
                            <th scope='col' className="text-center">Pai</th>
                            <th scope='col' className="text-center">Mãe</th>
                            <th scope='col' className="text-center">Civil</th>
                        </tr>
                    </thead>
                    {dataMemberBackEnd.length > 0 &&
                        dataMemberBackEnd.map((item, index) => {
                            return (
                                <tbody key={index + 1}>
                                    <tr>
                                        <td className=" border bg-light p-2" >{item.register}</td>
                                        <td className=" border bg-light p-2">{item.name}</td>
                                        <td className=" border bg-light p-2">{item.baptism}</td>
                                        <td className=" border bg-light p-2">{item.birth}</td>
                                        <td className=" border bg-light p-2">{item.country}</td>
                                        <td className=" border bg-light p-2">{item.state}</td>
                                        <td className=" border bg-light p-2">{item.city}</td>
                                        <td className=" border bg-light p-2">{item.district}</td>
                                        <td className=" border bg-light p-2">{item.dad}</td>
                                        <td className=" border bg-light p-2">{item.mother}</td>
                                        <td className=" border bg-light p-2">{item.status}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                </tr>
            </table>
        </div>
    );
}




export default Table;
