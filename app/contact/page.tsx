// Notice the updated path here! It now matches your "contactus" folder and file perfectly.
import ContactComponent from "@/app/components/contactus/contactus";
import { getContactData } from "@/app/lib/data/contactdata";

export default async function ContactRoute() {
  // 1. Fetch data on the Server
  const data = await getContactData();

  // 2. Pass it down to the Client Component
  return (
    <main>
      <ContactComponent data={data} />
    </main>
  );
}
