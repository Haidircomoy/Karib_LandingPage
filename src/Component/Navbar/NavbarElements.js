import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8 all ease;
}

`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
heiht: 80px;
width: 100%;
z-index: 1;
padding: 0px 24px;
max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
color: red;
display: flex;
jusify-self: flex-start;
align-items: center;
margin-left: 24px;
font-size: 24px;
font-weight: Bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px){
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
    cursor: pointer:
    font-size: 48px;
    color: #fff;
}

`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 760px){
    display: none
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
pading: 12px;
height: 100%;

&.active {
    border-bottom: 3px solid #01bf71;
}
`