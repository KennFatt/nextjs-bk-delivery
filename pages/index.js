import DisplayCard from "@/components/DisplayCard";
import Container from "@/components/Container";
import { getProductCategories } from "@/lib/utils";

export default function Home() {
  return (
    <Container>
      <h3 className="py-7 font-primary text-branding-accent-secondary text-2xl text-center">
        OUR MENUS
      </h3>

      <section className="center-container lg:gap-4 lg:grid-cols-3 grid grid-cols-2 gap-3 px-4">
        {getProductCategories().map(({ id, name, thumbnailUrl }) => (
          <DisplayCard key={id} title={name} imageSrc={thumbnailUrl} />
        ))}
      </section>
    </Container>
  );
}
