import Logout from "@/UI/components/Buttons/Logout";
import "../../styles/glare.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignIn from "@/UI/components/Buttons/SignIn";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return <div className="h-screen w-screen flex justify-center items-center">
            <div>
                <p className="text-orange-200 text-lg font-semibold font-mono">Please sign in first !</p>
                <div className="mt-6 ml-14">
                    <SignIn />
                </div>
            </div>
        </div>
    }
    return <>
        <div className="top-right-glare"></div>
        <div className="absolute top-5 left-280">
            <Logout />
        </div>

    </>
}