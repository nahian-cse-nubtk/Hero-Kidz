"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
    const session = useSession()

    return (
        <div>
            {
                session.status=="authenticated"?<button onClick={()=>signOut()} className='btn btn-primary btn-outline'>Logout</button>:<div className='flex gap-2'>
                    <Link href={"/login"} className='btn btn-primary btn-outline '>Login</Link>
                    <Link href={'/register'} className='btn btn-primary btn-outline '>Register</Link>
                </div>
            }

        </div>
    );
};

export default AuthButtons;