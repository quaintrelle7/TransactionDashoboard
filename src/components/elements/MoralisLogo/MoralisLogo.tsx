import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    // <Image
    //   src={colorMode === 'dark' ? '/Morali-DarkBG.svg' : '/Morali-LightBG.svg'}
    //   height={45}
    //   width={150}
    //   alt="Wallet Resolver"
    // />
    <></>
  );
};

export default MoralisLogo;
