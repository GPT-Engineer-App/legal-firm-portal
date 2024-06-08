import { Container, Text, VStack, Heading, Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Юридична Фірма</Heading>
        <Text fontSize="lg">Ми надаємо професійні юридичні послуги для вашого бізнесу та особистих потреб.</Text>
        <Box mt={8}>
          <Button colorScheme="blue" size="lg" mb={4}>Зв'язатися з нами</Button>
        </Box>
        <Flex direction="column" align="center" mt={8}>
          <Flex align="center" mb={2}>
            <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" mr={2} />
            <Text>+38 (044) 123-45-67</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" mr={2} />
            <Text>info@lawfirm.com</Text>
          </Flex>
          <Flex align="center">
            <IconButton aria-label="Location" icon={<FaMapMarkerAlt />} size="lg" mr={2} />
            <Text>м. Київ, вул. Хрещатик, 1</Text>
          </Flex>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;