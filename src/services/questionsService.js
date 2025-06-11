import { fetchQuestions } from "../api/questionAPI";

export const getQuestions = async () => {
	const list = await fetchQuestions();
	return list || [];
}