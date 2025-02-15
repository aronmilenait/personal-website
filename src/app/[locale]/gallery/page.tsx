import { useTranslations } from "next-intl";
import ImageGallery from "../components/gallery/ImageGallery";
import ushuaiaIsland from "../assets/gallery/ushuaia-island.webp";
import ushuaiaLandscape from "../assets/gallery/ushuaia-landscape.webp";
import ushuaiaMountain2 from "../assets/gallery/ushuaia-mountain2.webp";
import ushuaiaStreets from "../assets/gallery/ushuaia-streets.webp";
import ushuaiaNationalPark from "../assets/gallery/ushuaia-national-park.webp";
import ushuaiaLake from "../assets/gallery/ushuaia-lake.webp";

export default function Gallery() {
  const t = useTranslations("Gallery");
  const galleryImages = [
    { src: ushuaiaIsland, alt: t("ushuaia-island-alt") },
    { src: ushuaiaLandscape, alt: t("ushuaia-landscape-alt") },
    { src: ushuaiaMountain2, alt: t("ushuaia-mountain-alt") },
    { src: ushuaiaStreets, alt: t("ushuaia-streets-alt") },
    { src: ushuaiaNationalPark, alt: t("ushuaia-national-park-alt") },
    { src: ushuaiaLake, alt: t("ushuaia-lake-alt") },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 flex items-center justify-center flex-col p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-700 leading-tight text-center">
        {t("gallery-title")}
      </h1>
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <ImageGallery images={galleryImages} />
      </div>
    </section>
  );
}
