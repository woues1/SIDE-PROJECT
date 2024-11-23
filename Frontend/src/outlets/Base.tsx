import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

function Base() {
    return (
        <div className="flex flex-col min-h-screen min-w-[100vw]">
            <Header />
            <main className="flex-1 bg-gray-900">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Base
