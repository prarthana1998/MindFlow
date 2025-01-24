"use client"
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGanttIcon, MenuIcon } from 'lucide-react';
import React from 'react'
const UserMenu = () => {
  return (
  <UserButton 
  appearance={{
    elements:{
    avatarBox: "w-10 h-10",
    },
}}>
    <UserButton.MenuItems>
        <UserButton.Link
        label='Dashboard'
        labelIcon = {<MenuIcon size={14}/>}
        href='dashboard'
        />
    <UserButton.Action label="manageAccount"/>
    </UserButton.MenuItems>
</UserButton>
  );
};

export default UserMenu;