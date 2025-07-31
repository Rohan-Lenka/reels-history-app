import db from "@/db";
import { Payload } from "@/types";
import { arrayUnion, doc, setDoc } from "firebase/firestore/lite";
import { NextResponse } from "next/server";

// for CORS issue 
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://www.instagram.com/*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
    try {
        const payload: Payload = await req.json();
        await setDoc(doc(db, process.env.COLLECTION || "reels history collection", payload.email), {
            reels: arrayUnion({
                reelUrl: payload.reelUrl,
                date: payload.date,
                time: payload.time,
            })
        }, { merge: true })
        return NextResponse.json({ message: "Reel added to firestore successfully" }, { status: 200 })
    } catch (err: unknown) {
        const error = err as Error;
        return NextResponse.json({ message: "Reel could not be added to firestore", error: error.message }, { status: 500 })
    }
}