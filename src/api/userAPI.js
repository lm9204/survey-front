export const fetchUserID = async () => {
	const response = await fetch('/api/user-id', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json'},
	});

	if (!response.ok)
		throw new Error('에러');

	return await response.json();
}