// "use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from './ui/button';
import UserMenu from './user-menu';
import { FolderOpen, SquarePen } from 'lucide-react';
// import { useState, useEffect } from 'react'
//
const Header = () => {
  return <header className="container">
    <nav className="py-4 px-4 flex justify-between items-center w-full">
       <Link href ={"/"}>
       <Image src={"/mindFlow.png"} alt = "MindFlow" height={60} width={100}/>
       </Link>
       <div className="flex items-center gap-2 ml-auto">
       
       <SignedIn>
            <Link href="/dashboard#collections">
              <Button variant="outline" className="flex items-center gap-2">
                <FolderOpen size={18} />
                <span className="hidden md:inline">Collections</span>
              </Button>
            </Link>
          </SignedIn>
          <Link href="/journal/write">
            <Button variant="journal" className="flex items-center gap-2">
              <SquarePen size={18} />
              <span className="hidden md:inline">New Entry</span>
            </Button>
          </Link>
        
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
       </div>
    </nav>
  </header>
}

export default Header