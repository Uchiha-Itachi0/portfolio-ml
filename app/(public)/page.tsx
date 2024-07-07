import Navbar from "@/components/navbar";
import LandingPage from "@/components/home";
import RecentBlogs from "@/components/recentBlogs";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div>
            <div className={`mx-4 sm:mx-10 lg:mx-24`}>
                <LandingPage />
                <RecentBlogs />
            </div>
        </div>
    );
}