import styled from "styled-components";

const LogoWrapper = styled.div`
  float: left;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 915px) {
    width: 30%;
  }
  @media (max-width: 590px) {
    width: 50%;
  }
`;

function ProductLogo(props) {
  return (
    <LogoWrapper>
      <img
        src={props.logo.provider.logo}
        alt="catalog-img"
        height={50}
        width={100}
      />
      <span>view Details</span>
      <span>Basic plan info document</span>
    </LogoWrapper>
  );
}

export default ProductLogo;
