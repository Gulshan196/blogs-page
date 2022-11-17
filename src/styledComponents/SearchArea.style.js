import styled, { css } from "styled-components"

export const SearchArea = styled.div`
position:absolute;
width:100%;
top:15%;

& input{
    position: relative;
    border:1px solid green;
    width: 40%;
    left: 50%;
    height: 4vh;
    transform: translateX(-50%);
}

& button{
    position: relative;
    background-color: #033d35;
    color: #fff;
    left:30%;
    height:4vh;
}`;

export const MenuBar = styled.div`
position: absolute;
width:70%;
left:15%;
top:24%;
display:flex;
justify-content:space-between;

& button{
}
@media(max-width:768px){
top:12%;
left:0%;
width: 100%;
}`;

export const Button = styled.button`
 ${props => props.primary && css`
    background: #0a9e88;
    color: white;
  `}
  ${props => props.outline && css`
    background: transparent;
    color: #045d51;
  `}
  cursor: pointer;
  border: 2px solid #0a9e88;
border-radius: 12pt;
margin: 0.5em 1em;
padding: 0.6em 2em;
font-size: 13pt;

@media (max-width:768px) {
border-radius: 10pt;
margin: 0.2px 2px;
padding-right: 13px;
padding: 2px;
font-size:9.8pt;
}
`;

export const SearchInput = styled.input`
    height: 2.5rem;
    display: flex;
    width: 20rem;
    padding: 0 1.25em;
    font-size: 14pt;
    outline: none;
    border-style:none; 

@media(max-width:768px){
    width:10rem;
    }
`;
export const SearchButton = styled.button`
 background: #045d51;
 border-style: none;
 height: 2.5em;
  border-radius: 3px;
  color: white;
  padding: 0.25em 2em;
  font-size: 13pt;
  cursor: pointer;
  @media(max-width: 768px){
  }
`;

export const SearchBar = styled.div`
position: absolute;
left:50%;
transform: translateX(-50%);
top:15%;
margin-top: -1.5em;
display: flex;
width: fit-content;
border: 1px solid #088178;
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

@media(max-width: 768px){
top: 10%;
width: 70px;
height: 20px;
}
`;