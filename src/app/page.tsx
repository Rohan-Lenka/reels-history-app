import GetStarted from "@/components/buttons/GetStarted"
import "../styles/glare.css"
import SignIn from "@/components/buttons/SignIn"
import Arrow from "@/icons/Arrow"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Manual } from "@/components/Manual"

export default async function Landing() {

  const session = await getServerSession(authOptions);
  if(session) {
    redirect('/dashboard');
  }

  return <>
    <div className="top-right-glare"></div>
    <div className="text-6xl text-white font-bold absolute left-20 top-32 font-mono">
      <p className="mb-3">Never Lose Track of</p>
      <p>Your Reels Again</p>
    </div>
    <div className="text-lg text-white absolute left-20 top-76 tracking-wide font-mono">
      <p>Transform your endless scrolling into a searchable collection.</p>
      <p>Keep a complete history of every Instagram Reel you&apos;ve watched.</p>
      <p>Easily revisit, organize, and rediscover your watched Reels.</p>
    </div>
    <div className="absolute top-116 left-1/2 border-2 border-indigo-400 rounded-full p-1 animate-bounce">
    <Arrow />
    </div>
    <div className="absolute top-5 left-240 flex justify-center items-center gap-14">
      <GetStarted />
      <SignIn />
    </div>
    <div className="w-full absolute top-145 text-6xl font-mono text-white font-bold text-center">
      <p className="ml-8">How to Setup ?</p>
    </div>
    <div id="div-with-manual" className="absolute top-142 w-full ">
      <Manual />
    </div>
  </>
}