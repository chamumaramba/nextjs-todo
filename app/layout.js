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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar session={session} />
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer className="fixed bottom-0 left-0 w-full flex-shrink-0" /> */}
      </body>
    </html>
  );
}
