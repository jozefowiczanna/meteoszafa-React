import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';

const StyledListItem = styled.li`
  list-style: none;
  margin: 0.4rem 0;
  position: relative;

  &:before {
		display: block;
		content: "-";
		font-weight: bold;
		position: absolute;
		left: -12px;
	}
`;

const ListTakeItem = ({ item }) => (
  <StyledListItem>{item}</StyledListItem>
);

export default ListTakeItem;