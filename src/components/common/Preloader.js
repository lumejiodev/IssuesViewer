import { h } from 'preact';
import styled, { keyframes } from 'styled-components';
import { Loader } from 'preact-feather';

const LoaderWrapper = styled.div`
	margin: 30px 0;
	text-align: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const IconWrapper = styled.span`
	display: block;
	animation: ${rotate} 2s linear infinite;
`;

const Preloader = () => (
	<LoaderWrapper>
		<IconWrapper>
			<Loader />
		</IconWrapper>
	</LoaderWrapper>
);

export default Preloader;
