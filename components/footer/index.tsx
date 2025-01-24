"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div
          className="relative z-20 px-6 py-16 bg-cover bg-center"
          style={{
            backgroundImage: `url("oil-rig-at-port-e1674741523466.jpg")`,
          }}
        >
          <div className="max-w-7xl mx-auto text-white lg:flex">
            <div>
              <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
              <p className="mb-8">
                Sign up our newsletter to get update news and article about
                company.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-2xl">
              <Input
                type="email"
                name="email"
                placeholder="Email your email"
                required
                className="flex-1 bg-white text-black"
              />
              <Button
                type="submit"
                className="bg-[#e5fb34] text-black hover:bg-[#d4ea23] px-8"
              >
                SIGN UP
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#e5fb34] after:-mb-2">
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
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#e5fb34] after:-mb-2">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Chemical Factory
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Thermal Power
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Gas Flaring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Petrolium Refinery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Oil Pump
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#e5fb34] after:-mb-2">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Ticket System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/placeholder.png"
                alt="stephen Logo"
                width={150}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400">
                Sem et quisque dis fermentum vitae mauris sit orci ante.
                Porttitor facilisis lorem venenatis sollicitudin cursus sapien
                ultricies pretium.
              </p>
            </div>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-start gap-2">
                <span className="text-[#e5fb34]">▲</span>
                Jl Cempaka Wangi No 22 Jakarta - Indonesia
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#e5fb34]">▲</span>
                +6221-2002-2012
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#e5fb34]">▲</span>
                hello@yourdomain.tld
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black px-3 md:px-6">
        <div className="max-w-7xl mx-auto border-t py-4 border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-gray-300">
              Term of use
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} Stephen&apos;s Solution. All
            rights reserved. Powered by Stephen&apos;s Solution
          </p>
        </div>
      </div>
    </footer>
  );
}
