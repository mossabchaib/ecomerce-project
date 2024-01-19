import Sid from './Component/Sid'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Adimin page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background:'#fff',color:'#000',height:"1000px"}}>
       
        <div>
          <Sid>
          {children}
          </Sid>
          </div>
      
        </body>
    </html>
  )
}
