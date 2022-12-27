import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box
			bgGradient="radial(#C33764, #1D2671)"
			color="white"
			display="flex"
			justifyContent="center"
			alignItems="center"
			minH="100vh"
		>
			{children}
			<Text position="absolute" bottom={2}>
				{`©️ ${new Date().getFullYear()} `}
				<Link href="https://marvincyk.com/" isExternal>
					Marvin Chew
				</Link>
			</Text>
		</Box>
	);
};
export default Layout;
