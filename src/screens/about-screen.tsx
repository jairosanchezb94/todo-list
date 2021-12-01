import React from 'react'
import { ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="Sobre mí"
        image={require('../assets/about.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-10px"
        pt="10px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/jsanchez.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
          Buenas esto es una app para tus tareas diarias.
                        Jairo Sánchez
          </Text>
          <LinkButton
            colorScheme={useColorModeValue('gray', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://github.com/jairosanchezb94"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            @jairosanchezb94
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/jairo-sanchez-malaga"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            @jairosanchez
          </LinkButton>
          <Text fontSize="md" w="full">
          Estas buscando mas información sobre el creador, pincha aquí.
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://jairosanchezb94.github.io/portfolio-web/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            https://jairosanchezb94.github.io/portfolio-web/
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
