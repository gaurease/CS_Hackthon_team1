import { Form, FormGroup, Input, Fragment } from 'reactstrap';
import { Container, Button } from 'reactstrap';
import { useEffect, useState } from "react";
import base_url from "../api/bootapi.js";
import axios from "axios";
import { toast } from 'react-toastify';
import React, { Component } from 'react';
import Customer from './Customer.js';
import '../css/Addcustomer.css';
const AddCustomer = () => {
    useEffect(() => {
        document.title = "Customer"
    }, []);

    const [Customer, setCustomer] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(Customer
        );
        postDataToServer(Customer
        );
        e.preventDefault();
    };

    //creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/Customers`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Customer added successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error! Something went wrong");
            }
        );
    };
    return (
        <div>
            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3>Enter Customer Details</h3>
                        <div class="card">
                            <form class="form-card" onSubmit={handleForm}>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex"> <label class="form-control-label px-3">ID<span class="text-danger"> *</span></label> <input type='text'
                                        placeholder='Enter id here'
                                        name='userId'
                                        id='userId'
                                        onChange={(e) => {
                                            setCustomer
                                                ({
                                                    ...Customer
                                                    , id: e.target.value
                                                });
                                        }} onblur="validate(1)"/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex">
                                        <label class="form-control-label px-3">Name<span class="text-danger"> *</span></label> <input type="text" placeholder="Enter Name here" id="name"
                                            onChange={(e) => {
                                                setCustomer
                                                    ({
                                                        ...Customer
                                                        , name: e.target.value
                                                    });
                                            }} onblur="validate(3)"/>
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="text" placeholder="Enter Email here" id="email" 
                                        onChange={(e) => {
                                            setCustomer
                                                ({
                                                    ...Customer
                                                    , email: e.target.value
                                                });
                                        }} onblur="validate(3)"/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex"> <label class="form-control-label px-3">Contact No<span class="text-danger"> *</span></label> <input type="text" placeholder="Enter Contact no here" id="phone"
                                        onChange={(e) => {
                                            setCustomer
                                                ({
                                                    ...Customer
                                                    , phone: e.target.value
                                                });
                                        }} onblur="validate(5)"/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Tour<span class="text-danger"> *</span></label> <input type="text" placeholder="Enter Tour name here" id="tour" 
                                        onChange={(e) => {
                                            setCustomer
                                                ({
                                                    ...Customer
                                                    , tour: e.target.value
                                                });
                                        }} onblur="validate(6)"/> </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="form-group col-sm-12"> <button type="submit" class="btn-block btn-primary">Add Customer</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddCustomer;