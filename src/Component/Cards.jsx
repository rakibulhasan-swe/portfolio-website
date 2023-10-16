import React from "react";
import { Card } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Cards = ({ singleBlog }) => {
  const { title, image, desc, date } = singleBlog;
  return (
    <>
      <div className="col-lg-4">
        <Card className="border-0 shadow">
          <Card.Img style={{height: "20rem"}} variant="top" src={image} />
          <Card.Body>
            <Card.Title className="fw-semibold">{title}</Card.Title>
            <Card.Text className="fw-light">{date}</Card.Text>
            <Card.Text className="fw-light">{desc.slice(0, 90)}...</Card.Text>
            <a style={{cursor: "pointer"}} className="text-decoration-none fw-bold">
              Read More <BsArrowRight />
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Cards;
