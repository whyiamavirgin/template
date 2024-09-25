"use client"

import clsx from "clsx"
import { useParams } from "next/navigation"
import { ChangeEvent, ReactNode, useTransition } from "react"
import { useRouter, usePathname } from "../navigation"
import { DropdownMenu, DropdownItem } from "@nextui-org/react"
import { useLocale, useTranslations } from "next-intl";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Image from "next/image"



  export default function LocaleSwitcherSelect() {

    const locales = ['ru', 'en', 'de']

    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale()

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
  
    const onSelectChange = (e:string) => {
      const nextLocale = e
      startTransition(() => {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          {pathname, params},
          {locale: nextLocale}
        );
      });
    }
    

    return (
          <Select
            defaultValue={locale}
            disabled={isPending}
            onValueChange={onSelectChange}
          >
            <SelectTrigger
              className="transition ease-in-out duration-200 h-6 w-16 rounded-lg border-none bg-white hover:bg-[#f3f4f6] dark:bg-black dark:hover:bg-gray-950"
            >
              <SelectValue>
                {locale.toUpperCase()}
              </SelectValue>
            </SelectTrigger>
            <SelectContent
             className="dark:bg-black"
             align="end"
            >
              {locales.map((cur,index) => (
                  <SelectItem key={index} value={cur} className="text-small">
                    <p className="flex items-center content-center gap-1">
                      <img
                        src={cur == 'en' ? `https://flagcdn.com/w20/us.png` : `https://flagcdn.com/w20/${cur}.png`}
                        width='16'
                        className="pt-1"
                      ></img>
                      {t('locale', {locale: cur})}
                    </p>
                  </SelectItem>
              ))}
            </SelectContent>
          </Select>
    );
  }