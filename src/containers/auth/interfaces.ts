import { AuthActionType } from './enums';

export interface AuthState {
	token: string;
	loading: boolean;
	threshold: number;
	loginError: string;
	logoutError: string;
	signupError: string;
	refreshToken: string;
	passwordResetError: string;
}

export interface AuthAction {
	type: AuthActionType;
	payload?: Partial<AuthState>;
}
