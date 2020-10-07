import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  const [resume, setResume] = useState({
    price: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [charging, setCharging] = useState(false);

  const { price, data } = resume;

  return (
    <Container>
      <Header title="Price List Auto Insurance" />;
      <ContainerForm>
        <Form setResume={setResume} setCharging={setCharging} />
        {charging ? <Spinner /> : null}

        {!charging ? <Resume data={data} /> : null}

        {!charging ? <Result price={price} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
