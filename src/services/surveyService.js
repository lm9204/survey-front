import { fetchAimTypeData, fetchRecommendations, fetchSurvey, postAnswers, postFeedbacks } from "../api/surveyAPI";
import { toLowerCaseKeys } from "../utils/lowerCase";
import { getCreatedUserID } from "./userService";

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
    question_id: q.id,
    dimension: q.dimension,
    direction: q.direction,
    score: scores[idx],
  }));

  const userID = await getCreatedUserID();
  const response = await postAnswers(payload, userID);

  const resultData = {
    user_id: response.user_id,
    traits: response.traits,
  };
  
  return resultData;
};

export const determineUserAimType = (traits) => {
  const getChar = (dim, pos, neg) => (traits[dim] >= 50 ? pos : neg);

  return (
    getChar('ie', 'I', 'E') +
    getChar('cr', 'C', 'R') +
    getChar('ds', 'D', 'S')
  );
}

export const getAimTypeData = async (traits) => {
  try {
    const typeCode = determineUserAimType(traits);
    const data = await fetchAimTypeData(typeCode);

    return data || [];
  } catch (error) {
    console.error('유형 설명 요청 실패:', error);
    return { typeCode: '', description: '유형 설명을 불러오지 못했습니다.' };
  }
}

export const getRecommendations = async (traits) => {
  try {
    const lowerTraits = toLowerCaseKeys(traits);
    const data = await fetchRecommendations(lowerTraits);

    return data || [];
  } catch (error) {
    console.error('추천 활동 요청 실패:', error);
    return [];
  }
}

export const submitFeedbacks = async (feedbacks, phone) => {
  try {
    const payload = {
      'phone': phone || '',
      'feedbacks': feedbacks,
    }

    console.log(payload);

    const userID = await getCreatedUserID();
    const response = await postFeedbacks(payload, userID);

    return response;

  } catch (error) {
    console.error(error);
    return false;
  }
}