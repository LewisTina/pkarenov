import Chart from '@/components/Chart'
import ContactUs from '@/components/ContactUs'
import Cover from '@/components/Cover'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/NavBar'
import Prestations from '@/components/Prestations'
import Realizations from '@/components/Realizations'


export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen w-full relative flex flex-col items-center Sf-pro overflow-x-hidden overflow-y-auto">
        <Navbar/>
        <Cover/>
        <Chart/>
        <Prestations/>
        <Realizations/>
        <ContactUs/>
        <Footer/>
      </main>
    </Layout>
  )
}
