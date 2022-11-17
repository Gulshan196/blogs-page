import styled from "styled-components"

export const Carousell = styled.div`
    position: absolute;
    top:44%;
    width: 100%;
    height: 65vh;
    &h2{
    }
    
    @media(max-width:768px){
        border: 1px solid;
        height: 30vh;
    }`;

    export const Ul = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
    `;

    export const Slide = styled.li`
    position:absolute;
    inset: 0;
    opacity: 1;
    transition: 200ms ease-in-out;
    transition-delay: 200ms;
    
    & img{
    display: block;
    height: 100%;
    width: 70%;
    margin: auto;
    align-items: center;
    }`;

    export const Title = styled.h2`
    position:absolute;
    top:120%;
    left:15%;`;

    export const FeaturedDesc = styled.div`
    width: 70%;
    color: rgba(0,0,0,0.5);
    position:absolute;
    top:125%;
    left:15%;
    line-height:20px;`; 
    
    export const SharedIcon = styled.i`
    position:absolute;
    top:95%;
    left:85%;`;

    export const MenuOption = styled.div`
    position:absolute;
    width:100%;
    left:15%;
    top:140%;
    display:flex;
    & button{
margin:10px;
background: transparent;
color: #045d51;
cursor: pointer;
border: 2px solid #0a9e88;
border-radius: 10pt;
padding: 0.2em 1em;
font-size: 13pt;
    }`;
