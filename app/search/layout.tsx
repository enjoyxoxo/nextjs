import Search from './Search';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main className='flex space-x-4 divide-x-2 p-5'>
        <div>
          <h1>Search</h1>
        </div>
        <div className='flex-1 pl-5'>
          <Search />
          <div>{children}</div>
        </div>
      </main>
    </html>
  )
}
