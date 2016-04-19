'use strict';
import React, {
	TouchableNativeFeedback,
	View
} from 'react-native';

const NavigatorTouchable = ({style, children, ...props}) => (
	<TouchableNativeFeedback
		{...props}
		background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
		<View style={style}>
			{children}
		</View>
	</TouchableNativeFeedback>
);

export default NavigatorTouchable;
