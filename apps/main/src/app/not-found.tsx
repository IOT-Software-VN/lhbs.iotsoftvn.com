'use client'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4 py-16'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* Large 404 Number */}
        <div className='mb-8'>
          <h1 className='text-[120px] md:text-[180px] font-bold text-[#1a5336]/10 leading-none'>404</h1>
          <div className='relative -mt-16 md:-mt-24'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a5336] mb-4'>Không tìm thấy trang</h2>
            <p className='text-lg text-gray-600 mb-8'>
              Chúng tôi không tìm thấy trang bạn đang tìm kiếm. Trang có thể đã bị di chuyển, xóa hoặc bạn đã nhập sai
              địa chỉ URL.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          {/* SỬA: 'to' thành 'href' */}
          <Link
            href='/'
            className='group inline-flex items-center gap-3 bg-[#FABA1E] text-[#1a5336] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a812] transition-all duration-300 hover:scale-105'
          >
            <Home className='w-5 h-5' />
            Về trang chủ
          </Link>

          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className='group inline-flex items-center gap-3 bg-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all duration-300'
          >
            <ArrowLeft className='w-5 h-5' />
            Quay lại
          </button>
        </div>

        {/* Quick Links */}
        <div className='mt-16 pt-8 border-t border-gray-200'>
          <p className='text-gray-500 text-sm mb-6'>Hoặc khám phá các trang phổ biến:</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {/* SỬA: Tất cả 'to' thành 'href' */}
            <Link
              href='/admissions'
              className='text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200'
            >
              Tuyển sinh
            </Link>
            <Link
              href='/high-school'
              className='text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200'
            >
              Phổ thông
            </Link>
            <Link
              href='/primary-school'
              className='text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200'
            >
              Tiểu học
            </Link>
            <Link
              href='/our-school'
              className='text-gray-600 hover:text-[#1a5336] text-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200'
            >
              Về chúng tôi
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
