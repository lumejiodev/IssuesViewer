import { h } from 'preact';
import PageWrapper from '../../components/UI/PageWrapper';

const Details = ({ matches: { id } }) => <PageWrapper>ID: {id}</PageWrapper>;

export default Details;
