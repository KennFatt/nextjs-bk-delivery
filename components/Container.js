import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Container(props) {
  const { title, description } = props;
  const meta = {
    title: `${title ? `${title} -` : ``} Burger King Clone`,
    author: "Kennan Fattah",
    description:
      description ||
      "Burger King's delivery website clone built with Next.js and Tailwind CSS by @KennFatt",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="author" content={meta.author} />
        <meta name="description" content={meta.description} />
      </Head>

      <NavBar />
      <main
        className="bg-branding-light py-7 lg:pb-11 space-y-7 min-h-screen bg-fixed bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://bkdelivery.co.id/static/website/img/BK_bg.jpg?5218847fa211')",
        }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
