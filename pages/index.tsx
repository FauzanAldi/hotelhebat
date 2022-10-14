import Image from "next/image"
import gambarUtama from "../public/gambar-utama.jpeg"
import kamar from "../public/kamar.jpeg"
import Link from "next/link"

import axios from "axios";
import useSWR from "swr";
import { apiLink, apiUrl } from "../config/config";
import React from "react";
import { fetcher } from "../helper/network";

const HotelItem: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="w-[24%] h-auto shadow-xl rounded-xl bg-white pb-5">
      <div className="h-[300px] relative">
        <Image src={item?.picture} className="rounded-t-xl" layout="fill" objectFit="cover" placeholder="blur" blurDataURL={item.picture}
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-2xl">{item?.name}</h3>
        <h5 className="text-md mb-3">Mulai dari IDR {item?.price}</h5>
        <Link href={"/kamar/" + item.id}>
          <a className="py-1 px-7 bg-yellow-500 text-white rounded-full hover:bg-orange-500">Lihat Kamar</a>
        </Link>
      </div>
    </div>
  )
}

export default function Home() {

  const { data, error } = useSWR(
    apiLink + '/getKamar/',
    fetcher
  );

  const mapItem = (item: any) => {
    return <HotelItem item={item} />
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
          <Image src={gambarUtama} className="rounded-xl" alt="Thumbnail Sekolah" layout="fill" objectFit="cover" placeholder="blur" // Optional blur-up while loading 
          />
        </div>
        <div className="w-[95%] mx-auto h-[200px] rounded-md bg-white shadow-md relative z-10 -mt-20 p-20">
          <div className="flex flex-row flex-wrap justify-between">
            <div className="w-[20%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Tanggal Masuk</label>
              <input type="date" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div className="w-[20%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Tanggal Keluar</label>
              <input type="date" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div className="w-[20%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipe Kamar</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option>Standard Room</option>
                <option>Queen Room</option>
                <option>King Room</option>
              </select>
            </div>
            <div className="w-[10%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Jumlah Kamar</label>
              <input type="number" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div className="w-[25%] flex justify-end items-end">
              <a href="" className="px-5 py-3 bg-yellow-500 text-white rounded-xl hover:bg-orange-500">Cek Ketersediaan</a>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 text-center">
          <h1 className="font-bold text-4xl">Tipe Kamar</h1>
        </div>
        <div className="flex flex-row flex-wrap mb-5 justify-between">
          {data && data.map(mapItem)}

        </div>
        <div className="mt-10 mb-5 text-center">
          <h1 className="font-bold text-4xl">Fasilitas Hotel</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-between mb-5">
          <div className="w-[19%] h-[200px] relative">
            <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
              <h3 className="text-white text-2xl">Meeting Room</h3>
            </div>
            <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
          </div>
          <div className="w-[19%] h-[200px] relative">
            <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
              <h3 className="text-white text-2xl">Restaurant</h3>
            </div>
            <Image src={kamar} className="rounded-xl" layout="fill" objectFit="cover" />
          </div>
          <div className="w-[19%] h-[200px] relative">
            <div className="w-full bg-black/[.40] hover:bg-orange-400/[0.40] h-[200px] absolute z-10 flex justify-center items-center rounded-xl">
              <h3 className="text-white text-2xl">Gym</h3>
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