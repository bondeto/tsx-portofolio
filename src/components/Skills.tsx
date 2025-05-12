import { Box, Container, Grid, Heading, Icon, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';

const MotionBox = motion(Box);

const skillsList = [
  { icon: FaReact, name: 'React', description: 'Frontend Development' },
  { icon: FaNodeJs, name: 'Node.js', description: 'Backend Development' },
  { icon: FaDatabase, name: 'Databases', description: 'Data Management' },
  { icon: FaGitAlt, name: 'Git', description: 'Version Control' },
  { icon: FaDocker, name: 'Docker', description: 'Containerization' },
  { icon: FaAws, name: 'AWS', description: 'Cloud Services' },
];

const Skills = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const containerHeight = useBreakpointValue({ base: 'auto', md: '100vh' });
  const gridColumns = useBreakpointValue({
    base: '1fr',
    sm: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  });

  return (
    <Box 
      as="section"
      id="skills" 
      minH={containerHeight}
      py={{ base: 10, md: 20 }} 
      bg="gray.50"
      display="flex"
      alignItems="center"
      mt="64px" // Add margin top to account for fixed navbar
    >
      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <VStack spacing={{ base: 8, md: 12 }}>
          <VStack spacing={{ base: 3, md: 4 }}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              textAlign="center"
            >
              My Skills
            </Heading>
            <Text 
              color="gray.600" 
              textAlign="center"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
              px={4}
            >
              Here are the technologies I work with
            </Text>
          </VStack>
          <Grid
            templateColumns={gridColumns}
            gap={{ base: 4, md: 8 }}
            w="full"
            px={{ base: 4, md: 0 }}
          >
            {skillsList.map((skill, index) => (
              <MotionBox
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
              >
                <VStack
                  p={{ base: 4, md: 6 }}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  spacing={{ base: 3, md: 4 }}
                  align="center"
                  h="full"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'lg',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon 
                    as={skill.icon} 
                    boxSize={{ base: 8, md: 10 }} 
                    color="blue.500" 
                  />
                  <Heading 
                    size={{ base: "sm", md: "md" }}
                    textAlign="center"
                  >
                    {skill.name}
                  </Heading>
                  <Text 
                    color="gray.600" 
                    textAlign="center"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {skill.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
