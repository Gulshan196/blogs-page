import styled from "styled-components"

export const Latest1 = styled.div`
color: green;
    position:absolute;
    width: 100%;
    top:150%;
    h1 {
  overflow: hidden;
  text-align: center;
}

h1:before,
h1:after {
  background-color: #894850;
  content: "";
  display: inline-block;
  height: 2px;
  position: relative;
  vertical-align: middle;
  width: 29.5%;
}

h1:before {
  right: 0.5em;
  margin-left: -50%;
}

h1:after {
  left: 0.5em;
  margin-right: -50%;
}
`;

export const Row2 = styled.div`
position: absolute;
top:160%;
margin: 0 15%;
display: flex;
justify-content:space-between;
flex-wrap: wrap;
`;

export const Row3 = styled.div`
display: block;
padding-right: 10%;
justify-content:space-around;
`;

export const LeftContainer = styled.div`
display: flex;
width: 48%;
flex-direction: column;
padding: 4px 0;

& p{
   line-height: 20px;
}
`;
export const LImage = styled.img`
height: 50%;
width: 100%;
object-fit: cover;

`;