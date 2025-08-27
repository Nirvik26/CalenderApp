'use client';
import { PrivateNavLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PrivateNavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center fixed z-50 w-full h-28 bg-gray-200 px-10 gap-4 shadow-2xl mb-28">
      <Link href="/events" className="flex items-center gap-1 hover:scale-150 duration-500">
        <Image src="/calender.svg" alt="Talk" width={60} height={60} />
      </Link>

      <section className="sticky top-0 flex justify-between text-black">
        <div className="flex flex-1 max-sm:gap-0">
          {PrivateNavLinks.map((items) => {
            const isActive = pathname === items.route || pathname.startsWith(`$(item.route)/`);

            return (
              <Link
                href={items.route}
                key={items.label}
                className={cn(
                  'flex gap-4 items-center p-4 rounded-lg justify-start hover:scale-150 duration-300',
                  isActive && 'bg-blue-100 rounded-3xl'
                )}
              >
                <Image src={items.imgUrl} alt={items.label} width={30} height={30} />
              </Link>
            );
          })}
        </div>
      </section>
      <div className="hover:scale-150 duration-300">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
