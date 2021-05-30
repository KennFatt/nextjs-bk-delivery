import DisplayCard from "@/components/DisplayCard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getProductCategories } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Top Navigtion Bar */}
      <NavBar />

      {/* Item Grid */}
      <main className="px-2 mx-auto bg-branding-light">
        {/* Title Text */}
        <h3 className="text-2xl text-center py-7 font-primary text-branding-accent-secondary">
          OUR MENUS
        </h3>

        {/* Item grid */}
        <div className="flex flex-wrap justify-between pb-7">
          {getProductCategories().map(({ id, name, thumbnailUrl }, idx) => (
            <DisplayCard key={id} title={name} imageSrc={thumbnailUrl} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
