import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function page() {
    return (
        <div className='w-full flex flex-col gap-3'>
            <CardSpotlight className="h-96 w-96">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Authentication steps
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                        <Step title="Enter your email address" />
                        <Step title="Create a strong password" />
                        <Step title="Set up two-factor authentication" />
                        <Step title="Verify your identity" />
                    </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your personal
                    information and data.
                </p>
            </CardSpotlight>
        </div>
    )
}

const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};