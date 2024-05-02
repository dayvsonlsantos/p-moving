import './globals.css' 

export const metadata = {
  title: 'Moving',
  description: 'Um RH estratégico, alinhado ao negócio focado no desenvolvimento organizacional com profissionais Especialistas em Gestão de Pessoas.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='relative text-moving-blue'>
        {children}
      </body>
    </html>
  )
}
