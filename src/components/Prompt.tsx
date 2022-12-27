import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";

interface PromptProps {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	salary: number;
}

const Prompt = ({
	onSubmit: handleSubmit,
	onChange: handleChange,
	salary,
}: PromptProps) => {
	return (
		<form onSubmit={handleSubmit}>
			<FormControl
				display="flex"
				flexDir="column"
				alignItems="center"
				w={{ base: "xs", md: "lg" }}
			>
				<FormLabel fontSize={{ base: "3xl", md: "6xl" }} whiteSpace="nowrap">
					What is your salary?
				</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents="none" children="$" fontSize="3xl" />
					<Input
						type="number"
						variant="flushed"
						value={salary > 0 ? salary : ""}
						onChange={handleChange}
						textAlign="center"
						fontSize="3xl"
						focusBorderColor="white"
						isRequired
						pr={10}
					/>
				</InputGroup>
			</FormControl>
		</form>
	);
};
export default Prompt;
