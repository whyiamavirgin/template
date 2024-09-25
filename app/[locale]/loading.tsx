import { Spinner } from "@nextui-org/react"
import { useTranslations } from "next-intl"

export default function Loading() {

    const g = useTranslations('General')

    return(
        <div className="flex items-center w-full h-lvh justify-center">
            <Spinner label={`${g('loading')}...`} color="warning"/>
        </div>
    )
}