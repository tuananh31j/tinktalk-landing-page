import { Stack } from '@mantine/core';
import MainLayout from '~/components/layouts/MainLayout';

const HomePageLayout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <MainLayout>
            <Stack className='relative mx-auto md:m-0'>{children}</Stack>
        </MainLayout>
    );
};

export default HomePageLayout;
