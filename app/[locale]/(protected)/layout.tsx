import Navbar from '@/app/components/navbar/NavBar'
import { verifySession } from '../../lib/dal'
import { redirect } from 'next/navigation'
import { getLocale } from 'next-intl/server'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionToken = await verifySession()
  const locale = await getLocale()
  
  if (!sessionToken.isAuth){
    redirect(`/${locale}/auth`)
  }
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}