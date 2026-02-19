import Navbar from '@/app/components/navbar/NavBar'
import { verifySession } from '../lib/dal'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await verifySession()
  const cookieStore = await cookies()
  if (!session.isAuth) {
    redirect('/auth')
  }

  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
