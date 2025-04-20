import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuList
} from "@chakra-ui/react";
import "../../App.css";

function NavbarCard5() {
  const navigate = useNavigate();

  // Function to handle navigation with filters
  const handleNavigation = (filterParams) => {
    // Construct the query string from filter parameters
    const queryString = new URLSearchParams(filterParams).toString();
    navigate(`/sampleproduct?${queryString}`);
  };

  return (
    <Flex bg="#fbf9f7" cursor="pointer" gap="6">
      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          EYEGLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Box>
            <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%">
              <Flex direction="column" justifyContent="space-evenly" mt="20">
                <Flex 
                  gap="5" 
                  fontSize="15px"
                  onClick={() => handleNavigation({ category: "Eye Glasses", gender: "Male" })}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                    alt="men"
                    size="md"
                  />
                  <Box
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Men
                  </Box>
                </Flex>

                <Flex 
                  gap="5"
                  onClick={() => handleNavigation({ category: "Eye Glasses", gender: "Female" })}
                >
                  <Avatar
                    name="Kola Tioluwani"
                    src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                    alt="women"
                    size="md"
                  />
                  <Box
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Women
                  </Box>
                </Flex>

                <Flex 
                  gap="5"
                  onClick={() => handleNavigation({ category: "Eye Glasses", gender: "Kids" })}
                >
                  <Avatar
                    name="Kent Dodds"
                    src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                    alt="kid"
                    size="md"
                  />
                  <Box
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Kids
                  </Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  SELECT CATEGORY
                </Box>
                <Box 
                  fontSize="md" 
                  _hover={{ bg: "blackAlpha.200" }}
                  onClick={() => handleNavigation({ category: "Eye Glasses", subCategory: "Full Frame" })}
                >
                  CLASSIC EYE-GLASSES
                  <p>
                    Starting From ₹ <span>1199</span>
                  </p>
                </Box>
                <Box 
                  fontSize="md" 
                  _hover={{ bg: "blackAlpha.200" }}
                  onClick={() => handleNavigation({ category: "Eye Glasses", subCategory: "Premium" })}
                >
                  PREMIUM EYE-GLASSES
                  <p>
                    Starting From ₹ <span>3000</span>
                  </p>
                </Box>
                <Box 
                  fontSize="md" 
                  _hover={{ bg: "blackAlpha.200" }} 
                  p="2"
                  onClick={() => handleNavigation({ category: "Computer Glasses" })}
                >
                  COMPUTER EYE-GLASSES
                  <p>
                    Starting From ₹ <span>1299</span>
                  </p>
                </Box>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Frame Type
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box 
                    _hover={{ fontWeight: "bold" }}
                    onClick={() => handleNavigation({ category: "Eye Glasses", frameMaterial: "Rectangle" })}
                  >
                    Rectangle Frames
                  </Box>
                  <Box 
                    _hover={{ fontWeight: "bold" }}
                    onClick={() => handleNavigation({ category: "Eye Glasses", frameMaterial: "Wayfarer" })}
                  >
                    Wayfarer Frames
                  </Box>
                </Flex>
              </Flex>
            </Grid>
          </Box>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          COMPUTER GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Box>
            <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%">
              <Flex
                direction="column"
                gap="4"
                justifyContent="space-evenly"
                mt="20"
              >
                <Flex 
                  gap="5"
                  onClick={() => handleNavigation({ category: "Computer Glasses", gender: "Male" })}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                    alt="men"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Men
                  </Box>
                </Flex>

                <Flex 
                  gap="5"
                  onClick={() => handleNavigation({ category: "Computer Glasses", gender: "Female" })}
                >
                  <Avatar
                    name="Kola Tioluwani"
                    src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                    alt="women"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Women
                  </Box>
                </Flex>

                <Flex 
                  gap="5"
                  onClick={() => handleNavigation({ category: "Computer Glasses", gender: "Kids" })}
                >
                  <Avatar
                    name="Kent Dodds"
                    src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                    alt="kid"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Kids
                  </Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  SELECT CATEGORY
                </Box>

                <Box 
                  _hover={{ bg: "blackAlpha.200" }} 
                  fontSize="md"
                  onClick={() => handleNavigation({ category: "Computer Glasses", subCategory: "Blu 0 Computer Glasses" })}
                >
                  Blu 0 Computer Glasses
                  <p>
                    Starting From ₹ <span>1299</span>
                  </p>
                </Box>
                <Box 
                  _hover={{ bg: "blackAlpha.200" }} 
                  fontSize="md"
                  onClick={() => handleNavigation({ category: "Computer Glasses", subCategory: "Premium Range" })}
                >
                  PREMIUM RANGE
                  <p>
                    Starting From ₹ <span>3000</span>
                  </p>
                </Box>
              </Flex>
            </Grid>
          </Box>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          KIDS GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="100%"
          bg="whiteAlpha.800"
          w="100%"
          p="2"
        >
          <Box>
            <Grid
              gridTemplateColumns="repeat(3, 1fr)"
              justifyContent="center"
              p="5"
            >
              <Box 
                bg="whiteAlpha.900" 
                h="250px" 
                w="240px"
                onClick={() => handleNavigation({ category: "Eye Glasses", gender: "Kids" })}
              >
                <img
                  className="navImg1"
                  src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                  alt="kidsIcon_1"
                />
                <Box mt="10px" textAlign="center" fontSize="lg">
                  Eye Glasses
                </Box>
              </Box>
              <Box 
                bg="whiteAlpha.900" 
                h="250px" 
                w="240px"
                onClick={() => handleNavigation({ category: "Computer Glasses", gender: "Kids" })}
              >
                <img
                  className="navImg2"
                  src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                  alt="kidsIcon_2"
                />
                <Box mt="10px" textAlign="center" fontSize="lg">
                  Zero Power Computer Glasses
                </Box>
              </Box>
              <Box 
                bg="whiteAlpha.900" 
                h="250px" 
                w="240px"
                onClick={() => handleNavigation({ category: "Sunglasses", gender: "Kids" })}
              >
                <img
                  className="navImg2"
                  src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                  alt="kidsIcon_3"
                />
                <Box mt="10px" textAlign="center" fontSize="lg">
                  Sun Glasses
                </Box>
              </Box>
            </Grid>
          </Box>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          SUN GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Box>
            <Grid gridTemplateColumns="repeat(6, 1fr)">
              <Flex direction="column" justifyContent="space-evenly">
                <Flex 
                  gap="5"
                  onClick={() => handleNavigation({ category: "Sunglasses", gender: "Male" })}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                    alt="men"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Men
                  </Box>
                </Flex>

                <Flex 
                  gap="5" 
                  mt="-40%"
                  onClick={() => handleNavigation({ category: "Sunglasses", gender: "Female" })}
                >
                  <Avatar
                    name="Kola Tioluwani"
                    src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                    alt="women"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Women
                  </Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  SELECT CATEGORY
                </Box>
                <Box 
                  _hover={{ bg: "blackAlpha.200" }} 
                  fontSize="md"
                  onClick={() => handleNavigation({ category: "Sunglasses", subCategory: "Aviator" })}
                >
                  CLASSIC SUNGLASSES
                  <p>
                    Starting From ₹ <span>1299</span>
                  </p>
                </Box>
                <Box 
                  _hover={{ bg: "blackAlpha.200" }} 
                  fontSize="md" 
                  p="2"
                  onClick={() => handleNavigation({ category: "Sunglasses", subCategory: "Sports" })}
                >
                  PREMIUM SUNGLASSES
                  <p>
                    Starting From ₹ <span>2500</span>
                  </p>
                </Box>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Our Top Picks
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box 
                    _hover={{ fontWeight: "bold" }}
                    onClick={() => handleNavigation({ category: "Sunglasses", sort: "newest" })}
                  >
                    New Arrivals
                  </Box>
                  <Box 
                    _hover={{ fontWeight: "bold" }}
                    onClick={() => handleNavigation({ category: "Sunglasses", sort: "popular" })}
                  >
                    Best Seller
                  </Box>
                </Flex>
              </Flex>
            </Grid>
          </Box>
        </MenuList>
      </Menu>

      {/* Explore All Button */}
      <Box
        as="button"
        bg="#fbf9f7"
        fontSize="15px"
        fontWeight="600"
        _hover={{
          borderBottom: "4px solid teal"
        }}
        onClick={() => navigate('/sampleproduct')}
      >
        EXPLORE ALL
      </Box>
    </Flex>
  );
}
export default NavbarCard5;