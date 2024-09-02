import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl-padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        Popular Products
      </section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10">
        Services
      </section>
      <section className="padding">Special Offers</section>
      <section className="bg-pale-blue padding">
        Customer Reviews
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        Subscribe
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        Footer
      </section>
    </main>
  );
};

export default App;
