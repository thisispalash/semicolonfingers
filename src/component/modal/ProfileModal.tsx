'use client';

import clsx from 'clsx';

import BaseModal from './base';
import Link from '@/component/primitive/Link';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {

  if (!isOpen) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Profiles Coming Soon">
      <div className={clsx(
        'flex flex-col gap-3 items-center justify-center',
        'font-system text-sm md:text-base'
      )}>
        
        <p>
          We are hard at work on integrating profile view(s) for the network. Please check back soon! Or follow the <Link href="https://github.com/sliver-labs/semicolon-fingers/issues/1">issue on GitHub</Link> to stay updated.
        </p>

        <p>
          Until then, we encourage you to <Link href="https://emptyyourmug.com">empty your mug</Link> and add stories to the network, or <Link href="https://pullmythread.com">pull others&apos; threads</Link> and read their stories.
        </p>

      </div>
    </BaseModal>
  );
}