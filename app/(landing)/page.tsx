import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {

    return (
        <div>
            <Link href="/sign-in">
             <Button>
                Login
            </Button>
            </Link>
           
           <Link href="/sign-up">
             <Button>
                Register
            </Button>
            </Link>
            {/* Landing Page (Unprotected) */}
        </div>
    )
}

export default LandingPage