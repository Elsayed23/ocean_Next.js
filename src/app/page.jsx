import Clients from "@/components/clients/Clients"
import Features from "@/components/features/Features"
import Header from "@/components/header/Header"
import Nav from "@/components/navbar/Navbar"
import Pricing from "@/components/pricing/Pricing"
import Testimonials from "@/components/testimonials/Testimonials"
import Footer from "@/components/footer/Footer"

const page = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <Nav />
        <Header />
        <Clients />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}

export default page