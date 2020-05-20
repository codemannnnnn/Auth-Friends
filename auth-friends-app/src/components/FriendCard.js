import React from "react";
import { Card, CardHeader, CardBody, Col, CardText } from "reactstrap";

export default function FriendCard(props) {
  return (
    <Col xs="12" sm="6" md="4" xl="3" className="p-4">
      <Card>
        <CardBody className="bg-primary">
          <CardHeader className="text-center">{props.friend.name}</CardHeader>
          <CardText className="text-center pt-2">
            {props.friend.age} years old
          </CardText>
          <CardText className="text-center">{props.friend.email}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
