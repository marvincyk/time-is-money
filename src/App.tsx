import { useState } from "react";
import { useBoolean } from "@chakra-ui/react";
import Layout from "./components/Layout";
import Prompt from "./components/Prompt";
import Counter from "./components/Counter";

function App() {
	const [salary, setSalary] = useState<number>(0);
	const [isCounting, setIsCounting] = useBoolean();

	const handlePromptSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsCounting.toggle();
	};

	const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSalary(parseInt(event.target.value));
	};

	return (
		<Layout>
			{isCounting ? (
				<Counter salary={salary} />
			) : (
				<Prompt
					salary={salary}
					onChange={handlePromptChange}
					onSubmit={handlePromptSubmit}
				/>
			)}
		</Layout>
	);
}

export default App;
