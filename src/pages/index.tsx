import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/NavBar'


export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen w-full relative flex flex-col items-center Sf-pro">
        <Navbar/>
          <div className="w-screen h-screen bg-light-gray"></div>
        <Footer/>
      </main>
    </Layout>
  )
}
