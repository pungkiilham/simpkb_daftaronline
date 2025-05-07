'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function DaftarPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedLayanan, setSelectedLayanan] = useState("")
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      setShowSuccessDialog(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDialogClose = () => {
    setShowSuccessDialog(false)
    router.push('/') // Redirect to home page
  }

  const layananOptions = [
    { value: "daftar_baru", label: "Daftar Baru" },
    { value: "perpanjang", label: "Perpanjang" },
    { value: "numpang_uji_masuk", label: "Numpang Uji Masuk" },
    { value: "numpang_uji_keluar", label: "Numpang Uji Keluar" },
    { value: "mutasi_masuk", label: "Mutasi Masuk" },
    { value: "mutasi_keluar", label: "Mutasi Keluar" },
    { value: "perubahan", label: "Perubahan" },
    { value: "lainnya", label: "Lainnya (Rusak/Hilang)" },
  ]

  const renderDokumenPersyaratan = () => {
    switch (selectedLayanan) {
      case 'daftar_baru':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="srut">Scan SRUT</Label>
              <Input id="srut" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stnk">Scan STNK</Label>
              <Input id="stnk" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identitas">Scan Identitas Pemohon</Label>
              <Input id="identitas" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
          </>
        )
      case 'perpanjang':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="blue">Scan BLUE</Label>
              <Input id="blue" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stnk">Scan STNK</Label>
              <Input id="stnk" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identitas">Scan Identitas Pemohon</Label>
              <Input id="identitas" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
          </>
        )
      case 'numpang_uji_masuk':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="rekomendasi">Scan Surat Rekomendasi Numpang Uji Wilayah Asal</Label>
              <Input id="rekomendasi" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="blue">Scan BLUE</Label>
              <Input id="blue" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stnk">Scan STNK</Label>
              <Input id="stnk" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identitas">Scan Identitas Pemohon</Label>
              <Input id="identitas" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
          </>
        )
      case 'numpang_uji_keluar':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="blue">Scan BLUE</Label>
              <Input id="blue" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stnk">Scan STNK</Label>
              <Input id="stnk" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identitas">Scan Identitas Pemohon</Label>
              <Input id="identitas" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rekomendasi">Scan Surat Rekomendasi Penumpang Uji dari Wilayah Asal</Label>
              <Input id="rekomendasi" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="srut">Scan SRUT</Label>
              <Input id="srut" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
          </>
        )
      case 'mutasi_masuk':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="permohonan">Scan Surat Permohonan Mutasi</Label>
              <Input id="permohonan" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fiskal">Scan Surat Fiskal</Label>
              <Input id="fiskal" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="blue">Scan BLUE</Label>
              <Input id="blue" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stnk">Scan STNK</Label>
              <Input id="stnk" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identitas">Scan Identitas Pemohon</Label>
              <Input id="identitas" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
          </>
        )
      case 'mutasi_keluar':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="fiskal">Scan Surat Fiskal</Label>
              <Input id="fiskal" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="blue">Scan BLUE</Label>
              <Input id="blue" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stnk">Scan STNK</Label>
              <Input id="stnk" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identitas">Scan Identitas Pemohon</Label>
              <Input id="identitas" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
              <p className="text-sm text-gray-500">Format: PDF, JPG, JPEG, PNG (Max 2MB)</p>
            </div>
          </>
        )
      default:
        return null
    }
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
            <CardTitle className="text-2xl text-center">Formulir Pendaftaran Uji Kendaraan</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="layanan">Jenis Layanan</Label>
                <Select 
                  required
                  onValueChange={(value) => setSelectedLayanan(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    {layananOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nama">Nama Pemilik</Label>
                <Input id="nama" placeholder="Masukkan nama pemilik" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="nik">NIK</Label>
                <Input id="nik" placeholder="Masukkan NIK" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nopol">Nomor Polisi Kendaraan</Label>
                <Input id="nopol" placeholder="Contoh: N 1234 AB" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nokir">Nomor Uji Kendaraan (KEUR)</Label>
                <Input id="nokir" placeholder="Masukkan nomor uji kendaraan" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" type="tel" placeholder="Masukkan nomor telepon" required />
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Dokumen Persyaratan</h3>
                {renderDokumenPersyaratan()}
              </div>

              <div className="flex gap-4 justify-end">
                <Link href="/">
                  <Button variant="outline" type="button">Kembali</Button>
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Memproses...' : 'Daftar'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pendaftaran Berhasil!</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Pendaftaran uji kendaraan Anda telah berhasil disubmit.</p>
            <p className="mt-2">Nomor Registrasi Anda: <span className="font-semibold">REG-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span></p>
            <p className="mt-2 text-sm text-gray-600">Silakan simpan nomor registrasi ini untuk mengecek status pendaftaran Anda.</p>
          </div>
          <DialogFooter>
            <Button onClick={handleDialogClose}>Kembali ke Beranda</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}