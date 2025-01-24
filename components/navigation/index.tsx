"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const aboutLinks = [
  { title: "About Us", href: "#" },
  { title: "Our Team", href: "#" },
  { title: "Company History", href: "#" },
];

const serviceLinks = [
  { title: "Chemical Factory", href: "#" },
  { title: "Thermal Power", href: "#" },
  { title: "Gas Flaring", href: "#" },
  { title: "Petroleum Refinery", href: "#" },
  { title: "Oil Pump", href: "#" },
];

const pageLinks = [
  { title: "Blog", href: "#" },
  { title: "Projects", href: "#" },
  { title: "Testimonials", href: "#" },
  { title: "FAQ", href: "#" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-transparent py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <Link
              href="tel:+6221-2002-2012"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +6221-2002-2012
            </Link>
            <Link
              href="mailto:hello@yourdomain.tld"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              hello@yourdomain.tld
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-transparent py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.png"
              alt="stephen Logo"
              width={150}
              height={40}
              className="mb-4"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      HOME
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>ABOUT US</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {aboutLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                pathname === link.href && "bg-accent"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {serviceLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                pathname === link.href && "bg-accent"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      CONTACT
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>PAGES</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {pageLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                pathname === link.href && "bg-accent"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="grid gap-4 py-4">
                  <Link href="/" className="text-lg font-semibold">
                    HOME
                  </Link>
                  <div className="grid gap-2">
                    <div className="font-semibold">ABOUT US</div>
                    {aboutLinks.map((link) => (
                      <Link key={link.title} href={link.href} className="pl-4">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  <div className="grid gap-2">
                    <div className="font-semibold">SERVICES</div>
                    {serviceLinks.map((link) => (
                      <Link key={link.title} href={link.href} className="pl-4">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/contact" className="text-lg font-semibold">
                    CONTACT
                  </Link>
                  <div className="grid gap-2">
                    <div className="font-semibold">PAGES</div>
                    {pageLinks.map((link) => (
                      <Link key={link.title} href={link.href} className="pl-4">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute inset-x-0 top-full bg-background border-t border-gray-800 p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex gap-2">
              <Input type="search" placeholder="Search..." className="flex-1" />
              <Button onClick={() => setIsSearchOpen(false)}>Search</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
