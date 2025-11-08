/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Error from 'next/error';
import { useEffect } from 'react';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {


    return (
        <html lang='en'>
            <body>
                {/* This is the default Next.js error component, but it doesn't allow omitting the statusCode property yet. */}
                <Error statusCode={undefined as any} />
                <button
                    className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
                    onClick={
                        // Attempt to recover by trying to re-render the invoices route
                        () => reset()
                    }
                >
                    Try again
                </button>
            </body>
        </html>
    );
};
export default GlobalError;
