import "../styles/glare.css"
import { redirect, RedirectType } from 'next/navigation'
import Button from "../UI/Button"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Landing() {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect("/dashboard", RedirectType.replace)
  }
  return <>
    <div className="top-right-glare"></div>
    <div className="text-6xl text-white font-bold absolute left-20 top-32 font-mono">
      <p className="mb-3">Never Lose Track of</p>
      <p>Your Reels Again</p>
    </div>
    <div className="text-lg text-white absolute left-20 top-76 tracking-wide font-mono">
      <p>Transform your endless scrolling into a searchable collection.</p>
      <p>Keep a complete history of every Instagram Reel you've watched.</p>
      <p>Easily revisit, organize, and rediscover your watched Reels.</p>
    </div>
    <div className="absolute top-5 left-240 flex justify-center items-center gap-14">
    {/* add link tags on both buttons */}
    <Button variant="primary" text="Get Started" />
    <Button variant="secondary" text="Sign In" /> 
    </div>
  </>
}