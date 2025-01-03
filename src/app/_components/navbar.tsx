import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-8 py-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/go.svg" alt="GO Kanban" width={94} height={94} />
          <div className="font-quicksand flex flex-col text-xl font-bold text-[#393E41]">
            <span>Kanban</span>
            <span>Board</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
