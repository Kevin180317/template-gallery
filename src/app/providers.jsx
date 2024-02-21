"use client";
import { NextUIProvider } from "@nextui-org/react";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers(props) {
  const { children } = props;
  return (
    <NextUIProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </NextUIProvider>
  );
}
