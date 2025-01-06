"useclient"
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGanttIcon } from 'lucide-react';
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
        labelIcon = {<ChartNoAxesGanttIcon size={14}/>}
        href='dashboard'
        />
    <UserButton.Action label="manageAccount"/>
    </UserButton.MenuItems>
</UserButton>
  );
};

export default UserMenu;