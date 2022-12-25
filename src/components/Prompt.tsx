import { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface PromptProps {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Prompt = ({ onSubmit: handleSubmit }: PromptProps) => {
	const [salary, setSalary] = useState<number>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSalary(parseInt(event.target.value));
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl display="flex" flexDir="column" alignItems="center">
				<FormLabel fontSize="6xl" whiteSpace="nowrap">
					What is your salary?
				</FormLabel>
				<Input
					type="number"
					variant="flushed"
					value={salary}
					onChange={handleChange}
					textAlign="center"
					fontSize="3xl"
					focusBorderColor="white"
					isRequired
				/>
			</FormControl>
		</form>
	);
};
export default Prompt;
