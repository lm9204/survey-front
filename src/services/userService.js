import Cookies from "js-cookie";
import { fetchUserID } from "../api/userAPI";

export const getCreatedUserID = async () => {
	const existingUserID = Cookies.get('user-id');
	if (existingUserID) return existingUserID;

	const { user_id } = await fetchUserID();

	Cookies.set('user-id', user_id);
	return user_id;
}

export const getSubmitted = () => {
	const existingSubmitted = Cookies.get('submitted');
	if (existingSubmitted) return true;

	return false;
}

export const setSubmitted = () => {
	if (getSubmitted()) return;

	Cookies.set('submitted', true);
}