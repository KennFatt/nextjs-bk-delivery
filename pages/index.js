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
      <main className="min-h-screen w-full bg-branding-light mx-auto max-w-5xl">
        <h3 className="text-2xl text-center py-7 font-primary text-branding-accent-secondary">
          OUR MENUS
        </h3>

        <section className="min-h-screen w-full max-w-md mx-auto grid grid-cols-2 gap-3 lg:gap-4 lg:grid-cols-3 lg:max-w-5xl px-4 xs:px-0 pb-7">
          {getProductCategories().map(({ id, name, thumbnailUrl }) => (
            <DisplayCard key={id} title={name} imageSrc={thumbnailUrl} />
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
