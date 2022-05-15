import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="product">
                    Product
                </SidebarLink>
                <SidebarLink to="contact">
                    Contact
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar