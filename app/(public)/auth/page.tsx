import AuthForm from "../../components/AuthForm"
import { verifySession } from '@/app/lib/dal'
import { redirect } from 'next/navigation'

export default async function AuthPage() {
  const session = await verifySession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
        <AuthForm/>
    </div>
  )
}
