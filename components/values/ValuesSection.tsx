export function ValuesSection() {
  const values = [
    {
      letter: "A",
      title: "Excellence",
      description:
        "We are committed to delivering the highest standards of quality and reliability in every project, ensuring superior performance and customer satisfaction.",
      color: "bg-[#3B5998]",
      titleColor: "text-[#3B5998]",
    },
    {
      letter: "B",
      title: "Customer Focus",
      description:
        "We place our clients at the centre of everything we do, designing our engineering service to meet their specific needs in way that exceed expectations through our commitment to excellence.",
      color: "bg-[#E74C3C]",
      titleColor: "text-[#E74C3C]",
    },
    {
      letter: "C",
      title: "Innovation",
      description:
        "We continuously seek innovative solutions to enhance efficiency, reduce costs, and provide cutting-edge services in the oil and gas industry.",
      color: "bg-[#F39C12]",
      titleColor: "text-[#F39C12]",
    },
    {
      letter: "D",
      title: "Partnership",
      description:
        "We collaborate with our partners to deliver innovative and world-class solution to our portfolio of clients.",
      color: "bg-[#3B5998]",
      titleColor: "text-[#3B5998]",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[#E74C3C]">
        Our Values
      </h2>

      <div className="grid gap-8 md:gap-16">
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 space-y-4">
            <div className="flex flex-col items-start md:items-end">
              <h3
                className={`${values[0].titleColor} text-xl md:text-2xl font-semibold text-left md:text-right`}
              >
                {values[0].title}
              </h3>
              <p className="text-gray-600 text-left md:text-right max-w-lg mt-2">
                {values[0].description}
              </p>
            </div>
          </div>

          {/* Right Content with Boxes */}
          <div className="order-1 md:order-2 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Mobile: A box */}
            <div className="md:hidden relative w-28 h-28">
              <div
                className={`${values[0].color} w-full h-full flex items-center justify-center clip-diagonal-1`}
              >
                <span className="text-white text-4xl font-bold relative z-10">
                  {values[0].letter}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Desktop: A and B boxes */}
            <div className="hidden md:flex gap-8">
              <div className="relative w-32 h-32">
                <div
                  className={`${values[0].color} w-full h-full flex items-center justify-center clip-diagonal-1`}
                >
                  <span className="text-white text-5xl font-bold relative z-10">
                    {values[0].letter}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                </div>
              </div>
              <div className="relative w-32 h-32">
                <div
                  className={`${values[1].color} w-full h-full flex items-center justify-center clip-diagonal-2`}
                >
                  <span className="text-white text-5xl font-bold relative z-10">
                    {values[1].letter}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Desktop: B content */}
            <div className="md:hidden flex flex-col items-start space-y-4 text-left">
              <h3
                className={`${values[1].titleColor} text-xl md:text-2xl font-semibold`}
              >
                {values[1].title}
              </h3>
              <p className="text-gray-600 max-w-lg">{values[1].description}</p>
            </div>
          </div>
        </div>

        {/* B content for desktop */}
        <div className="hidden md:block">
          <div className="flex flex-col items-start space-y-4 text-left md:ml-[calc(50%+2rem)]">
            <h3
              className={`${values[1].titleColor} text-xl md:text-2xl font-semibold`}
            >
              {values[1].title}
            </h3>
            <p className="text-gray-600 max-w-lg">{values[1].description}</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 space-y-4">
            <div className="flex flex-col items-start md:items-end">
              <h3
                className={`${values[2].titleColor} text-xl md:text-2xl font-semibold text-left md:text-right`}
              >
                {values[2].title}
              </h3>
              <p className="text-gray-600 text-left md:text-right max-w-lg mt-2">
                {values[2].description}
              </p>
            </div>
          </div>

          {/* Right Content with Boxes */}
          <div className="order-1 md:order-2 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Mobile: C box */}
            <div className="md:hidden relative w-28 h-28">
              <div
                className={`${values[2].color} w-full h-full flex items-center justify-center clip-diagonal-1`}
              >
                <span className="text-white text-4xl font-bold relative z-10">
                  {values[2].letter}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Desktop: C and D boxes */}
            <div className="hidden md:flex gap-8">
              <div className="relative w-32 h-32">
                <div
                  className={`${values[2].color} w-full h-full flex items-center justify-center clip-diagonal-1`}
                >
                  <span className="text-white text-5xl font-bold relative z-10">
                    {values[2].letter}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                </div>
              </div>
              <div className="relative w-32 h-32">
                <div
                  className={`${values[3].color} w-full h-full flex items-center justify-center clip-diagonal-2`}
                >
                  <span className="text-white text-5xl font-bold relative z-10">
                    {values[3].letter}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Mobile: D content */}
            <div className="md:hidden flex flex-col items-start space-y-4 text-left">
              <h3
                className={`${values[3].titleColor} text-xl md:text-2xl font-semibold`}
              >
                {values[3].title}
              </h3>
              <p className="text-gray-600 max-w-lg">{values[3].description}</p>
            </div>
          </div>
        </div>

        {/* D content for desktop */}
        <div className="hidden md:block">
          <div className="flex flex-col items-start space-y-4 text-left md:ml-[calc(50%+2rem)]">
            <h3
              className={`${values[3].titleColor} text-xl md:text-2xl font-semibold`}
            >
              {values[3].title}
            </h3>
            <p className="text-gray-600 max-w-lg">{values[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
