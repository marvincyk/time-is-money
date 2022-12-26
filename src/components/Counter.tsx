import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

interface CounterProps {
	salary: number;
}

const Counter = ({ salary }: CounterProps) => {
	const [count, setCount] = useState<number>(0);

	const salaryPerSecond = salary / (365 * 24 * 60 * 60);

	useEffect(() => {
		const interval = setInterval(
			() => setCount((prevCount) => prevCount + salaryPerSecond),
			1000
		);
		return () => clearInterval(interval);
	}, [count, salary]);

	return (
		<Text fontSize={{ base: "3xl", md: "6xl" }}>{`$ ${parseFloat(
			count.toFixed(2)
		).toLocaleString()}`}</Text>
	);
};
export default Counter;
