import styled from "styled-components";
import ReferencePrice from "./referencePrice";
import ProductLogo from "./productLogo";
import EstimatedPrice from "./estimatedPrice";
import PriceChecked from "./priceChecked";
import TableBottomText from "./tableBottomText";

interface Props {
  productData: any;
}

const Border = styled.div`
  border-style: groove;
  height: 30%;
  margin: 20px;
`;

const BottomWrapper = styled.div`
  margin: 10px;
`;

const BottomContainer = styled.div`
  margin-top: 10px;
  background-color: rgb(241 236 236);
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const DiscountWrapper = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 915px) {
    width: 30%;
  }
  @media (max-width: 590px) {
    width: 50%;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`;

let estimatedData;

let estimatedCost;

function ProductList(props: Props) {
  estimatedData = props.productData.dmo_content.Ausgrid;
  estimatedData = estimatedData.toString();
  // remove all the html tags
  estimatedData = estimatedData.replace(/(<([^>]+)>)/gi, "");
  let position = estimatedData.indexOf("$");
  estimatedCost = estimatedData.substr(position, 5);
  estimatedCost = estimatedCost.substring(1);
  let monthlyCost = Number(estimatedCost) / 12;
  monthlyCost = Math.round(monthlyCost) + 2;

  return (
    <Border>
      <Wrapper>
        <ProductLogo logo={props.productData} />
        <DiscountWrapper>
          <ReferencePrice reference={props.productData} />
          <PriceChecked checked={props.productData} />
        </DiscountWrapper>
        <EstimatedPrice
          estimatedCost={estimatedCost}
          monthlyCost={monthlyCost}
        />
      </Wrapper>
      <BottomWrapper>{estimatedData}</BottomWrapper>
      
      <BottomContainer>
        <TableBottomText />
      </BottomContainer>
    </Border>
  );
}

export default ProductList;
