
import Head from 'next/head'
import Footer from './Footer';
import Navbar from './NavBar';

interface LayoutProps {
    title?: string,
    children: React.ReactNode;
    footerBgColor?: string
}

const Layout = (props: LayoutProps) => {
    const {title, children, footerBgColor} = props

    return (
        <main className='Sf-pro'>
            <Head>
                <title>{title ? title : "PKA Renov"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width,"/>
                <meta property="og:image" content="https://www.pkarenov.fr/logo_pka.png"/>
                <meta property="twitter:image" content="https://www.pkarenov.fr/logo_pka.png"/>
                <meta name="google" content="notranslate"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content="PKA Renov"></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PKA Renov" />
                <meta property="og:url" content="https://www.pkarenov.fr/logo_pka.png"></meta>
                <meta property="og:site_name" content="https://www.pkarenov.fr/logo_pka.png"></meta>
                <meta property="og:description" content="Présentation de PKA Renov - entreprise de rénovation" />
                <meta property="twitter:description" content="Présentation de PKA Renov - entreprise de rénovation"></meta>
                <meta name="description" content="Présentation de PKA Renov - entreprise de rénovation" />
                <meta name="keywords" content="pierrekevin - pierre - kevin - pierre-kevin - pierre kevin - pka - pkarenov  - pka renov - pka-renov  - renov -pkarénov  - pka rénov - pka-rénov  - rénov - rénovation - carrelage - plaquiste - carreleur - placo - sol - batiment - lyon"></meta> 
            </Head>
            <main className="min-h-screen w-full relative flex flex-col items-center overflow-x-hidden overflow-y-auto">
                <Navbar/>
                    {children}
                <Footer bgColor={footerBgColor}/>
             </main>
        </main>
  );
}

export default Layout
