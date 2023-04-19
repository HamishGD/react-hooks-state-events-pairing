import video from "../data/video.js";
import Comment from "./Comment.js";
import React, {useState} from "react";


function App() {
  console.log("Here's your data:", video);

  const [upVote, setUpVote] = useState(video.upvotes);
  const [downVote, setDownVote] = useState(video.downvotes);
  const [isHidden, setIsHidden] = useState(false);

  const thumbsUp = () => {
    setUpVote(upVote + 1);
  }

  const thumbsDown = () => {
    setDownVote(downVote + 1);
  }



  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

  <h2>{video.title}</h2>
  <span>{video.views} Views | Uploaded {video.createdAt}</span>
  <div><button onClick={thumbsUp}>👍{upVote}</button>
        <button onClick={thumbsDown}>👎{downVote}</button>
  </div>

  <div className="hideComments"><button onClick={() =>{setIsHidden(!isHidden)}}>{!isHidden? "Show Comments": "Hide Comments"}
  </button>
  </div>

  {isHidden ? null :
  <React.Fragment>
    <div><h2>{video.comments.length} Comments</h2></div>
    <div>{video.comments.map((comment) => {

      return <Comment key={comment.id} comment={comment.comment} user={comment.user}/>
    
    })}

    </div>
    </React.Fragment>}

    </div>
  );
}

export default App;



















