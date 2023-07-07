import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Card } from "react-bootstrap"; // Import Bootstrap Card component
import "./cards.css";
const Cards = ({ icon, icon2, heading, content, footer }) => {
  return (
    <Card className="shadow">
      <Card.Body>
        <div className="card-icon">{icon && <div>{icon}</div>}</div>
        <div className="card-icon2">{icon2 && <div>{icon2}</div>}</div>
        <div
          style={{
            marginBottom: "0.75rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Title className="card-header-text">{heading}</Card.Title>
        </div>
        <div className="card-content">
          <Card.Text className="card-content-text">{content}</Card.Text>
        </div>
        <div>
          <Card.Text className="card-footer-text">{footer}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
