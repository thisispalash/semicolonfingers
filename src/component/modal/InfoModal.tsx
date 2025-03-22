'use client';

import clsx from 'clsx';
import { useState } from 'react';

import Link from '@/component/primitive/Link';

import BaseModal from './base';
import SignupModal from './SignupModal';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {

  const [ isSignupOpen, setIsSignupOpen ] = useState(false);

  if (!isOpen) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="What this is?">

      <div className={clsx(
        'flex flex-col gap-4 items-center justify-center',
        'font-system text-sm md:text-base',
        'overflow-y-auto max-h-[80vh]'
      )}>
        <p>
          <b>Semicolon Fingers</b> is a novel network that is aimed at addressing the global loneliness epidemic. It follows the insight that everyone has a story to tell, and that everyone just wants to be heard. Utilizing blockchain technology, semicolon fingers aims to connect humans with each other on a deeper level. This relation is formed through stories, moods, and colors.
        </p>

        <p>
          <Link href="https://emptyyourmug.com"><b>Empty Your Mug</b></Link> is the writing side of the network. On this platform, you can focus on just writing stories, that then undergo sentiment analysis and are assigned a hue (mood) and saturation (intensity). Writers are also asked to score their relief level, on pouring their mug, which is used as a lightness value. Stories also undergo a transformation to telescopic text, where the story is condensed into a few words, which the reader must then unfold.
        </p>

        <p>
          <Link href="https://pullmythread.com"><b>Pull My Thread</b></Link> is the reader side of the network. Here, readers are presented with a random story on the network, in the color of the story. Readers can either read the story (ie, pull the thread), or shuffle to another story. The rate of shuffling determines the color of the story presented to the reader. As the reader shuffles, and pulls threads, new tokens are mined for the writer of those stories, thereby enabling a clear signal of connection between reader and the writer.
        </p>


        <div className="w-full flex flex-col gap-2 items-center justify-center">

          <h2 className="w-full text-left text-xl">
            Sounds cool, when is it live?
          </h2>

          <p>
            The network is almost ready to launch, we are finishing up the final touches. We expect to launch by April 2025. <Link href="#" onClick={() => setIsSignupOpen(true)}><span className="font-bold">Sign up</span></Link> to get notified when we do.
          </p>
          
          
        </div>

        <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
        
      </div>

    </BaseModal>
  );
}