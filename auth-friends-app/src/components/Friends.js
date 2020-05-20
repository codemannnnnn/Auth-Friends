import React, { useState, useEffect } from "react";
import { Row, Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

import FriendCard from "../components/FriendCard";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [formValues, setFormValues] = useState({
    id: 0,
    name: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: uuid(),
      name: formValues.name,
      age: formValues.age,
      email: formValues.email,
    };

    setFriends([...friends, newFriend]);

    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="formMain">
        <Row className="pt-5 pb-5">
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit} className="form-class-sub">
              <FormGroup>
                <h1>New Friend Details...</h1>
                <Label for="name">Name</Label>
                <Input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  value={formValues.name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  onChange={handleChange}
                  type="text"
                  name="age"
                  id="age"
                  value={formValues.age}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  value={formValues.email}
                  required
                />
              </FormGroup>
              <Button color="secondary">Add New Friend</Button>
            </Form>
          </Col>
        </Row>

        <Row>
          {friends.map((friend, index) => {
            return <FriendCard friend={friend} key={index} />;
          })}
        </Row>
      </div>
    </>
  );
}
