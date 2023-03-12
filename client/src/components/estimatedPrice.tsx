import styled from "styled-components";

const PriceWrapper = styled.div`
  float: left;
  width: 20%;
  background-color: rgb(183 213 213);
  border: 1px solid #ccc;
  > h1 {
    color: blue;
    margin: 0px 15px;
    > span {
      font-size: initial;
      color: gray;
    }
  }
  > h3 {
    color: rgb(0, 132, 188);
    margin: 0px 15px 15px;
    > span {
      font-size: initial;
      color: gray;
    }
  }
  @media (max-width: 915px) {
    width: 30%;
  }
  @media (max-width: 590px) {
    width: 50%;
    margin-top: 20px
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`;

const EstimatedText = styled.h2`
  margin-top: 0px;
  border-style: groove;
  background-color: #0084bc;
`;

function EstimatedPrice({estimatedCost, monthlyCost}) {
let data = JSON.stringify(estimatedCost).replace(/"/g, '');
  return (
    <PriceWrapper>
      <EstimatedText>Estimated Cost</EstimatedText>
      <h1>
        {`$${data}^`}
        <span>/yr</span>
      </h1>
      <h3>
        {"$" + JSON.stringify(monthlyCost) }
        <span>/mo</span>
      </h3>
    </PriceWrapper>
  );
}

export default EstimatedPrice;
