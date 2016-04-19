'use strict';
import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Navigator,
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigatorTouchable from './NavigatorTouchable';
import Home from './Home';
import Second from './Second';
import realm from './db';

export default class RealmTest extends Component {
	componentWillMount() {
		this._renderScene = this.renderScene.bind(this);
	}

	renderScene(route, navigator) {
		if ( route.obj ) {
			return <Second
				obj={route.obj}
				onDelete={() => {
					navigator.popToTop();
					realm.write(() => {
						let obj = realm.objects('Obj').filtered('id == $0', route.obj)[0];
						realm.delete(obj);
					});
				}} />;
		}

		return <Home
			onNext={() => {
				let obj = realm.objects('Obj')[0];
				if ( obj ) {
					navigator.push({
						obj: obj.id,
					});
				} else {
					realm.write(() => {
						obj = realm.create('Obj', {
							id: Math.random().toString(32),
						});

						navigator.push({
							obj: obj.id,
						});
					});
				}
			}}/>;
	}

	render() {
		return (
			<Navigator
				ref={(navigator) => this.navigator = navigator}
				initialRoute={{}}
				navigationBar={
					<Navigator.NavigationBar
						routeMapper={{
							LeftButton(route, navigator, index, navState) {
								if ( route.obj ) {
									return (
										<NavigatorTouchable
											style={styles.appBarButton}
											onPress={() => {
												navigator.pop();
											}}>
											<Icon
												name='arrow-back'
												size={24}
												color='#fff' />
										</NavigatorTouchable>
									);
								}
							},
							RightButton(route, navigator, index, navState) {
							},
							Title(route, navigator, index, navState) {
							}
						}}
						style={styles.appBar} />
				}
				renderScene={this._renderScene} />
		);
	}
}

const styles = StyleSheet.create({
	appBar: {
		backgroundColor: '#2196F3',
		elevation: 4,
	},
	appBarButton: {
		flex: 1,
		width: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
