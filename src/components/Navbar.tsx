import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Container,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Text
    as={Link}
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    cursor="pointer"
    px={4}
    py={2}
    rounded="lg"
    fontWeight="medium"
    fontSize="md"
    transition="all 0.2s"
    _hover={{
      bg: 'gray.100',
      color: 'blue.500',
    }}
    activeClass="active"
    className="nav-link"
    onClick={onClick}
  >
    {children}
  </Text>
);

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const menuItems = [
    { to: 'home', label: 'Home' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <Box 
      as="nav"
      position="fixed" 
      width="full" 
      zIndex={999} 
      bg="white" 
      backdropFilter="blur(10px)"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      boxShadow="sm"
      top={0}
    >
      <Container maxW="container.xl">
        <Flex 
          h={16} 
          alignItems="center" 
          justifyContent="space-between"
        >
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              as={Link}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              cursor="pointer"
              fontWeight="bold"
              fontSize="xl"
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
              _hover={{ 
                bgGradient: "linear(to-r, blue.400, purple.400)",
              }}
            >
              Portfolio
            </Text>
          </MotionBox>

          <HStack 
            spacing={8} 
            alignItems="center" 
            display={{ base: 'none', md: 'flex' }}
          >
            {menuItems.map((item, index) => (
              <MotionBox
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink to={item.to}>
                  {item.label}
                </NavLink>
              </MotionBox>
            ))}
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
            size="lg"
          />
        </Flex>
      </Container>

      {/* Mobile menu */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        position="absolute"
        top="100%"
        left={0}
        right={0}
        bg="white"
        boxShadow="sm"
        py={4}
      >
        <Container maxW="container.xl">
          <VStack spacing={4} align="stretch">
            {menuItems.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to}
                onClick={() => {
                  onClose();
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
