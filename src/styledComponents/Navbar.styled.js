import styled from "styled-components"


export const Section = styled.section`
min-height: 100vh;
width: 100%;
background-position: center;
background-size: cover;
position: relative;`;

export const Nav = styled.nav`
    background: #033d35;
    display: flex;
    padding: 1% 6%;
    justify-content: space-between;
    align-items: center;
    flex:1;
`;
export const No = styled.h5`
position:relative;
left: 25rem;
font-weight: 200;
color:#fff;`;

export const Aa = styled.a`
   color: #fff;
   font-weight: 200;
    text-decoration: none;
    font-size: 13px;
`;

export const NavLinks = styled.div`
    flex: 1;
    text-align: right;
    @media (max-width:768px) {
        position: absolute;
        background: #033d35;
        height: 100vh;
        width: 200px;
        top: 0;
        right: ${({menu})=>{
            return menu?'0':'-205px';
        }};
        transition: 0.5s;
        text-align: left;
        z-index: 1;
    }`;

export const Li = styled.li`
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
    @media(max-width: 768px){
        display: block;
    }
`;

export const IconBar = styled.i`
display: none;
@media(max-width: 768px){
        display: block;
        color: #fff;
        margin: 10px;
        font-size: 22px;
        cursor: pointer;
}`;






