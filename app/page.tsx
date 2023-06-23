import Content from '@/components/Content'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-200">
      <div className='container flex justify-center items-center flex-col gap-8'>
        <h1 className='text-5xl w-full text-center font-bold'>MY ML APP 🚀</h1>
        <Content />
      </div>
    </main>

  )
}
