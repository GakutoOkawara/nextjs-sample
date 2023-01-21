import NextHead from "next/head"
import Link from "next/link"

const RootPage = () => {
  return (
    <>
      <NextHead>
        <title>My Next Example</title>
        <meta name="description" content="this is Next.js example" />
      </NextHead>
      <h1>It works!!</h1>
      <Link href="/about">About</Link>
    </>
  )
}

export default RootPage