export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-white'>
      <div className='flex flex-col items-center gap-4'>
        {/* Spinner */}
        <div className='h-12 w-12 animate-spin rounded-full border-4 border-brand-green border-t-transparent' />
        {/* Loading text */}
        <p className='text-lg font-medium text-brand-green'>Đang tải...</p>
      </div>
    </div>
  )
}
