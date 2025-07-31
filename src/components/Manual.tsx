'use client'

import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function Manual() {

    const data = [
        {
            title: "Get Extension",
            content: (
                <div>
                    <ManualItem heading="Download the Chrome extension from the official GitHub repository:"
                        contents={["Visit the GitHub repository URL provided bellow.",
                            "Click on the “Code” button and choose “Download ZIP”.",
                            "After downloading, unzip the file.",
                            "Store the extracted folder in a location you can easily find later (e.g., Desktop or Documents)."]}
                        link={{ url: "https://github.com/Rohan-Lenka/reels-history-extension", text: "Click here for Github repository" }} />
                </div>
            ),
        },
        {
            title: "Load Extension",
            content: (
                <div>
                    <ManualItem heading="Install the extension manually into Chrome:"
                        contents={["Open Google Chrome.",
                            "In the top right, click on the 3 dots.",
                            "Go to Extensions -> Manage Extensions.",
                            "Enable the “Developer mode” toggle at the top right.",
                            "Click “Load unpacked”.",
                            "Browse to the location where you unzipped the extension and select the extension folder."
                        ]} />
                </div>
            )
        },
        {
            title: "Register on Extension",
            content: (
                <div>
                    <ManualItem heading="Register via the extension (must be done on Instagram's website):"
                        contents={["Go to instagram.com in chrome.",
                            "Click on the extension icon in the Chrome toolbar to open it.",
                            "Go to Extensions -> Manage Extensions.",
                            "Enter your email to register.",
                            "This email will be used later to view your reels history."
                        ]} />
                </div>
            )
        },
        {
            title: "Almost Done",
            content: (
                <div>
                    <ManualItem heading="Sign in to main app:"
                        contents={["Sign in here using the same email you registered on the extension.",
                            "Once logged in, you'll be taken to your personalized dashboard.",
                        ]} />
                </div>
            )
        },
        {
            title: "Enjoy !",
            content: (
                <div>
                    <ManualItem heading="Trigger the app by simply using Instagram:"
                        contents={["Return to instagram.com.",
                            "Start watching reels as usual.",
                            "Your reels watch history will begin appearing in your app dashboard."
                        ]} />
                </div>
            )
        }
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

interface ManualItemProps {
    heading: string
    contents: string[]
    link?: {
        url: string,
        text: string
    }
}

function ManualItem({ heading, contents, link }: ManualItemProps) {
    return <>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            {heading}
        </p>
        <div className="mb-8">
            {contents.map((content, key) => {
                return <div key={key} className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-2">
                    - {content}
                </div>
            })}
            {link && <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-2 mt-8">
                <a className="hover:underline" href={link?.url} target="_blank">-{link?.text}</a>
            </div>
            }
        </div>
    </>
}