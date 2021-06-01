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
      <main className="w-full max-w-5xl min-h-screen mx-auto bg-branding-light sm:px-7 pb-7 lg:pb-11">
        <h3 className="text-2xl text-center py-7 font-primary text-branding-accent-secondary">
          OUR MENUS
        </h3>

        <section className="grid w-full max-w-md min-h-screen grid-cols-2 gap-3 px-4 mx-auto lg:gap-4 lg:grid-cols-3 lg:max-w-5xl xs:px-0">
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
