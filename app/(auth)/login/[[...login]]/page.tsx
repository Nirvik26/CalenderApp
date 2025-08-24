import calender from '@/public/calender.svg';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

function page() {
  return (
    <main className="flex flex-col items-center p-5 gap-10">
      <Image src={calender} alt="calender" width={100} height={100} />
      <div>
        <SignIn />
      </div>
    </main>
  );
}

export default page;
