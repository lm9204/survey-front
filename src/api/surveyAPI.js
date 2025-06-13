export const fetchSurvey = async () => {
	const response = await fetch(`/api/questions/latest`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	if (!response.ok) {
		throw new Error('에러');
	}
	return await response.json();
}

export const postAnswers = async (payload) => {
  const response = await fetch('/api/answers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
	throw new Error('에러');
  }

  return await response.json();
}