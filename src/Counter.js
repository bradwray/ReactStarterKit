import React, { useState } from "react";
import styled from "styled-components";

// This is a styled div we named container. Below it is just regular CSS.
const Container = styled.div`
  border-radius: 3px;
  width: 100px;
  height: 110px;
  margin: 0 auto;
  background-color: #eee;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

// Here is a styled div we named Count.
const Count = styled.div`
  color: #337067;
  font-size: 55px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

// And a styled button tag we named Button.
const Button = styled.button`
  background: #337067;
  border-radius: 3px;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

// This Counter function is a component that is exported from here and
// imported into index.js to be rendered inside the <App/> component.
export default function Counter() {
  // Next we make a changeable state variable named num.
  // the function setNum is how you change it. We start it out at 0;
  const [num, setNum] = useState(0);

  // The num variable and the setter are used within and
  // around the tags we made wrapped in curly brackets.
  return (
    <Container>
      <Count>{num}</Count>
      <Button onClick={() => setNum(num + 1)}>Press Me</Button>
    </Container>
  );
}
