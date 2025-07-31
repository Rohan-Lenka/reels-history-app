'use client'

import Button from "../ui/Button";

export default function GetStarted() {
    return <Button text="Get Started" variant="primary" onClick={() => {
        document.getElementById("div-with-manual")?.scrollIntoView({ behavior: "smooth" })
    }}/>
}