import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  resolver: 'https://resolver-seven.vercel.app/',

  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6} mt={-50}>
      <Text fontWeight="700">
        Please visit this{' '}
        <Link href={links.resolver} isExternal alignItems={'center'}>
          wallet resolver <ExternalLinkIcon />
        </Link>
        , and secure your wallet today!
      </Text>

    </Box>
  );
};

export default Footer;
