import data_characters from "@/data/main_characters.json"

export default function Home() {

  const main_characters = data_characters.characters

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full md:w-2/4 h-[40vh] p-3">
        <p className="text-center">Pilih karakter utama Anda</p>
        <div className="w-full h-full flex gap-3">
          {main_characters.map((mc) => (
            <div key={mc.role} className="w-full h-full rounded-md shadow-md flex flex-col items-center justify-center gap-3">
              <p>{mc.role}</p>
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