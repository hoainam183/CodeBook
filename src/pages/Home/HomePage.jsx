import {Hero} from "./components/Hero"
import {FeaturedProducts} from "./components/FeaturedProducts"
import {Testimonials} from "./components/Testimonials"
import {Faq} from "./components/Faq"
import useTilte from "../../hooks/useTilte"
export default function HomePage() {
  useTilte("Home Page");
  return (
    <main>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials/>
      <Faq/>
    </main>
  )
}
