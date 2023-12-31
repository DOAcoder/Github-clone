import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import './globals.css'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
       <main className=' min-h-screen mt-[100px]'>
          <div className='container'>
            <div className='flex gap-x-2 '>
              <div>
                <SideBar/>
              </div>
              <div className='grow '>
                {children}
              </div>
            </div>
           
          </div>
       </main>
        <Footer/>
        </body>
    </html>
  )
}
