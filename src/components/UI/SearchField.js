import { h } from 'preact';
import styled from 'styled-components';
import { Search } from 'preact-feather';

const SearchField = props => (
	<FieldWrapper>
		<Search size={18} />
		<Input {...props} />
	</FieldWrapper>
);

export default SearchField;

const Input = styled.input`
	font-size: 16px;
	padding: 6px 6px 6px 30px;
	border: 1px solid #ccc;
	border-radius: 2px;
`;

const FieldWrapper = styled.div`
	display: inline-block;
	position: relative;
	margin: 0 0 10px;
	> svg {
		position: absolute;
		top: 6px;
		left: 6px;
	}
  
  @media (max-width: 570px) {
    display: block;
    
    input {
      width: 100%;
    }
	}
`;
