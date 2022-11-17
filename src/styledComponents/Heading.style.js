import styled, { css } from "styled-components"

export const Row = styled.div`
display:flex;
align-items: center;
flex: 1;
`;

export const FHeading = styled.div`
    color: green;
    position:absolute;
    width: 100%;
    top:36%;
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

export const ImageDesc = styled.div`
display: flex;
color: green;
width:70%;
position:absolute;
justify-content: space-between;
top:109%;
left: 15%;
& i{
    color:green;
}
`;
