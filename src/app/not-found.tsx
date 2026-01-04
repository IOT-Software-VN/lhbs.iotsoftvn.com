import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white px-4'>
      <div className='text-center'>
        {/* 404 Number */}
        <h1 className='text-9xl font-bold text-brand-green'>404</h1>

        {/* Message */}
        <h2 className='mb-2 mt-4 text-2xl font-bold text-gray-900'>Không tìm thấy trang</h2>
        <p className='mb-8 text-gray-600'>Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>

        {/* Back to Home Button */}
        <Link
          href='/'
          className='inline-flex items-center rounded-lg bg-brand-green px-6 py-3 font-medium text-white transition-colors hover:bg-brand-green/90'
        >
          <svg className='mr-2 h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          Về trang chủ
        </Link>
      </div>
    </div>
  )
}
