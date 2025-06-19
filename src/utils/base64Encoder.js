// JSON 객체 → base64 인코딩
export const encodeResultData = (data) => {
  const jsonStr = JSON.stringify(data);
  const uint8Array = new TextEncoder().encode(jsonStr);
  const base64String = btoa(String.fromCharCode(...uint8Array));
  return base64String;
};

// base64 → JSON 객체 복원
export const decodeResultData = (base64String) => {
  try {
    const binaryString = atob(base64String);
    const uint8Array = Uint8Array.from(binaryString, char => char.charCodeAt(0));
    const jsonStr = new TextDecoder().decode(uint8Array);
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Invalid base64 format or corrupted data');
    return null;
  }
};