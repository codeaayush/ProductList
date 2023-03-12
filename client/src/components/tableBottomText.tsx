import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Wrapper = styled.div`
  > button {
    float: right;
    background-color: rgb(0, 132, 188);
    font-size: '24px';
    padding: '16px 32px';
    border-radius: '8px';
    height: '50px';
  }
  @media (max-width: 590px) {
    > button {
        float: left;
    }
  }
`;

const BottomCheckedWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  > span {
    display: flex;
    margin: 10px;
  }
  @media (max-width: 590px) {
    width: 100%;
    margin-top: 20px;
  }
  @media (max-width: 390px) {
    font-size: 15px;
    > svg {
        height: 20px;
    }
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`;

const EstimatedWrapper = styled.div`
  margin: 10px;
`;

function TableBottomText(props) {
  return (
    <Wrapper>
      <button>Connect Online Today</button>
      <BottomCheckedWrapper>
        <FaCheck />
        <span>10 Business days cooling off period</span>
        <FaCheck />
        <span>Secure Signup in 5 mins</span>
        <FaCheck />
        <span>Save time and effort</span>
      </BottomCheckedWrapper>
      <EstimatedWrapper>
        The estimated cost includes any applicable welcome credits, bonuses, and
        conditional discounts (if applicable) which apply within the 12 months
        of the plan.
      </EstimatedWrapper>
    </Wrapper>
  );
}

export default TableBottomText;
