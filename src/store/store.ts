import { atom } from 'recoil';

export const faqState = atom({
	key: 'faqState', // unique ID (with respect to other atoms/selectors)
	default: '',
});
