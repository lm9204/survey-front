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

export const postAnswers = async (payload, userID) => {
  const response = await fetch(`/api/answers?user_id=${userID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
  throw new Error('에러');
  }

  return await response.json();
}

export const postFeedbacks = async (payload, userID) => {
  const response = await fetch(`/api/feedback?user_id=${userID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && !response.status !== 400 && response.status !== 409) {
    throw new Error('에러');
  }

  return response;
}

export const fetchAimTypeData = async (typeCode) => {
  const response = await fetch(`/api/type/${typeCode}`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  });

if (!response.ok) {
  throw new Error('에러');
}

  return await response.json();
};


export const fetchRecommendations = async (traits) => {
  const response = await fetch('/api/recommend', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(traits),
  });

  if (!response.ok) {
  throw new Error('에러');
  }
  return await response.json();
};