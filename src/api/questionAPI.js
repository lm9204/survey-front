export const fetchQuestions = async () => {
	const res = await fetch(`${process.env.REACT_APP_SURL}/api/v1/questions/latest`);
	if (!res.ok) {
		throw new Error('에러');
	}
	return await res.json();
}