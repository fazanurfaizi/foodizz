import { Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View, ViewProps } from 'react-native';
import themedStyle from './styles';

export interface ProgressBarProps extends ViewProps {
	progress: number;
	text?: string;
}

export const ProgressBar = ({ progress, text, ...props }: ProgressBarProps): React.ReactElement<ViewProps> => {
	const styles = useStyleSheet(themedStyle);

	return (
		<View style={styles.container}>
			<View {...props} style={[styles.progressContainer, props.style]}>
				<View style={[styles.progress, { width: `${progress}%` }]} />
			</View>
			{text && (
				<Text style={styles.text} category="c2">
					{text}
				</Text>
			)}
		</View>
	);
};
