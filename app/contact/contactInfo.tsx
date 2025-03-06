import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/layout/Container";

export default function ContactInfo() {
  return (
    <section className="w-full">
      {/* Contact Information Section */}
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in touch with us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to assist you with any inquiries or support you may
            need. Feel free to reach out to us through any of the contact
            methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Headquarter Card */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Headquarter</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    2A Tatiana Court 2, Ikota Villa, Lekki
                  </p>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <div className="space-y-1">
                  <a
                    href="mailto:info@stephensolution.com.ng"
                    className="text-gray-600 block"
                  >
                    info@stephensolution.com.ng
                  </a>
                  <a
                    href="mailto:info@stephensolution.com.ng"
                    className="text-gray-600 block"
                  >
                    info@stephensolution.com.ng
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call Us Card */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+234 801 234 5679"
                    className="text-gray-600 block"
                  >
                    (+234) 801-234-5679
                  </a>
                  <a
                    href="tel:+234 801 234 5679"
                    className="text-gray-600 block"
                  >
                    (+234) 801-234-5679
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Hour Card */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office Hour</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Mon-Sat : 8am-6pm</p>
                  <p className="text-gray-600">Sunday : Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
