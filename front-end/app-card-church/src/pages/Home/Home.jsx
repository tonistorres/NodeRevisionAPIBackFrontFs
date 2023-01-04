import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './Home.css';
import Table from "../../components/Table/Table";


function Home() {
    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <NavBar />
            <Table />
        </div>);
}

export default Home;
