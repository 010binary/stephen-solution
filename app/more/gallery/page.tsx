import PageHero from "@/components/page-hero";
import GalleryPage from "./galleryPage";
import { contact } from "@/public/backgrounds";

export default function Gallery() {
  return (
    <>
      <PageHero
        image={contact}
        heading="Our Gallery"
        description="From the most remote corners of the Earth comes the fuel that makes modern life possible."
      />
      <section className="space-y-16 pt-10 pb-10">
        <GalleryPage />
      </section>
    </>
  );
}
