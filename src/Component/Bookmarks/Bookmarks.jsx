import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div>
            <div className=" bg-gray-300 pb-4 pl-5 pr-5">
                <div>
                    <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
                </div>
            <h2 className="text-3xl text-yellow-400 text-center w-96 bg-black p-4 gap-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = { 
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;