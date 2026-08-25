import AboutUsComponent from "@/app/components/Aboutus/Aboutus";
import { getAboutData } from "@/app/lib/data/aboutdata";

export default async function AboutUsRoute() {
  // 1. Fetch data on the Server
  const data = await getAboutData();

  // 2. Pass it down to the Client Component
  return (
    <main>
      <AboutUsComponent data={data} />
    </main>
  );
}