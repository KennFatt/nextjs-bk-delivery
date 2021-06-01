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
      <main
        className="min-h-screen bg-fixed bg-no-repeat bg-cover bg-branding-light pb-7 lg:pb-11"
        style={{
          backgroundImage:
            "url('https://bkdelivery.co.id/static/website/img/BK_bg.jpg?5218847fa211')",
        }}>
        <h3 className="text-2xl text-center py-7 font-primary text-branding-accent-secondary">
          OUR MENUS
        </h3>

        <section className="grid grid-cols-2 gap-3 px-4 center-container lg:gap-4 lg:grid-cols-3">
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
