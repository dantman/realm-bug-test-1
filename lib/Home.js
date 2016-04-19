'use strict';
import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Button from 'apsl-react-native-button';
import Page from './Page';

const Home = ({onNext}) => (
	<Page>
		<View style={styles.container}>
			<Text style={styles.title}>
				Welcome
			</Text>
			<Button
				style={styles.button}
				textStyle={styles.buttonText}
				onPress={onNext}>
				Next
			</Button>
		</View>
	</Page>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	button: {
		backgroundColor: '#0D47A1',
		borderWidth: 0,
		padding: 8,
		paddingHorizontal: 16,
		alignSelf: 'center',
	},
	buttonText: {
		color: '#fff',
	},
});

export default Home;
