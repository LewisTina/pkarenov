import Chart from '@/components/Chart'
import Cover from '@/components/Cover'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/NavBar'
import Prestations from '@/components/Prestations'


export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen w-full relative flex flex-col items-center Sf-pro">
        <Navbar/>
        <Cover/>
        <Chart/>
        <Prestations/>
        <Footer/>
      </main>
    </Layout>
  )
}
