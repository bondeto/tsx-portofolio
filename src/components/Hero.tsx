import { Box, Button, Container, Flex, Heading, Text, VStack, useBreakpointValue, Image, HStack, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Hero = () => {
  const containerHeight = useBreakpointValue({ base: 'calc(100vh - 64px)', md: '100vh' });
  const headingSize = useBreakpointValue({ base: '4xl', md: '5xl', lg: '6xl' });

  return (
    <Box 
      as="section"
      id="home" 
      minH={containerHeight}
      bg="gray.50"
      position="relative"
      overflow="hidden"
      pt="64px"
    >
      {/* Background Decorations */}
      <Box
        position="absolute"
        top="0"
        right="0"
        width={{ base: '300px', md: '500px' }}
        height={{ base: '300px', md: '500px' }}
        bg="blue.100"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.3}
        transform="translate(30%, -30%)"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width={{ base: '200px', md: '400px' }}
        height={{ base: '200px', md: '400px' }}
        bg="purple.100"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.3}
        transform="translate(-30%, 30%)"
      />

      <Container 
        maxW="container.xl" 
        h="full" 
        position="relative"
        zIndex={1}
      >
        <Flex
          h="full"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
          py={{ base: 10, lg: 20 }}
        >
          {/* Left Column - Text Content */}
          <VStack
            spacing={{ base: 6, md: 8 }}
            align="flex-start"
            flex="1"
            maxW={{ lg: '600px' }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="blue.500"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Welcome to my portfolio
              </Text>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading
                as="h1"
                fontSize={headingSize}
                fontWeight="bold"
                lineHeight="shorter"
                bgGradient="linear(to-r, blue.600, purple.600)"
                bgClip="text"
              >
                Your Name
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl' }}
                color="gray.700"
                fontWeight="medium"
                lineHeight="tall"
              >
                Full Stack Developer & UI/UX Enthusiast
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.600"
                lineHeight="tall"
              >
                I create elegant solutions through code, specializing in modern web applications 
                with engaging user experiences and scalable backend architectures.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <HStack spacing={4}>
                <Button
                  as={Link}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  colorScheme="blue"
                  size={{ base: 'md', md: 'lg' }}
                  px={{ base: 8, md: 10 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  View My Work
                </Button>
                <Button
                  as={Link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  variant="outline"
                  colorScheme="blue"
                  size={{ base: 'md', md: 'lg' }}
                  px={{ base: 8, md: 10 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  Contact Me
                </Button>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <HStack spacing={4} color="gray.600">
                <IconButton
                  as="a"
                  href="https://github.com/yourusername"
                  target="_blank"
                  aria-label="GitHub"
                  icon={<FaGithub size="20px" />}
                  variant="ghost"
                  size="lg"
                  _hover={{ color: 'blue.500' }}
                />
                <IconButton
                  as="a"
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin size="20px" />}
                  variant="ghost"
                  size="lg"
                  _hover={{ color: 'blue.500' }}
                />
                <IconButton
                  as="a"
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  aria-label="Twitter"
                  icon={<FaTwitter size="20px" />}
                  variant="ghost"
                  size="lg"
                  _hover={{ color: 'blue.500' }}
                />
              </HStack>
            </MotionBox>
          </VStack>

          {/* Right Column - Profile Image */}
          <MotionFlex
            flex="1"
            justify="center"
            align="center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            display={{ base: 'none', lg: 'flex' }}
            position="relative"
          >
            <Box
              position="relative"
              width="full"
              maxW="400px"
              height="500px"
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="2xl"
              _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                bgGradient: 'linear(to-b, transparent 0%, rgba(0,0,0,0.1) 100%)',
                zIndex: 1,
              }}
            >
              {/* Main Image */}
              <Image
                src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Abstract Gradient Art"
                objectFit="cover"
                width="100%"
                height="100%"
                fallback={
                  <Box
                    width="100%"
                    height="100%"
                    bg="gray.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    p={4}
                  >
                    <Text color="gray.500" fontSize="sm" textAlign="center">
                      Replace this with your professional photo
                    </Text>
                  </Box>
                }
              />

              {/* Glass Effect Overlay */}
              <Box
                position="absolute"
                inset="0"
                bg="blackAlpha.10"
                backdropFilter="blur(2px)"
                borderRadius="3xl"
                zIndex={2}
              />
              
              {/* Geometric Decorations */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                width="120px"
                height="120px"
                borderRadius="full"
                bgGradient="linear(to-r, blue.400, purple.400)"
                opacity={0.15}
                zIndex={3}
              />
              <Box
                position="absolute"
                bottom="-10px"
                left="-10px"
                width="100px"
                height="100px"
                borderRadius="full"
                bgGradient="linear(to-r, purple.400, blue.400)"
                opacity={0.15}
                zIndex={3}
              />
            </Box>

            {/* Background Grid Pattern */}
            <Box
              position="absolute"
              inset="0"
              opacity={0.05}
              zIndex={-1}
              backgroundImage="radial-gradient(circle at 1px 1px, gray 1px, transparent 0)"
              backgroundSize="40px 40px"
            />
          </MotionFlex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
