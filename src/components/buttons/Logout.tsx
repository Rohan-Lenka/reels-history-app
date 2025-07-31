'use client'

import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

export default function Logout() {
    return <Button text="Logout" variant="primary" onClick={() => {
        signOut({ callbackUrl: '/', redirect: true })
    }} />
}