import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 99999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
left: 0;
transition: 0.3s all ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
z-index: 999;

`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
cusror: pointer;
background: transparent;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: lfr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-widt: 400px){
    grid-template-rows: repeat(6, 80px);
}

`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}

`