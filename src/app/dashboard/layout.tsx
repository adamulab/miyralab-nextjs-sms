import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left Menu */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white p-4">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className="hidden lg:block">MIYRA SMS</span>
        </Link>
        <Menu />
      </div>
      {/* Right content area */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-50 overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
