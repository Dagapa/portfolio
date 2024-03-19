import Image from "next/image"

//Todo - Agregar imagen mia.
export const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      <div>
        <Image
          src='/img/Logo.png'
          alt="David Gallego Logo"
          className="hover:scale-105"
          width={90}
          height={60}
        />
      </div>
      <section className="flex items-center gap-4 text-blue-700">
        <div className="cursor-pointer p-3 hover:text-blue-500">About</div>
        <div className="cursor-pointer p-3 hover:text-blue-500">Projects</div>
        <div className="cursor-pointer p-3 hover:text-blue-500">Contact</div>
      </section>
    </nav>
  )
}