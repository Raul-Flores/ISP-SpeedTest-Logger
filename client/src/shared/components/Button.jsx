import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Loader } from 'react-feather';

import { size, color, mixin } from 'shared/utils/style';

const defaultVariant = css`
	color: ${color.textPrimary};
	background: ${color.w2};
	&:not(:disabled) {
		&:hover {
			background: ${darken(0.05, color.w2)};
		}
	}
`;

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 35px;
	vertical-align: middle;
	line-height: 1;
	padding: 0 12px;
	white-space: nowrap;
	border-radius: ${size.radius};
	transition: all 0.1s ease-in-out;
	appearance: none;
	outline: none;
	border: 0;
	${mixin.clickable}
	${defaultVariant}

	&:disabled {
		opacity: 0.7;
		cursor: default;
	}
`;

const Text = styled.div`
	padding-left: ${props => (props.withPadding ? 5 : 0)}px;
`;

const Button = ({ onClick, icon, disabled, isWorking, children, ...otherProps }) => {
	const handleClick = () => {
		if (!disabled && !isWorking) {
			onClick();
		}
	};

	return (
		<StyledButton onClick={handleClick} disabled={disabled || isWorking} {...otherProps}>
			{isWorking && <Loader size={14} />}
			{!isWorking && icon}
			{children && <Text withPadding={isWorking || icon}>{children}</Text>}
		</StyledButton>
	);
};

export default Button;