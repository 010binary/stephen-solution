"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { logo } from "@/public";
import Container from "./Container";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Newsletter signup:", email);
  };

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/90 z-10" aria-hidden="true" />
        <div
          className="relative z-20 py-16 bg-cover bg-center bg-black/50"
          style={{
            backgroundImage: `url("placeholder-2.jpg")`,
          }}
        >
          <Container>
            <div className="grid lg:grid-cols-2 gap-8 items-center text-white ">
              <div>
                <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
                <p className="text-lg">
                  Sign up our newsletter to get update news and article about
                  company.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex gap-4 w-full">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email your email"
                  required
                  className="flex-1 bg-white text-black"
                />
                <Button
                  type="submit"
                  className="bg-blue-500 text-black hover:bg-blue-400/60 whitespace-nowrap px-8"
                >
                  SIGN UP
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white text-black py-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500 after:-mb-2">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    News & Update
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Business Ethics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500 after:-mb-2">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Wellhead Installation plus EPC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Repair and maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Retainership services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500 after:-mb-2">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact#form" className="hover:text-gray-300">
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Image
                  src={logo}
                  alt="stephen Logo"
                  width={150}
                  height={40}
                  className="mb-4"
                />
                <p className="">
                  An Indigenous Oil and Gas servicing company with strategic
                  focus on onshore well head services
                </p>
              </div>
              <div className="space-y-4">
                <p className="flex items-start gap-2">
                  <span className="text-black">🗺️</span>
                  2A Tatiana Court 2, Ikota Villa, Lekki, Lagos, Nigeria
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-black">📞</span>
                  <a href="tel:+234 801 234 5679">(+234) 801-234-5679</a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-black">📧</span>
                  <a href="mailto:info@stephensolution.com.ng">
                    info@stephensolution.com.ng
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-500 text-black md:px-6">
        <Container>
          <div className="border-t py-3 border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="hover:text-gray-300  text-black">
                Term of use
              </Link>
              <Link href="#" className="hover:text-gray-300  text-black">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-gray-300  text-black">
                Privacy Policy
              </Link>
            </div>
            <p className="text-center md:text-left  text-black">
              Copyright © {new Date().getFullYear()} Stephen&apos;s Solution.
              All rights reserved. Powered by Stephen&apos;s Solution
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
