import Navbar from "../components/layout/navbar"

export default function mainLayout({children}) {
  return (
    <>
        <Navbar />
        <main>
            {children}
        </main>
    </>
  )
}
