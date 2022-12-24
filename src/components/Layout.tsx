import React from "react";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box
			bg="black"
			color="white"
			display="flex"
			justifyContent="center"
			alignItems="center"
			minH="100vh"
		>
			{children}
		</Box>
	);
};
export default Layout;
