'use strict';
import React, {
	TouchableOpacity,
	View
} from 'react-native';

const NavigatorTouchable = ({style, children, ...props}) => (
	<TouchableOpacity
		{...props}
		style={{flex: 1}}>
		<View style={[style, {alignSelf: 'center', alignItems: 'center'}]}>
			{children}
		</View>
	</TouchableOpacity>
);

export default NavigatorTouchable;
