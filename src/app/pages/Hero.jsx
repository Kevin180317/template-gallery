import Image from 'next/image'
import React from 'react'
import 'tailwindcss/tailwind.css'

function Photographer() {
  return (
    <div className="flex items-center justify-center min-h-screen p-24 bg-black">
      <div className="flex flex-col gap-8 px-12 py-8 md:flex-row">
        <div className='flex items-center flex-1 gap-4'>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-blue-500">
  Fotógrafo especializado en retratos y paisajes
</h1>        </div>
        <div className='flex-1'>
          <Image width={700} height={300} src="/hero.svg" alt="Imagen aleatoria de Unsplash" />
        </div>
      </div>
    </div>
  )
}

export default Photographer