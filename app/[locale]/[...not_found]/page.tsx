"use client"

import React, { useEffect, useState } from "react";
import axios from "axios"
import { Button } from "@nextui-org/react";
import { SadIcon } from "@/app/ui/icons/icons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";


export default function NotFound() {

  const [data, setData] = useState()
  const router = useRouter()
  const g = useTranslations('General')

  const fetchData = async () => {

    try {
      const responseData = await axios.get(
        "https://catfact.ninja/fact"
      )
      setData(responseData.data.fact)
      // console.log(responseData.data)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    fetchData()
  }, [])

  return(

    <div className="text-center m-auto h-screen w-5/6">
        <div className="grid gap-y-8 content-center h-5/6">
          <p className="flex text-[100px] md:text-6xl font-bold m-auto gap-5 items-center"><SadIcon />{g('404Oops')}!</p>
          <p className="text-4xl text-gray-500">{g('404')}</p>
          <Button
            onClick={() => router.push('/')}
            color="primary"
            variant="solid"
            className="w-70 m-auto"
          >
            {g('404Home')}
          </Button>
          {/* <p className="mt-20 text-lg">{g('404RandomCatFact')} : </p>
          {data ? <p className="text-sm">{data}</p> : <p className="text-sm">{g('loading')}...</p> } */}
        </div>      
    </div>
  )

}
