import {
  Button,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "404",
    template: ``,
  },
  openGraph: {
    images: ["/Tinktalklogo.png"],
  },
  twitter: {
    images: ["/Tinktalklogo.png"],
  },
};

const NotFound = () => {
  return (
    <Center className="h-full w-full flex-1">
      <Stack align="center" className="min-w-4/5 w-4/5 max-w-xl">
        <Image
          alt="404"
          className="aspect-[5/4]"
          height={800}
          src="https://http.cat/404"
          width={1000}
        />
        <Title className="text-center" order={1}>
          Bạn đã tìm thấy một nơi bí mật.
        </Title>
        <Text c="dimmed" className="text-center" size="lg">
          Rất tiếc, đây chỉ là trang 404. Có thể bạn đã gõ sai địa chỉ, hoặc
          trang đã được chuyển đến URL khác.
        </Text>
        <Group justify="center">
          <Button component={Link} href="/" size="md" variant="light">
            Quay lại trang chủ
          </Button>
        </Group>
      </Stack>
    </Center>
  );
};

export default NotFound;
