"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AiOutlineSearch } from 'react-icons/ai'
function Header() {
  const pathName=usePathname()
  return (
    <nav className='flex justify-between items-center shadow p-3.5 border-blue-400'>
      <h2>PA Blog</h2>
      <div className='flex gap-2.5'>
        <Link className={pathName==="/"? "text-blue-600":""} href="/">Home</Link>
        <Link className={pathName==="/about" ? "text-blue-600":""} href="/about">About</Link>
        <Link className={pathName==="/projects" ? "text-blue-600":""} href="/projects">Projects</Link>
      </div>
      
      <div className='flex gap-1.5'>
        <Input placeholder='Search blog...'/>
        <Button>
          <AiOutlineSearch/>
        </Button>
      </div>

      <Link href="/sign-in">
        <Button  variant='outline'>Sign in</Button>
      </Link>
      


    </nav>
  )
}

export default Header