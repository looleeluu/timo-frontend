import React from "react";
import { Container } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import { NewsCard } from "./NewsCard";
import { news } from "./news.js";

export const News = () => {
  return (
    <Container>
      {news.map(({ img, title, content, link }, index) => {
        return (
          <NewsCard
            key={uuid4()}
            img={img}
            title={title}
            content={content}
            link={link}
            newsIndex={index}
            maxIndex={news.length - 1}
          />
        );
      })}
    </Container>
  );
};
