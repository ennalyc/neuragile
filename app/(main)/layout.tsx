import Navbar from '@/app/components/navbar/NavBar'
import { verifySession } from '../lib/dal'

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await verifySession()
    return (
        <section>
        <Navbar />
        {children}
        </section>
    )
}