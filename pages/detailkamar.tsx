import Image from "next/image"
import gambarUtama from "../public/gambar-utama.jpeg"
import kamar from "../public/kamar.jpeg"
import Link from "next/link"

export default function detailKamar() {
    return(
        <>
        <div className="container mx-auto">
      <div className="h-[100px] flex flex-row flex-wrap items-center">
        <div className="w-[30%]">
          <h1 className="font-medium text-2xl uppercase">Hotel Hebat</h1>
        </div>
        <div className="w-[50%]">
          <ul className="flex flex-row justify-end space-x-14">
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-black hover:text-blue-400">Beranda</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-black hover:text-blue-400">Tipe Kamar</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-black hover:text-blue-400">Fasilitas</a>
            </li>
            <li>
              <a href="/kontak" className="block py-2 pr-4 pl-3 text-black hover:text-blue-400">Kontak Kami</a>
            </li>
          </ul>
        </div>
        <div className="w-[20%] flex flex-row flex-wrap justify-end space-x-3">
          <a href="" className="px-5 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-800">Login</a>
          <a href="" className="px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-900">Register</a>
        </div>
      </div>
      <div className="w-full h-[600px] bg-slate-400 rounded-xl relative">
        <Image src={kamar} className="rounded-xl" alt="Thumbnail Sekolah" layout="fill" objectFit="cover" placeholder="blur" // Optional blur-up while loading 
        />
      </div>
      <div className="w-[95%] mx-auto h-[200px] rounded-md bg-white shadow-md relative z-10 -mt-20 p-20">
          <div className="flex flex-row flex-wrap justify-between">
           <div className="w-[80%]">
              <h1 className="text-4xl font-medium">King Room</h1>
              <h4 className="text-xl text-slate-400">IDR 700.000 / Malam</h4>
            </div>
            <div className="w-[20%] flex justify-end items-end">
              <a href="" className="px-5 py-3 bg-yellow-500 text-white rounded-xl hover:bg-orange-500">Booking Sekarang!</a>
            </div>
          </div>
      </div>
      <div className="mt-10 mb-5 text-center">
        <h1 className="font-bold text-lg text-left">Deskripsi Kamar</h1>
      </div>
      <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p className="text-justify">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="mt-10 mb-5 text-center">
        <h1 className="font-bold text-lg text-left">Fasilitas Kamar</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-between mb-5">
        <div className="w-[19%] h-[200px] relative">
          <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
            <h3 className="text-white text-2xl">TV Kabel</h3>
          </div>
          <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
        <div className="w-[19%] h-[200px] relative">
          <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
            <h3 className="text-white text-2xl">Bathtube</h3>
          </div>
          <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
        <div className="w-[19%] h-[200px] relative">
          <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
            <h3 className="text-white text-2xl">Balcony</h3>
          </div>
          <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
        <div className="w-[19%] h-[200px] relative">
          <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
            <h3 className="text-white text-2xl">Swimming Pool</h3>
          </div>
          <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
        <div className="w-[19%] h-[200px] relative">
          <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
            <h3 className="text-white text-2xl">Ballroom</h3>
          </div>
          <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
        </>
    )
}