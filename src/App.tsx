import { Box, Heading } from "@chakra-ui/react";

function App() {
	return (
		<Box
			bg="black"
			color="white"
			display="flex"
			justifyContent="center"
			alignItems="center"
			minH="100vh"
		>
			<Heading>
				Time is{" "}
				<Heading display="inline" color="lime">
					Money
				</Heading>
			</Heading>
		</Box>
	);
}

export default App;
