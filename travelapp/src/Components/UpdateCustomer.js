import { Form, FormGroup, Input, Fragment } from 'reactstrap';
import { Container, Button } from 'reactstrap';
import { useEffect, useState } from "react";
import base_url from "../api/bootapi.js";
import axios from "axios";
import { toast } from 'react-toastify';
import React, { Component }  from 'react';
import Customer from './Customer.js';
const UpdateCustomer = (props) => {
    useEffect(() => {
        document.title = "Customer"
    }, []);

    const [Customer, setCustomer] = useState(props.curCust);

    //form handler
    const handleForm = (e) => {
        console.log(Customer
        );
        putDataToServer(Customer
        );
        e.preventDefault();
    };

    //creating function to post data on server
    const putDataToServer = (data) => {
        axios.put(`${base_url}/Customers`, data).then(
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
            <h1 className='text-center my-3'>Fill Customer
                Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Customer
                        Id</label>
                    <Input
                        type='text'
                        placeholder='Enter here'
                        value={Customer.id}
                        name='userId'
                        id='userId'
                        onChange={(e) => {
                            setCustomer
                                ({
                                    ...Customer
                                    , id: e.target.value
                                });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">Customer
                        Name</label>
                    <Input type="text" placeholder="Enter title here" id="name" value={Customer.name}
                        onChange={(e) => {
                            setCustomer
                                ({
                                    ...Customer
                                    , name: e.target.value
                                });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="email">Customer
                        Email</label>
                    <Input type="text" placeholder="Enter Email here" id="email" 
                        value={Customer.email}
                        onChange={(e) => {
                            setCustomer
                                ({
                                    ...Customer
                                    , email: e.target.value
                                });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="phone">Customer
                        Phone</label>
                    <Input type="text" placeholder="Enter Contact no here" id="phone" 
                        value={Customer.phone}
                        onChange={(e) => {
                            setCustomer
                                ({
                                    ...Customer
                                    , phone: e.target.value
                                });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="phone">Tour</label>
                    <Input type="text" placeholder="Enter Contact no here" id="tour" 
                        value={Customer.tour}
                        onChange={(e) => {
                            setCustomer
                                ({
                                    ...Customer
                                    , tour: e.target.value
                                });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Update Details
                    </Button>
                </Container>

            </Form>
        </div>
    );
};

export default UpdateCustomer;