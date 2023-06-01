import React,{ useState} from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({ post }) {

  const[like, setLike] = useState(post.like);
  const[isLiked, setIsLiked] = useState(false);

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like +1);
    // setLike(like);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((e) => e.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postCenterImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assests/post/like2.png" alt="" onClick={likeHandler} className="likeIcon" />
            <img src="/assests/post/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
            {/* <span className="postLikeCounter">{post.like} people liked it</span> */}
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
