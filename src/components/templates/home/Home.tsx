import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Wallet Resolver Dashboard      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Resolves Wallet to New Address
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>

          <ListIcon as={CheckCircleIcon} color="green.500" />
          Multichain Support
        </ListItem>


        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Rainbowkit integration
        </ListItem>

      </List>
    </VStack>
  );
};

export default Home;
