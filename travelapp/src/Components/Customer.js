import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import "../css/customer.css"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import React, { Component, useState }  from 'react';
import AddCustomer from "./AddCustomer";
import UpdateCustomer from "./UpdateCustomer";

const Customer=({customer, update})=>{
    const [isUpdate,SetisUpdate]=useState(false)
    const deletecustomer=(id)=>{
        console.log("Deleting Id ",id)
        axios.delete(`${base_url}/Customers/${id}`).then(
            (response)=>{
                toast.success("customer deleted");
                update(id);
            },
            (error)=>{
                toast.error("customer not deleted");
            }
        );
    };
    const updateCustomers=()=>{
        SetisUpdate(true)
    }
    return(
        <tr className="brow" >
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://previews.123rf.com/images/provector/provector1502/provector150200279/37008789-flat-business-man-user-profile-avatar-icon-design-and-long-shadow-vector-illustration-for-website-an.jpg?fj=1'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-5'>
                <p className='fw-bold mb-1'>{customer.name}</p>
                <p className='fw-bold mb-0'>{customer.email}</p>
                <p className='fw-bold mb-0'>{customer.phone}</p>
              </div>
            </div>
          </td>
          <td className="m-5">
            <p className='fw-bold mb-1'>{customer.tour}</p>
          </td>
          <td>
            <MDBBadge color={customer.status? "success":"warning"} pill>
              {customer.status}
            </MDBBadge>
          </td>
          <td>
            <MDBBtn color='primary' rounded size='sm' onClick={updateCustomers}>
              Edit
            </MDBBtn>
            {
                        isUpdate?<UpdateCustomer curCust={customer} isUpdate={isUpdate} SetisUpdate={SetisUpdate}/>:<br/>
            }
          </td>
          <td>
            <MDBBtn color='danger' rounded size='sm' onClick={() => {
                        deletecustomer(customer.id);
                    }}>
              Delete
            </MDBBtn>
          </td>
        </tr>
    )
}

export default Customer;