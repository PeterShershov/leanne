import { Navbar } from "~/components/navbar/navbar";
import { Hero } from "~/components/hero/hero";
import { About } from "~/components/about/about";
import { AdlerianWay } from "~/components/adlerian-way/adlerian-way";
import { Services } from "~/components/services/services";
import { ContactForm } from "~/components/contact-form/contact-form";
import { Footer } from "~/components/footer/footer";
import { WhatsappButton } from "~/components/whatsapp-button/whatsapp-button";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AdlerianWay />
        <Services />
        <ContactForm />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
