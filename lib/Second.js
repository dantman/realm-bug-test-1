'use strict';
import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Button from 'apsl-react-native-button';
import Page from './Page';
import realm from './db';

class Second extends Component {
	componentWillMount() {
		this.obj = realm.objects('Obj').filtered('id == $0', this.props.obj)[0];

		// Re-render on a timer to simulate dynamic scenes that may end up accessing the
		// Realm object during the transition before their unmount
		this.interval = setInterval(() => this.setState({now: new Date()}), 250);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const {onDelete} = this.props;

		return (
			<Page>
				<View style={styles.container}>
					<Text style={styles.title}>
						Object: {this.obj.id}
					</Text>
					<Button
						style={styles.button}
						textStyle={styles.buttonText}
						onPress={onDelete}>
						Delete
					</Button>
				</View>
			</Page>
		);
	}
}

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
		backgroundColor: '#F44336',
		borderWidth: 0,
		padding: 8,
		paddingHorizontal: 16,
		alignSelf: 'center',
	},
	buttonText: {
		color: '#fff',
	},
});

export default Second;
