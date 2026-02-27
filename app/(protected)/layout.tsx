import Navbar from '@/app/components/navbar/NavBar'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
