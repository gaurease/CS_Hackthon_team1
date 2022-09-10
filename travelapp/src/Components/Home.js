import { Jumbotron, Container, Button } from 'reactstrap';
import { useEffect, useState } from "react";
import React, { Component } from 'react';
import "../css/home.css"
const Home = () => {
    useEffect(() => {
        document.title = "Home || A Simple Application"
    }, []);
    return (
        // <div className="jumbotron" >
        //     <h1>Hello! Welcome Back</h1>
        //     <p>Whether it’s your first international trip or you have travelled abroad multiple times, planning a holiday to a distant land is always a special feeling. Our international holiday packages are well-made and hold a high reputation among customers who have been travelling with us. Here, take a look at our top international holiday packages.</p>
        // </div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 font-weight-bold ">Welcome Back</h1>
                <p className="lead font-weight-normal " >Whether it’s your first international trip or you have travelled abroad multiple times, planning a holiday to a distant land is always a special feeling. Our international holiday packages are well-made and hold a high reputation among customers who have been travelling with us. Here, take a look at our top international holiday packages.</p>
            </div>
        </div>
    );
};

export default Home;