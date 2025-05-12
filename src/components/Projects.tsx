import { Box, Container, Grid, Heading, Image, Text, VStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Box 
      as="section"
      id="projects" 
      py={20} 
      mt="64px" // Add margin top to account for fixed navbar
    >
      <Container maxW="container.lg">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading>My Projects</Heading>
            <Text color="gray.600" textAlign="center">
              Here are some of my recent works
            </Text>
          </VStack>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
          >
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.link} isExternal _hover={{ textDecoration: 'none' }}>
                  <VStack
                    p={4}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    spacing={4}
                    _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      borderRadius="md"
                      w="100%"
                    />
                    <Heading size="md">{project.title}</Heading>
                    <Text color="gray.600" textAlign="center">
                      {project.description}
                    </Text>
                  </VStack>
                </Link>
              </MotionBox>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
