'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

type StatusType = 'sedang_proses' | 'ditolak' | 'diterima'

interface StatusInfo {
  status: StatusType
  message: string
  queueNumber?: string
  estimatedTime?: string
  reason?: string
}

export default function StatusPage() {
  const [isChecking, setIsChecking] = useState(false)
  const [statusInfo, setStatusInfo] = useState<StatusInfo | null>(null)

  const generateRandomStatus = (): StatusInfo => {
    const statuses: StatusType[] = ['sedang_proses', 'ditolak', 'diterima']
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
    
    const baseInfo = {
      status: randomStatus,
      message: ''
    }

    switch (randomStatus) {
      case 'sedang_proses':
        return {
          ...baseInfo,
          message: 'Permohonan Anda sedang dalam proses verifikasi.'
        }
      case 'ditolak':
        return {
          ...baseInfo,
          message: 'Mohon maaf, permohonan Anda ditolak.',
          reason: 'Dokumen persyaratan tidak lengkap/tidak sesuai.'
        }
      case 'diterima':
        const queueNumber = `Q${Math.floor(Math.random() * 100).toString().padStart(3, '0')}`
        const hours = Math.floor(Math.random() * 3) + 8 // Random hour between 8-10
        const minutes = Math.floor(Math.random() * 60)
        return {
          ...baseInfo,
          message: 'Selamat! Permohonan Anda telah diterima.',
          queueNumber,
          estimatedTime: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
        }
    }
  }

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsChecking(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatusInfo(generateRandomStatus())
    } catch (error) {
      console.error('Check error:', error)
    } finally {
      setIsChecking(false)
    }
  }

  const renderStatusInfo = () => {
    if (!statusInfo) return null

    return (
      <div className="mt-6 p-4 rounded-lg border">
        <div className={`text-lg font-semibold mb-2 ${
          statusInfo.status === 'diterima' ? 'text-green-600' :
          statusInfo.status === 'ditolak' ? 'text-red-600' :
          'text-blue-600'
        }`}>
          {statusInfo.message}
        </div>
        
        {statusInfo.status === 'diterima' && (
          <div className="space-y-2 mt-4">
            <div className="bg-green-50 p-3 rounded">
              <p className="font-medium">Nomor Antrian: <span className="text-green-700">{statusInfo.queueNumber}</span></p>
              <p className="text-sm mt-1">Silakan datang pada pukul <span className="font-medium">{statusInfo.estimatedTime}</span> WIB</p>
            </div>
            <p className="text-sm text-gray-600">
              Mohon datang 30 menit sebelum waktu yang ditentukan dan membawa dokumen asli yang telah diupload sebelumnya.
            </p>
          </div>
        )}

        {statusInfo.status === 'ditolak' && (
          <div className="bg-red-50 p-3 rounded mt-2">
            <p className="text-sm text-red-700">Alasan: {statusInfo.reason}</p>
            <p className="text-sm mt-2">Silakan perbaiki dokumen Anda dan melakukan pendaftaran ulang.</p>
          </div>
        )}

        {statusInfo.status === 'sedang_proses' && (
          <p className="text-sm text-gray-600 mt-2">
            Silakan cek status secara berkala. Kami akan memproses permohonan Anda secepatnya.
          </p>
        )}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/dishub logo.png"
              alt="Logo Dishub"
              width={100}
              height={100}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Dinas Perhubungan Kota Batu</h1>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Cek Status Pendaftaran</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCheck} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Nomor Registrasi / Nomor Kendaraan</Label>
                <Input 
                  id="registrationNumber" 
                  placeholder="Masukkan nomor registrasi / nomor kendaraan" 
                  required 
                />
              </div>

              {renderStatusInfo()}

              <div className="flex gap-4 justify-end">
                <Link href="/">
                  <Button variant="outline" type="button">Kembali</Button>
                </Link>
                <Button type="submit" disabled={isChecking}>
                  {isChecking ? 'Memeriksa...' : 'Cek Status'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}