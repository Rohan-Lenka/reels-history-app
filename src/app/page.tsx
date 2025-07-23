import GetStarted from "@/UI/components/Buttons/GetStarted"
import "../styles/glare.css"
import SignIn from "@/UI/components/Buttons/SignIn"
import Arrow from "@/icons/Arrow"

export default function Landing() {
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
    <div className="absolute top-116 left-1/2 border-2 border-indigo-400 rounded-full p-1 animate-bounce">
    <Arrow />
    </div>
    <div className="absolute top-5 left-240 flex justify-center items-center gap-14">
      <GetStarted />
      <SignIn />
    </div>
  </>
}