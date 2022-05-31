import { NavigationAction } from "@react-navigation/core";
import { State } from "react-native-gesture-handler";

export type NavigateProps = {
	(name: string, params?: unknown): void;
};

export type GenericNavigationProps = {
	navigate: NavigateProps;
	setOptions: (options: Partial<unknown>) => void;
	goBack: () => void;
	dispatch(action: NavigationAction | ((state: State) => NavigationAction)): void;
};
