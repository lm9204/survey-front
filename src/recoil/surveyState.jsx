import { atom } from 'recoil';

export const surveyState = atom({
  key: 'surveyState',
  default: Array(12).fill(0), // 총 12문항 (0은 미응답)
});