import { redirect } from "next/navigation"
import AuthForm from "../../../components/AuthForm"
import { verifySession } from "@/app/lib/dal"

export default async function AuthPage() {
  const sessionToken = await verifySession()
  if (sessionToken.isAuth){
    redirect('/')
  }
  return (
    <div className="w-full min-h-150 max-h-dvh flex justify-center items-center">
        <AuthForm/>
    </div>
  )
}
