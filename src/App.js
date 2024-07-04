// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "John"; // Replace with your first name or leave empty

  return (
    <div className="App">
      <Card
        style={{
          width: "18rem",
          margin: "auto",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
          </Card.Text>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && (
          <img src="https://via.placeholder.com/100" alt="Profile" />
        )}
      </div>
    </div>
  );
};

export default App;
