"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AiOutlineSearch } from 'react-icons/ai'
function Header() {
  const pathName=usePathname()
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Input placeholder='Search blog...'/>
      <Button>
        <AiOutlineSearch/>
      </Button>
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign up</Button>
      </Link>


    </nav>
  )
}

export default Header