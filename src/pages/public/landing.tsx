import { Link } from "@tanstack/react-router";


export const LandingPage = () => {
    return(
        <div className="min-h-screen flex flex-col mx-2.5">
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-200 flex items-center justify-between px-6 py-4">
                <img src="/favicon.svg" alt="Xonvera Logo" className="h-14" />
                <div className="flex gap-2 items-center">
                    <Link to="/login">
                        <button className="btn btn-primary">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-primary-outline">
                            Register
                        </button>
                    </Link>
                </div>
            </header>
            
            <main className="flex-1">
               <img src="/logo.svg" alt="logoLanding Illustration" className="mx-auto w-2/3" />

               <div className="max-w-sm relative rounded-2xl border border-gray-200 
               bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#06B6D4]">

                    <div className="absolute top-0 right-0 translate-x-6 translate-y-3
                            bg-green-600 text-white text-xs font-bold rotate-45
                            px-7 py-2">
                        Best Value
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800">
                        Basic Plan
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Cocok untuk pemula
                    </p>

                    <div className="mt-6">
                        <span className="text-4xl font-bold text-gray-900">Rp99k</span>
                        <span className="text-sm text-gray-500">/bulan</span>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span> 5 Project
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span> Email Support
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span> Basic Analytics
                        </li>
                    </ul>

                    <button
                        className="btn btn-primary w-full mt-5">
                        Pilih Paket
                    </button>
                </div>

            </main>
            
            <footer className="bg-slate-900 text-slate-400 py-8 text-center">
                <p className="text-sm">© 2026 Xonvera. All rights reserved.</p>
            </footer>
        </div>
    )
};