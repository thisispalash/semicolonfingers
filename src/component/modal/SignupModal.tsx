import clsx from 'clsx';
import React, { useState } from 'react';


interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  displayHelp?: boolean;
  src?: string;
}

import BaseModal from './base';
import Link from '@/component/primitive/Link';

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, src, displayHelp = true }) => {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ isReader, setIsReader ] = useState(src === 'pullmythread');
  const [ isWriter, setIsWriter ] = useState(src === 'emptyyourmug');
  
  const [ success, setSuccess ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let interest: number = 0;

    if (isReader && isWriter) {
      interest = 3;
    } else if (isReader) {
      interest = 1;
    } else if (isWriter) {
      interest = 2;
    }

    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          name, 
          interested_in: interest
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Access coming!">
      {!error && !success &&
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          {/* <h2 className="w-full text-left text-xl font-system mb-4 text-foreground">Access coming!</h2> */}

          {displayHelp && (
            <p className="font-system text-sm md:text-base text-foreground">
              Public release for semicolon fingers is coming in April 2025. Enter your details below to get notified when it&apos;s live!
            </p>
          )}
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 items-center justify-center">
            {/* Name field */}
            <div className="w-full">
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-foreground rounded-md focus:outline-none focus:ring-0 font-user"
              />
            </div>

            {/* Email field */}
            <div className="w-full">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-foreground rounded-md focus:outline-none focus:ring-0 font-user"
              />
            </div>

            {/* Interested in field */}
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Interested in
              </label>
              <div className="w-full flex items-center gap-6 px-4">
                
                <div className="w-1/2 flex items-center justify-center gap-2 hover:font-user">
                  <input
                    type="checkbox"
                    id="isWriter"
                    checked={isWriter}
                    onChange={(e) => setIsWriter(e.target.checked)}
                    className="w-4 h-4 border border-foreground rounded focus:ring-0"
                  />
                  <label htmlFor="isWriter" className="">
                    Writing
                  </label>
                </div>

                <div className="w-1/2 flex items-center justify-center gap-2 hover:font-user">
                  <input
                    type="checkbox"
                    id="isReader"
                    checked={isReader}
                    onChange={(e) => setIsReader(e.target.checked)}
                    className="w-4 h-4 border border-foreground rounded focus:ring-0"
                  />
                  <label htmlFor="isReader" className="">
                    Reading
                  </label>
                </div>
              </div>
            </div>
            
            {/* Submit button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className={clsx(
                "w-3/5 mt-4 py-2 px-4 rounded-md bg-background text-foreground cursor-pointer",
                "border border-foreground",
                "hover:bg-foreground hover:text-background focus:outline-none focus:ring-0",
                "transition-colors duration-200",
                isLoading && "opacity-70 cursor-wait"
              )}
            >
              {isLoading ? 'Submitting...' : 'Let me know!'}
            </button>
          </form>
        
        </div>
      }

      {success && (
        <p className="font-system text-sm md:text-base text-foreground">
          Thank you! We&apos;ll notify you when it&apos;s live!
        </p>
      )}

      {error && (
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <p className="font-system text-sm md:text-base text-foreground">
            Oops! Something went wrong.
          </p>
          <Link href="#" onClick={() => setError(false)}>
            Try again?
          </Link>
        </div>
      )}

    </BaseModal>
  );
};

export default SignupModal;
