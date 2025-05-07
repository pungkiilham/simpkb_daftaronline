'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingStatus, setIsCheckingStatus] = useState(false)

  const handleRegistration = useCallback(() => {
    setIsLoading(true)
    try {
      console.log('Registration initiated')
    } catch (error) {
      console.error('Registration error:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleCheckStatus = useCallback(() => {
    setIsCheckingStatus(true)
    try {
      console.log('Checking status')
    } catch (error) {
      console.error('Status check error:', error)
    } finally {
      setIsCheckingStatus(false)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/dishub logo.png"
              alt="Logo Dishub"
              width={120}
              height={120}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dinas Perhubungan Kota Batu</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Uji Kendaraan Online</h2>
          <p className="text-xl text-gray-600 mb-8">Layanan pendaftaran uji kendaraan secara online yang mudah dan cepat</p>
          <div className="flex justify-center gap-4">
            <Link href="/daftar">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/status">
              <Button 
                size="lg" 
                variant="outline"
              >
                Cek Status Pendaftaran
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Mudah</CardTitle>
              <CardDescription>Proses pendaftaran yang simpel dan cepat</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Daftar uji kendaraan hanya dengan beberapa langkah mudah dari mana saja dan kapan saja.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aman</CardTitle>
              <CardDescription>Data terjamin keamanannya</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Sistem kami menjamin keamanan data dan informasi pribadi Anda.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Efisien</CardTitle>
              <CardDescription>Hemat waktu dan tenaga</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Tidak perlu antri panjang, proses lebih efisien dengan sistem online.</p>
            </CardContent>
          </Card>
        </div>

        {/* Steps Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cara Pendaftaran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Isi Data", desc: "Lengkapi formulir pendaftaran online" },
              { step: "2", title: "Upload Dokumen", desc: "Unggah dokumen yang diperlukan" },
              { step: "3", title: "Selesai", desc: "Dapatkan nomor registrasi" },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2">
                    {item.step}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Mendaftar?</h2>
          <p className="text-xl text-gray-600 mb-8">Mulai proses pendaftaran uji kendaraan Anda sekarang</p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleRegistration}
            disabled={isLoading}
          >
            {isLoading ? 'Memproses...' : 'Mulai Pendaftaran'}
          </Button>
        </div>
      </div>
    </main>
  )
}