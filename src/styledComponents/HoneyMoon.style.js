import styled from "styled-components"

export const Moon1 = styled.div`
color: green;
    position:absolute;
    width: 100%;
    top:510%;
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
  width: 24.5%;
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

export const RowH = styled.div`
position: absolute;
top:520%;
margin: 0 15%;
display: flex;
justify-content:space-between;
flex-wrap: wrap;
`;