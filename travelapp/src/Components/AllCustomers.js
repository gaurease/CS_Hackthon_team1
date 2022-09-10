import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import base_url from "../api/bootapi.js";
import axios from "axios";
import { toast } from "react-toastify";
import React, { Component } from 'react';
import Customer from "./Customer.js";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const AllCustomers = () => {
    useEffect(() => {
        document.title = "Customers"
    }, []);


    const getAllCustomersFromServer = () => {
        axios.get(`${base_url}/Customers`).then(
            (response) => {
                console.log(response.data);
                toast.success("Customers has been loaded", {
                    position: "bottom-center",
                });
                setCustomer
                    (response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    useEffect(() => {
        getAllCustomersFromServer();
    }, [])

    const [Customers, setCustomer] = useState([
        // {title:"Java Course", description:"this is java Course"},
        // {title:"Django Course" ,description:"this is Django Course"},
        // {title:"PHP Course" ,description:"this is PHP Course"},
    ])

    const updateCustomers = (id) => {
        setCustomer(Customers
            .filter((c) => c.id != id));
    }

    return (
        <div>
            <MDBTable align='middle' hover>
                <MDBTableHead>
                    <tr style={{ backgroundColor:"rgb(205, 240, 234)"}}>
                        <th scope='col'>Details</th>
                        <th scope='col'>Tour</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody >
                    {
                        Customers
                            .length > 0
                            ? Customers.map((item) => <Customer key={item.id} customer={item} update={updateCustomers
                            } />)
                            : "No Customers"
                    }
                </MDBTableBody>
            </MDBTable>

        </div>
    )

}

export default AllCustomers;