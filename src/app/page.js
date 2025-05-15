import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HomeContainer from "@/app/components/HomeContainer";

export default function Home() {

const tittle = "Welcome to miamo"

  return (
    <div>
      <Navbar />
      <HomeContainer />
      <Footer />
    </div>
  );
}
