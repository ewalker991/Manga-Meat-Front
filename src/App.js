import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MangaMeat</h1>
      </header>
      <div className="feed">
        {/* <h5>FEED</h5> */}
        <div className="post">
          
          <div className="author">
            <h3>poster's username</h3>
            {/* poster's profile picture, replace <p> with image? */}
            <p className="profilePicture">A</p>
            <p>Post text</p>
            {/* poster's submitted picture replace <p> with image?*/}
            <p className="postPicture">B</p>
            <button className="submit-comment">COMMENT</button>
          </div>

          <div className="comments">
            <h3>username</h3>
            <p>comment</p>
            <button className="edit">EDIT</button>
            <button className="delete">DELETE</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
