import { Card } from "@/components/ui/card";
import Container from "../layout/Container";

export default function ValuesSection() {
  return (
    <section className="bg-white">
      <Container>
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 w-full">
            Our Values
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-6 h-6 bg-red-500"></div>
            <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-600 transform rotate-45"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Excellence */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-right order-2 md:order-1 w-full md:w-3/5">
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
                Excellence
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We are committed to delivering the highest standards of quality
                and reliability in every project, ensuring superior performance
                and customer satisfaction.
              </p>
            </div>
            <div className="relative order-1 md:order-2 w-full md:w-2/5 flex justify-center md:justify-end">
              <Card className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-700 transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
                <span className="text-4xl md:text-6xl font-bold text-white relative z-10">
                  A
                </span>
              </Card>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-blue-600 clip-arrow-left hidden md:block"></div>
            </div>
          </div>

          {/* Customer Focus */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative order-1 w-full md:w-2/5 flex justify-center md:justify-start">
              <Card className="w-24 h-24 md:w-32 md:h-32 bg-red-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600 transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
                <span className="text-4xl md:text-6xl font-bold text-white relative z-10">
                  B
                </span>
              </Card>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-red-500 clip-arrow-right hidden md:block"></div>
            </div>
            <div className="text-left order-2 w-full md:w-3/5">
              <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We place our clients at the centre of everything we do,
                designing our engineering service to meet their specific needs
                in way that exceed expectations through our commitment to
                excellence.
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-right order-2 md:order-1 w-full md:w-3/5">
              <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-2">
                Innovation
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We continuously seek innovative solutions to enhance efficiency,
                reduce costs, and provide cutting-edge services in the oil and
                gas industry.
              </p>
            </div>
            <div className="relative order-1 md:order-2 w-full md:w-2/5 flex justify-center md:justify-end">
              <Card className="w-24 h-24 md:w-32 md:h-32 bg-amber-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-600 transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
                <span className="text-4xl md:text-6xl font-bold text-white relative z-10">
                  C
                </span>
              </Card>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-amber-500 clip-arrow-left hidden md:block"></div>
            </div>
          </div>

          {/* Partnership */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative order-1 w-full md:w-2/5 flex justify-center md:justify-start">
              <Card className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-700 transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
                <span className="text-4xl md:text-6xl font-bold text-white relative z-10">
                  D
                </span>
              </Card>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-blue-600 clip-arrow-right hidden md:block"></div>
            </div>
            <div className="text-left order-2 w-full md:w-3/5">
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
                Partnership
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We collaborate with our partners to deliver innovative and
                world-class solution to our portfolio of clients.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
