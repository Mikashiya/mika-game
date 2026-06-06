"use client"

import { useState } from "react"
import data_characters from "@/data/main_characters.json"
import data_armoury from "@/data/armoury.json"

export default function Home() {

  const [nextPage, setNextPage] = useState<string | null>(null)

  const handleNextPage = (page: string) => {
    setNextPage(page)
  }

  const main_characters = data_characters.characters

  const character_armoury = data_armoury.classes.Tank["Helmet"]

  if (nextPage === "Tank") {
    return (
      <div>
        {character_armoury.map(armour_tank => {
          <div>
            {item.hp}
          </div>
        })}
      </div>
    )
  } else if (nextPage === "Fighter") {
    return (
      <div>

      </div>
    )
  } else if (nextPage === "Mage") {
    return (
      <div>
        
      </div>
    )
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full md:w-2/4 h-[40vh] p-3">
        <p className="text-center">Pilih karakter utama Anda</p>
        <div className="w-full h-full flex gap-3">
          {main_characters.map((mc) => (
            <div onClick={() => handleNextPage(mc.role)} key={mc.role} className="w-full h-full rounded-md shadow-md flex flex-col items-center justify-center gap-3">
              <p>{mc.role} - {mc.name}</p>
              <div className="space-y-1">
                <span className="md:flex"><p className="md:w-30">HP :</p><span>{mc.hp}</span></span>
                <span className="md:flex"><p className="md:w-30">ATTACK :</p><span>{mc.attack}</span></span>
                <span className="md:flex"><p className="md:w-30">DEFENCE :</p><span>{mc.defence}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}