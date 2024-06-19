
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { getSession } from '../lib/session';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Master",
  description: "To-do list application",
};

export default async function RootLayout({ children }) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar session={session} />
          <div className="content">
            {children}
          </div>
          <Footer className='m-4'/>
        </div>
      </body>
    </html>
  );
}


