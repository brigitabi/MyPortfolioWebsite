import React from 'react';
import myFavoriteBooks from '../components/FavoriteBooks';

const Book = ({ title, description, imageURL, amazonLink }) => {
  return (
    <div name="books" className="border border-grey-200 rounded-lg p-4 flex flex-col items-center shadow  shadow-slate-400 transition-transform duration-300 ease-in-out transform hover:cursor-pointer hover:scale-105">
      <div className="flex flex-row items-center space-x-4">
        <img
          src={imageURL}
          alt={title}
          className="w-[50px] h-[50px] mb-3 flex items-start rounded-full shadow shadow-slate-500 hover:scale-110"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <a
        href={amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        See on Amazon
      </a>
    </div>
  );
};

const Books = ({}) => {
  return (
    <div id="book" className="py-12 grid gap-3 sm:px-8">
      <div className='px-8 py-8'>
      <p className="text-blue-950 text-3xl py-12 text-center">
        Book recommendations
      </p>

      <p className="text-center p-4 mx-auto transition-transform duration-300 ease-in-out transform font-bold shadow-md hover:scale-105 shadow-slate-400 rounded-md">
        Here are a few of the books I've explored, spanning various subjects
        from programming to personal growth, leadership, and beyond. Highly
        recommend giving them a read! 📚{' '}
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-8 py-4">
        {myFavoriteBooks.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            description={book.description}
            imageURL={book.imageURL}
            amazonLink={book.amazonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
