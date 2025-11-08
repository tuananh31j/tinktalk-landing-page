import { Loader } from '@mantine/core';

export default function Loading() {
    return (
        <div className='fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform'>
            <Loader color='green' />
        </div>
    );
}
