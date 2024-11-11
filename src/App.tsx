import Hero from "./components/Hero";
import Ingredient from "./components/Ingredient";
import Instruction from "./components/Instruction";
import Nutrition from "./components/Nutrition";
import Preparation from "./components/Preparation";

export default function App() {
  return (
    <main className="font-Outfit bg-rose50 min-h-screen sm:py-6 ">
      <section className="max-w-2xl mx-auto bg-white sm:rounded-2xl sm:p-6">
      <Hero/>
      <Preparation/>
      <Ingredient/>
      <Instruction/>
      <Nutrition/>
      </section>
    </main>
  )
}