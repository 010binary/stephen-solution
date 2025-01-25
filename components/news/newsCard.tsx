import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import type { NewsItem } from "@/types/news";

interface NewsCardProps {
  article: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  return (
    <Card
      className={`overflow-hidden border-0 shadow-none ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image || "/news/news-3.jpg"}
            alt={article.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "33vw"}
          />
        </div>
        {article.category && (
          <Badge className="absolute top-4 right-4 bg-[#e5fb34] text-black hover:bg-[#e5fb34]">
            {article.category}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <Link href={`/news/${article.slug}`}>
          <h3
            className={`${
              featured ? "text-2xl" : "text-xl"
            } font-bold mb-3 hover:text-[#e5fb34]`}
          >
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>•</span>
          <span>{article.commentCount} Comments</span>
        </div>
      </CardContent>
    </Card>
  );
}
