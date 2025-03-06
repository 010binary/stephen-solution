"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Container from "@/components/layout/Container";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Message and Social Media */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Message us, we will be in touch shortly
              </h2>
              <p className="text-gray-700">
                We are here to assist you with any inquiries or support you may
                need. Feel free to reach out to us through any of the contact
                methods below.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Follow our social media
              </h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-300 transition-colors w-12 h-12 flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-900" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-300 transition-colors w-12 h-12 flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-900" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-300 transition-colors w-12 h-12 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-900" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-300 transition-colors w-12 h-12 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full min-h-[150px] border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-300 text-gray-900 font-bold py-3 px-6 rounded-none"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
