import calender from '@/public/calender.svg';
import planning from '@/public/planning.svg';
import { SignIn } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';
import Image from 'next/image';

function Landingpage() {
  return (
    <main className="flex items-center p-10 gap-24 max-md:flex-col">
      <section className="flex flex-col items-center">
        <Image src={calender} alt="logo" width={100} height={100} />
        <h1 className="text-2xl font-vlack lg:text-3xl"> Your time, perfectly planned</h1>
        <p className="font-extralight">
          {' '}
          Join millions of professionals who easily book meetings with the #1 scheduling tool
        </p>
        <Image src={planning} alt="logo" width={500} height={500} />
      </section>
      <div className="mt-3">
        <SignIn
          routing="hash"
          appearance={{
            baseTheme: neobrutalism,
          }}
        />
      </div>
    </main>
  );
}

export default Landingpage;
