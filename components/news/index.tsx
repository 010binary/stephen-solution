import NewsCard from "./newsCard";

// This will be replaced with actual data from your backend
const sampleNews = {
  featured: {
    id: "1",
    title: "Ethanol and corn markets: Impact from the E15 gasoline waiver",
    excerpt:
      "Nunc quam semper class ridiculus sagittis integer. Ex ac volutpat consequat tempus habitasse vestibulum himenaeos ullamcorper dolor finibus. Feugiat augue sociosqu fringilla per gravida ridiculus",
    date: "2023-01-23",
    commentCount: 0,
    category: "BUSINESS GROWTH",
    image: "/news/news-1.jpg",
    slug: "ethanol-and-corn-markets",
  },
  related: [
    {
      id: "2",
      title: "Helping the industry navigate the energy transition",
      excerpt:
        "Nunc quam semper class ridiculus sagittis integer. Ex ac volutpat",
      date: "2023-01-23",
      commentCount: 0,
      category: "ENERGY",
      image: "/news/news-2.jpg",
      slug: "helping-industry-navigate",
    },
    {
      id: "3",
      title: "How did the European natural gas market evolve in 2018?",
      excerpt:
        "Nunc quam semper class ridiculus sagittis integer. Ex ac volutpat",
      date: "2023-01-23",
      commentCount: 0,
      category: "MARKET",
      image: "/news/news-3.jpg",
      slug: "european-natural-gas-market",
    },
    {
      id: "4",
      title: "Monitoring the Permian basin using Earth observations",
      excerpt:
        "Nunc quam semper class ridiculus sagittis integer. Ex ac volutpat",
      date: "2023-01-23",
      commentCount: 0,
      category: "TECHNOLOGY",
      image: "/news/news-3.jpg",
      slug: "monitoring-permian-basin",
    },
  ],
};

export default function NewsSection() {
  return (
    <section className="py-8 md:py-16  ">
      <div className="container max-w-[95rem] px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">News & Insight</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <NewsCard article={sampleNews.featured} featured />
          <div className="lg:col-span-1 space-y-8">
            {sampleNews.related.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
