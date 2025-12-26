import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange, forcePage }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            forcePage={forcePage}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="active"
            disabledClassName="disabled"
        />
    );
};
export default Pagination;
