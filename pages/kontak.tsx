import Image from "next/image"
import gambarUtama from "../public/gambar-utama.jpeg"
import kamar from "../public/kamar.jpeg"
import kontakKami from "../public/kontakkami.png"
import Link from "next/link"

import { useForm } from "react-hook-form"
import { postData } from "../helper/network"
import { apiLink } from "../config/config"

export default function Kontak() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const result = await postData(apiLink + "/saveKontak", data);
    console.log(result);
  }

  return (
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

            <h1 className="text-4xl font-medium">Kontak Kami</h1>



          </div>
        </div>
        <div className="mt-10 mb-5 text-center">
          <h1 className="font-bold text-lg text-left">Tinggalkan Kritik dan Saran Anda Disini:</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row flex-wrap">
          <div className="w-1/2">
            <div className="mb-3">
              <label htmlFor="" className="block text-slate-600">Nama Anda :</label>
              <input {...register('name')} type="text" className="w-3/4 rounded-xl p-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="block text-slate-600">Email :</label>
              <input {...register('email')} type="email" className="w-3/4 rounded-xl p-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-10">
              <label htmlFor="" className="block text-slate-600"> Kritik dan Saran :</label>

              <textarea {...register('message')} id="message" className="block p-3 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

            </div>
            {/* <Link href=""> */}
            <button type="submit" className="py-3 px-5 bg-orange-300 text-white rounded-xl hover:bg-orange-700">Kirim Pesan</button>
            {/* </Link> */}
          </div>
          <div className="w-1/2">
            <Image
              src={kontakKami}
            />
          </div>
        </form>


      </div>
    </>
  )
}