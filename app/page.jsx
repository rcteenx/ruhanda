import smd from "@/content/data/siteMetaData";

import Hero from "@/components/sections/1-hero-1-home";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
