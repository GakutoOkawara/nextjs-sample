import NextHead from "next/head"
import Link from "next/link"
import Image from "next/image"

const RootPage = () => {
  return (
    <>
      <h1>next/image example</h1>
      <Image 
        src="/ogp.png"
        alt="something"
        width={600}
        height={400}
      />
    </>
  )
}

export default RootPage