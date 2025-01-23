"use client";

import React, { useEffect, useState } from "react";

import "../assets/css/satoshi.css"
import "../assets/css/style.css"


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <html lang="pt-br" >

            <head>

            </head>
            <body
            // suppressHydrationWarning={false}
            >
                {/* <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WN4QCZK6"
          height="0"
          width="0"
        ></iframe> */}
                <div className="dark:bg-boxdark-2 dark:text-bodydark" >
                    {children}
                </div>
            </body>
        </html>
    );
}
