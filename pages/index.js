import { loadData } from "@/lib/data-handler";

import DisplayCard from "@/components/DisplayCard";
import Container from "@/components/Container";

export default function Home(props) {
  return (
    <Container title="Home">
      <h2 className="font-primary text-branding-accent-secondary text-2xl text-center">
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
  const data = await loadData();
  if (!data) {
    // TODO: handling empty data or a failure?
    return { notFound: true };
  }

  const products = data.map(({ id, thumbnailUrl, displayName }) => ({
    id,
    thumbnailUrl,
    displayName,
  }));

  return {
    props: {
      products,
    },
  };
}
