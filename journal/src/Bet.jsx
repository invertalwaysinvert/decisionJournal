import styled from "styled-components";

export const Bet = () => {
  const BetStyle = styled.div`
    border: 1px solid black;
    height: 600px;
    width: 600px;
    margin: 50px;
  `;

  const Font = styled.div`
    font-family: "Merriweather Sans";
    font-weight: Bold;
  `;

  const Border = styled(Font)`
    border: 1px solid black;
  `;

  const Title = styled(Border)`
    height: 200px;
    width: 100%;
    font-size: 56px;
    line-height: 56px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const Info = styled(Border)`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-width: 0px;
  `;

  const Date = styled(Border)`
    height: 100px;
    width: 50%;
  `;

  const ConfidenceLevel = styled(Border)`
    height: 100px;
    width: 50%;
  `;

  const Description = styled(Border)`
    height: 200px;
    width: 100%;
  `;

  const Options = styled(Border)`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-width: 0px;
  `;

  const Delete = styled(Border)`
    height: 100px;
    width: 50%;
  `;

  const WeighIn = styled(Border)`
    height: 100px;
    width: 50%;
  `;

  return (
    <BetStyle>
      <Title>OIL PRICES WILL REACH $40</Title>
      <Info>
        <Date>14 Dec 2021</Date>
        <ConfidenceLevel>70%</ConfidenceLevel>
      </Info>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Description>
      <Options>
        <Delete>DELETE</Delete>
        <WeighIn>Weigh-In</WeighIn>
      </Options>
    </BetStyle>
  );
};
