"use client"

import { Spacer } from "@nextui-org/react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"

const footerLinks = [
    {
        name: "terms"
    },
    {
        name: "privacy"
    }
]

export function Footer() {

    const locale = useLocale()
    const router = useRouter()
    const g = useTranslations('General')

    return(
        <footer className="bg-black text-white py-6 px-1 md:px-10">
            <div className="container md:mx-auto flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:items-center">
                <p>&copy; Template</p>
            </div>
        </footer>
    )
}