import { Inter } from "next/font/google";
import Home from "@/components/screens/home/Home";
const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return <Home />;
};

export default HomePage;
