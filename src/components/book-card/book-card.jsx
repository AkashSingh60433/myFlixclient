import PropTypes from "prop-types";

// The BookCard function component 
export const BookCard = ({ book, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onBookClick(book);
      }}
    >
      {book.title}
    </div>
  );
};

// Here is where we define all the props constraints for the BookCard
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  onBookClick: PropTypes.func.isRequired
};