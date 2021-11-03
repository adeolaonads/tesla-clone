import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
      <Wrap>
        <itemText>
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
        </itemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Existing Inventory</RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Wrap>
    );
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center;
    
`
const itemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacoty: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;

`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div`

`