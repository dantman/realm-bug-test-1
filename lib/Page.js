'use strict';
import React, {
	StyleSheet,
	View
} from 'react-native';

const Page = ({children}) => (
	<View style={styles.scene}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	}
});

export default Page;