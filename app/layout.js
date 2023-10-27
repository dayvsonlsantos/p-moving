import Navbar from '@/components/navbar'
import './globals.css' 
import Footer from '@/components/footer'
import NavbarMobile from '@/components/navbar_mobile'

export const metadata = {
  title: 'Moving',
  description: 'Um RH estratégico, alinhado ao negócio focado no desenvolvimento organizacional com profissionais Especialistas em Gestão de Pessoas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='relative text-moving-blue'>
        <NavbarMobile/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
