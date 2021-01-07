import React from 'react';
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';

const Pagination = ({ postsPerPage, totalPosts, paginate, className }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul >
        {pageNumbers.map(number => (
          <li key={number} className={className}>
            <a onClick={(event) => paginate(number,event)} href='#' >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;