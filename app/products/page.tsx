import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import ProductCard from "../components/ui/ProductCard";
import { products } from "../data/products";
export default function ProductsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="section">
        <div className="container">
          <SectionHeading
            eyebrow="OUR PRODUCTS & SERVICES"
            title="Print solutions for your next big idea."
            description="Explore business cards, flyers, signage and brochures. Contact us if you have a specific product or custom requirement in mind."
          />
          <div className="product-grid product-grid--four">
            {products.map((product, index) => (
              <div id={product.href.split("#")[1]} key={product.title}>
                <ProductCard {...product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}