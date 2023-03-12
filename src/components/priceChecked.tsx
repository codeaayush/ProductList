import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const CheckedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
  }
`;

function PriceChecked(props) {
  return (
    <CheckedWrapper>
      <span>
        <FaCheck />
        <span>12 Month Energy Plan Period</span>
      </span>
      <span>
        <FaCheck />
        <span>{props.checked.contract_length}</span>
      </span>
      <span>
        <FaCheck />
        <span>No Exit Fees</span>
      </span>
    </CheckedWrapper>
  );
}

export default PriceChecked;
