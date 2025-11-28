// CSS
import '../../css/layout/mainLayout.css';

// Components
import Navbar from "../components/layout/navbar"

export default function MainLayout({children, page_title = null}) {
  return (
    <div className="layout">
      <main>
        {page_title && <h1>{page_title}</h1>}
        
        {children}
      </main>

      <Navbar />
    </div>
  )
}
