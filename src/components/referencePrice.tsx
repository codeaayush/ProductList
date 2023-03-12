import styled from "styled-components";

const ReferenceContainer = styled.div`
  background-color: rgb(241 236 236);
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 60%;
`;

function ReferencePrice(props) {
  return (
    <ReferenceContainer>
      <div>{props.reference.dmo_percentage.Ausgrid}</div>
      the current reference price
    </ReferenceContainer>
  );
}

export default ReferencePrice;
