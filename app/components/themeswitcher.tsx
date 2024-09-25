'use client'

import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Wand } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ThemeSwitcher() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const g = useTranslations('General')

    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setMounted(true)
        if(theme === 'dark') {
            setIsSelected(true)
        } else {
            setIsSelected(false)
        }
    }, [])

    if(!mounted) {
        return null
    }



    const handleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
            setIsSelected(true)
        } else {
            setTheme('light')
            setIsSelected(false)
        }
    }

    const onSelectChange = (e:any) => {
        const nextTheme = e
        setTheme(e)
    }

    return(
        <Select
            defaultValue={theme}
            onValueChange={onSelectChange}
        >
        <SelectTrigger
          className="transition ease-in-out duration-200 h-6 w-14 rounded-lg border-none bg-white hover:bg-[#f3f4f6] dark:bg-black dark:hover:bg-gray-950"
        >
          <SelectValue>
            <Wand className="mr-2 h-4 w-4" />
          </SelectValue>
        </SelectTrigger>
        <SelectContent
            className="dark:bg-black"
            align="end"
        >
            <SelectItem value="dark" className="text-small">
                <p className="flex items-center gap-1">
                    {g('dark')}
                </p>
            </SelectItem>
            <SelectItem value="light" className="text-small">
                <p className="flex items-center gap-1">
                    {g('light')}
                </p>
            </SelectItem>
        </SelectContent>
      </Select>
    )
}