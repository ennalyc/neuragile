import AuthForm from "../../components/AuthForm"
import { verifySession } from '@/app/lib/dal'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function AuthPage() {
  const session = await verifySession()
  if (session.isAuth) {
    redirect('/') 
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
        <AuthForm/>
    </div>
  )
}
