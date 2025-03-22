'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import Link from '@/component/primitive/Link';
import SignupModal from '@/component/modal/SignupModal';

import Icon from '@/component/icon/base';
import UserSVG from '@/component/icon/UserSVG';
import HelpSVG from '@/component/icon/HelpSVG';

import InfoModal from '@/component/modal/InfoModal';
import ProfileModal from '@/component/modal/ProfileModal';

export default function Home() {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ clicker, setClicker ] = useState('');

  const [ isHelpOpen, setIsHelpOpen ] = useState(false);
  const [ isProfileOpen, setIsProfileOpen ] = useState(false);

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

        <Link href="#" onClick={() => { setClicker('pullmythread'); setIsOpen(true); }}>
          <span className="text-base">pullmythread</span>
        </Link>

        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl">Semicolon Fingers</h1>
          <p className="font-user text-lg text-center">Addressing the loneliness epidemic in the world..</p>
          <div className="cursor-pointer" onClick={() => setIsHelpOpen(true)}>
            <Icon as={HelpSVG} size="4xl" />
          </div>
        </div>

        <Link href="#" onClick={() => { setClicker('emptyyourmug'); setIsOpen(true); }}>
          <span className="text-base">emptyyourmug</span>
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

      {/* Account Button */}
      <div className="fixed left-8 top-8 cursor-pointer hidden md:block" onClick={() => setIsProfileOpen(true)}>
        <Icon as={UserSVG} size="2xl" />
      </div>


      {/* Help Button */}
      <div className="fixed right-6 bottom-6 cursor-pointer hidden md:block" onClick={() => setIsHelpOpen(true)}>
        <Icon as={HelpSVG} size="4xl" />
      </div>

      <InfoModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

    </main>
  );
}
