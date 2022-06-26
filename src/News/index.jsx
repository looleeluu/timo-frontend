import React from "react";
import { Container } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import { useLoadData } from "@hooks/useLoadData";
import { ErrorView, Spinner } from "@components";
import { NewsCard } from "./NewsCard";

export const News = () => {
  const [loadingStatus, news, reload] = useLoadData("/articles/");

  return (
    <Container>
      {loadingStatus === "rejected" && <ErrorView reload={reload} />}
      {loadingStatus === "pending" && (
        <Spinner animation="grow" variant="light" />
      )}
      {loadingStatus === "resolved" &&
        news.map(({ image, title, body, link }, index) => {
          return (
            <NewsCard
              key={uuid4()}
              image={image}
              title={title}
              body={body}
              link={link}
              newsIndex={index}
              maxIndex={news.length - 1}
            />
          );
        })}
    </Container>
  );
};
