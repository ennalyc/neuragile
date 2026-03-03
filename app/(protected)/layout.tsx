import Navbar from '@/app/components/navbar/NavBar'
import { verifySession } from '../lib/dal'
import { redirect } from 'next/navigation'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sessionToken = await verifySession()
  if (!sessionToken.isAuth){
    redirect('/auth')
  }
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
