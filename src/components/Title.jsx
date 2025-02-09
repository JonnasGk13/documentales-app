import React from 'react';

const Title = ({ title = '', className = '' }) => {
	return <h1 className={className}>{title.toUpperCase()}</h1>;
};

export default Title;
