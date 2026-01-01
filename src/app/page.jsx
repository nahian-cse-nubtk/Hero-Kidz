import Banner from "@/components/Home/Banner";
import Products from "@/components/Products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>

      </section>
    </div>
  );
}
