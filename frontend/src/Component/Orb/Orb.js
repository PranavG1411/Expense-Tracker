import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function Orb() {
  const { width, height } = useWindowSize();
  console.log(width, height);
  const moveOrb = keyframes`
   0%{
     transform : translate(0, 0);
   }
   50%{
    transform : translate(${width }px,${ height / 1.5}px)
   }
   100%{
    transform : translate(0, 0);

   }

  `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(300px);
    animation: ${moveOrb} 5s alternate linear infinite;
  `;

  return <OrbStyled></OrbStyled>;
}
export default Orb;

/* This is a React component that creates a circular shape called an "Orb" using styled-components library. It imports a custom hook called "useWindowSize" from a utility function file that returns the width and height of the current window.

The Orb is styled with CSS properties such as width, height, position, border-radius, margin, background, and filter. It has a linear gradient background color from #f56692 to #f2994a and a filter that applies a blur effect to it.

The component also defines an animation for the Orb using keyframes, which specifies the animation behavior over time. The animation moves the Orb from the starting position to a position that is horizontally aligned with the right edge of the screen and halfway down the screen, and then back to its starting position. This animation is applied to the Orb using the "animation" CSS property.

Finally, the component returns the Orb styled with the defined styles and the animation.




*/