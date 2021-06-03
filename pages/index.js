import fs from "fs/promises";
import path from "path";

import { toDisplayName } from "@/lib/utils";

import DisplayCard from "@/components/DisplayCard";
import Container from "@/components/Container";

export default function Home(props) {
  return (
    <Container title="Home">
      <h2 className="py-7 font-primary text-branding-accent-secondary text-2xl text-center">
        OUR MENUS
      </h2>

      <section className="center-container lg:gap-4 lg:grid-cols-3 grid grid-cols-2 gap-3 px-4">
        {/* TODO: Impl navigation to the category page inside DisplayCard */}
        {props.products.map(({ id, thumbnailUrl, displayName }) => (
          <DisplayCard
            key={id}
            navigateTo={`/menus/${id}`}
            title={displayName}
            imageSrc={thumbnailUrl}
          />
        ))}
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data", "menus.json");
  const content = JSON.parse(await fs.readFile(dataPath));

  // TODO: proper content handling
  if (!content) {
    return { notFound: true };
  }

  const products = content.map(({ id, thumbnailUrl, displayName }) => ({
    id,
    thumbnailUrl,
    displayName: toDisplayName(id, displayName),
  }));

  return {
    props: {
      products,
    },
  };
}
