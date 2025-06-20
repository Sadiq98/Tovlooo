import { Box, Icon, IconButton } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Box position="relative" maxW="full" onClick={handlePlay}>
        <video
          ref={videoRef}
          width="100%"
          controls={false}
          style={{ display: "block" }}
        >
          <source src="../assets/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.6)"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <IconButton
              color="background.green"
              bg="text.ivory"
              _hover={{ bg: "text.darkIvory" }}
              _disabled={{ bg: "text.darkGrey" }}
              rounded="full"
              boxSize={20}
            >
              <Icon as={FaPlay} boxSize={8} />
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Video;
