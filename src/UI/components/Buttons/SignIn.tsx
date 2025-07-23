"use client"

import Button from "@/UI/Button"
import { signIn } from "next-auth/react"

export default function SignIn() {
    return <Button variant="secondary" text="Sign In" onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })} />
}