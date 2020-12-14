import styled from "styled-components";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";

const ABvertical = () => {
  const doneClickHandler = () => {
    //     dispatch((type: "UPDATE_PAGE"));
  };
  return (
    <ABPage>
      <Bounce left>
        <A></A>
      </Bounce>
      <Bounce right>
        <B></B>
      </Bounce>
      <DONE onClick={doneClickHandler}>DONE</DONE>
    </ABPage>
  );
};

const ABPage = styled(motion.div)`
  /* width: 100%;
  height: 100vh; */
  /* background: linear-gradient(160deg, #2db4a8 0%, #13af3d 100%); */
  background-size: 100vw 100vh;
  /* overflow: hidden; */
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1000;
  @media screen and (min-width:768px) {

    background-size: cover;
  
}
share  
`;

const A = styled(motion.div)`
  height: 45vh;
  width: 100%;
  background-color: #ffbb12;
  color: white;
  font-size: 96px;
`;
const B = styled(motion.div)`
  height: 45vh;
  width: 100%;
  background-color: #1bb55c;
  color: white;
  font-size: 96px;
`;

const DONE = styled.div`
  height: 10vh;
  width: 100%;
  font-size: 24px;
  color: white;
  background-color: black;
  display: flex;
  align-self: center;
  justify-content: center;
  /* padding: 2rem; */
`;

export default ABvertical;
