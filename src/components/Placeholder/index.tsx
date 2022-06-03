import React from 'react'
import { createShimmerPlaceholder, ShimmerPlaceholderProps } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'react-native-svg'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export const Placeholder = ({ children, ...props }: ShimmerPlaceholderProps) => {
	return <ShimmerPlaceholder {...props}>{children}</ShimmerPlaceholder>
}
