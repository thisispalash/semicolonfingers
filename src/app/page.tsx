'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import Link from '@/component/Link';
import SignupModal from '@/component/SignupModal';

export default function Home() {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ clicker, setClicker ] = useState('');

  return (
    <main 
      className={clsx(
        'px-4 py-8 h-screen w-full',
        'flex flex-col items-center justify-between',
        'bg-contain bg-center bg-no-repeat',
        'bg-[url(/arms-400.png)] md:bg-none',
      )}
    >
      {/* Mobile */}
      <div className={clsx(
        'w-full h-full md:hidden',
        'flex flex-col items-center justify-between',
        'bg-background/90',
      )}>

        <Link href="https://pullmythread.com">
          pullmythread
        </Link>

        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl">Semicolon Fingers</h1>
          <p className="font-user text-lg text-center">Addressing the loneliness epidemic in the world..</p>
        </div>

        <Link href="https://emptyyourmug.com">
          emptyyourmug
        </Link>
        
      </div>


      {/* Header */}
      <div className="text-background hidden md:flex">
        header
      </div>

      {/* Content */}
      <div className="hidden md:flex flex-col gap-2 items-center justify-center">
        <Image src="/arms-400.png" alt="logo" width={200} height={100} />
        <h1 className="text-4xl">Semicolon Fingers</h1>
        <p className="font-user text-2xl">Addressing the loneliness epidemic in the world..</p>
      </div>

      {/* Footer */}
      <div className="hidden md:flex flex-row gap-20 items-center justify-center">
        <Link href="#" onClick={() => { setClicker('emptyyourmug'); setIsOpen(true); }}><span className="text-lg">emptyyourmug</span></Link>
        <Link href="#" onClick={() => { setClicker('pullmythread'); setIsOpen(true); }}><span className="text-lg">pullmythread</span></Link>
      </div>

      <SignupModal isOpen={isOpen} onClose={() => setIsOpen(false)} src={clicker} />

    </main>
  );
}
