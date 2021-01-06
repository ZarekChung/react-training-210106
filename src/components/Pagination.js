// import React, { Component } from 'react';

// class Pagination extends Component {
//     render() {
//         return (
//             <div>
//                 <ul className="page">
//                    <li><a href="https://hackmd.io/xG1tw_nER7Wu3xL1gbGYPQ?both">Prev </a></li>
//                    <li><a href="#">1</a></li>
//                    <li><a href="#">2</a></li>
//                    <li><a href="#">Next</a></li>
//                 </ul>
                
//             </div>
//         );
//     }
// }

// export default Pagination;

//以上是之前寫的分頁



import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

export default function PaginationLink() {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 3);
          return (
            <Pagination
              page={page}
              count={3}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
