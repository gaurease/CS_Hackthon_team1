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
import React, { Component }  from 'react';

function Header({name, title, color}){
    return(
        <div>
            <Card className="bg-info" style={{height:"6rem"}}>
                <h3 className="text-center ">Welcome!</h3>
            </Card>
        </div>
    );
}

export default Header;