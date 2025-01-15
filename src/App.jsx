import Hero from "./Sections/Hero.jsx";
import Footer from "./Sections/Footer.jsx";
import CustomerReviews from "./Sections/CustomerReviews.jsx";
import PopularProducts from "./Sections/PopularProducts.jsx";
import Services from "./Sections/Services.jsx";
import SuperQuality from "./Sections/SuperQuality.jsx";
import Subscribe from "./Sections/Subscribe.jsx";
import SpecialOffer from "./Sections/SpecialOffer.jsx";
import Nav from "./Components/Nav.jsx";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
