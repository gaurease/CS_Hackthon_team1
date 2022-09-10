import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import React, { Component }  from 'react';

const Menus = () => {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/add-customer" action>
                Add customer
            </Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/view-customers" action>
                View customers
            </Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="#!" action>
                About Us
            </Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="#!" action>
                Contact Us
            </Link>
        </ListGroup>
    )
}

export default Menus;