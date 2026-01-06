import { Link } from "@tanstack/react-router";
import {PricingCard} from "../../components/PricingCard";


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

               
                <PricingCard
                    title="Basic Plan"
                    description="Cocok untuk pemula"
                    price="Rp. 40.000"
                    period="bulan"
                    features={["5 Project", "Email Support", "Basic Analytics"]}
                    active={false} />
            </main>
            
            <footer className="bg-slate-900 text-slate-400 py-8 text-center">
                <p className="text-sm">© 2026 Xonvera. All rights reserved.</p>
            </footer>
        </div>
    )
};