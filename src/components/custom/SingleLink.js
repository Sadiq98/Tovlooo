import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const SingleLink = ({ url, icon, label, ...props }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      color="text.ivory"
      fontSize="buttonMenuItem"
      fontWeight="normal"
      display="flex"
      alignItems="center"
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }}
      {...props}
    >
      {icon}
      {label}
    </Link>
  );
};

export default SingleLink;
