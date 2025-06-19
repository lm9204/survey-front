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

  if (!response.ok) {
    throw new Error('에러');
  }

  return await response.json();
}

export const fetchAimTypeData = async (typeCode) => {
  const response = await fetch(`/api/aim-type/${typeCode}`, {
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