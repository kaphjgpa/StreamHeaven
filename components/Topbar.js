"use client";
import { useState } from "react";
import Link from "next/link";
import { Bell, ChevronDown, Search, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";

const Topbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-bold">
            StreamHeaven
          </Link>
          <Link href="/" className="text-sm">
            Home
          </Link>
          <Link href="/tv-shows" className="text-sm">
            TV Shows
          </Link>
          <Link href="/movies" className="text-sm">
            Movies
          </Link>
          <Link href="/new-and-popular" className="text-sm">
            New & Popular
          </Link>
          <Link href="/my-list" className="text-sm">
            My List
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm">
                Browse by Language <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Japanese</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            {showSearch ? (
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-8 w-64"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch(false)}
                  className="ml-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
