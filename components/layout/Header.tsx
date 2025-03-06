"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo } from "@/public";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from "./Container";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About Us",
      dropdown: [
        { href: "/about-us/company", label: "Our Company" },
        { href: "/about-us/team", label: "Our Team" },
        { href: "/about-us/values", label: "Our Values" },
      ],
    },
    {
      href: "/services",
      label: "Services",
      dropdown: [
        { href: "/services/installation", label: "Installation plus EPC" },
        { href: "/services/maintainance", label: "Repair & Maintainance" },
        { href: "/services/retainer", label: "Retainer" },
      ],
    },
    {
      href: "/more",
      label: "More",
      dropdown: [
        { href: "/more/gallery", label: "Gallery" },
        { href: "/more/career", label: "Career" },
        { href: "/more/partner", label: "PartnerShip" },
      ],
    },
    { href: "/more/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ];

  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname?.startsWith(path) ?? false;
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white">
      <div className="bg-blue-500 py-2">
        <Container>
          <div className="flex flex-wrap justify-center items-center space-x-6 text-white text-sm flex-auto">
            <span className="flex items-center">
              📞 <a href="tel:+234 801 234 5679">(+234)801 234 5679</a>{" "}
            </span>
            <span className="flex items-center">
              📧
              <a href="mailto:info@stephensolution.com.ng">
                info@stephensolution.com.ng
              </a>
            </span>
          </div>
        </Container>
      </div>
      <div className="border-b">
        <Container>
          <header className="flex h-16 items-center justify-between px-4 lg:px-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo || "/placeholder.svg"}
                alt="company logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) =>
                item.dropdown ? (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger className="flex items-center">
                      <span
                        className={`text-sm font-medium transition-colors hover:text-primary relative
                        ${
                          item.label === "Contact Us"
                            ? "text-red-500"
                            : "text-foreground"
                        }
                        ${
                          isActive(item.href)
                            ? "after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-0.5 after:bg-blue-500"
                            : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link
                            href={subItem.href}
                            className={`w-full text-sm ${
                              isActive(subItem.href) ? "text-blue-500" : ""
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary relative
                      ${
                        item.label === "Contact Us"
                          ? "text-red-500"
                          : "text-foreground"
                      }
                      ${
                        isActive(item.href)
                          ? "after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-0.5 after:bg-blue-500"
                          : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.href} className="space-y-2">
                        <span
                          className={`text-sm font-medium ${
                            isActive(item.href)
                              ? "text-blue-500"
                              : "text-foreground"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="inline-block ml-1 h-4 w-4" />
                        </span>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block text-sm ${
                                isActive(subItem.href)
                                  ? "text-blue-500"
                                  : "text-muted-foreground"
                              } hover:text-primary`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-medium transition-colors hover:text-primary
                          ${
                            item.label === "Contact Us"
                              ? "text-red-500"
                              : "text-foreground"
                          }
                          ${isActive(item.href) ? "text-blue-500" : ""}`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </Container>
      </div>
    </div>
  );
}
