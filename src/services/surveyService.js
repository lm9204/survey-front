import { fetchSurvey, postAnswers } from "../api/surveyAPI";

export const getSurveyData = async () => {
  const rawData = await fetchSurvey();

  const { title, description, questions } = rawData;

  return {
    title,
    description,
    questions,
  };
}

export const submitSurvey = async (questions, scores) => {
  const payload = questions.map((q, idx) => ({
    ...q,
    score: scores[idx],
  }));

  const response = await postAnswers(payload);

  return await response.json();
};