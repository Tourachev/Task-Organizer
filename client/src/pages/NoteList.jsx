import React, {Component} from 'react';
import {useTable} from 'react-table';
import api from '../api';

import styled from 'styled-components';

// import 'react-table/react-table.css';

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`;

class NoteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			columns: [],
			isLoading: false
		};
	}

	componentDidMount = async () => {
		this.setState({isLoading: true});

		await api.getAllMovies().then(notes => {
			this.setState({
				notes: notes.data.data,
				isLoading: false
			});
		});
	};

	render() {
		const {notes, isLoading} = this.state;
		console.log('TCL: NoteList -> render -> notes', notes);

		const columns = [
			{
				Header: 'ID',
				accessor: '_id',
				filterable: true
			},
			{
				Header: 'Name',
				accessor: 'name',
				filterable: true
			},
			{
				Header: 'Rating',
				accessor: 'rating',
				filterable: true
			},
			{
				Header: 'Time',
				accessor: 'time',
				Cell: props => <span>{props.value.join(' / ')}</span>
			}
		];

		let showTable = true;
		if (!notes.length) {
			showTable = false;
		}

		return (
			<Wrapper>
				{showTable && (
					<useTable
						data={notes}
						columns={columns}
						loading={isLoading}
						defaultPageSize={10}
						showPageSizeOptions={true}
						minRows={0}
					/>
				)}
			</Wrapper>
		);
	}
}

export default NoteList;
