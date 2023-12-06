import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import Comments from "../../comments/Comments";
import commen from "../../images/commen.svg";
import like from "../../images/like.svg";
import DOMPurify from "dompurify";
import "./blogs.scss";
const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();
  const [blog1, setBlog1] = useState();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [open_comments, setOpne_comments] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/blog/${blogId}`);
        setBlog(res.data.blogs);
        setComment(res.data.comment.reverse());
        setLikeCount(res.data.blogs.thumbs_up);
        const pureData = DOMPurify.sanitize(res.data.blogs.details);
        setBlog1(pureData);
        setIsLoading(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  const handleLike = async () => {
    if (!liked) {
      try {
        const like = await axios.post(`${BaseURL}/thumsup/${blogId}/`, {});
        setLiked(true);
        setLikeCount(likeCount + 1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <div className="single_blog_cont">
          <div
            className={`blog_coments_container ${
              open_comments && "openComents"
            }`}
          >
            <div
              className={`blog_coments_bacground ${
                !open_comments && "opacity_zero"
              }`}
              onClick={() => setOpne_comments(false)}
            ></div>
            <div className={`coment_closed ${open_comments && "coment_open"}`}>
              <Comments
                comment={comment}
                setOpne_comments={setOpne_comments}
                blog={blog.id}
              />
            </div>
          </div>
          <div className="blog">
            <h2 className="blog_title">{blog.title}</h2>

            <div className="blog_likes_cont">
              <div className={`blog_likes ${liked && "blog_liked"}`}>
                <img src={like} alt="" onClick={handleLike} />({likeCount})
              </div>
              <div className="blog_likes">
                <img
                  src={commen}
                  alt=""
                  onClick={() => setOpne_comments(!open_comments)}
                />
                ({comment.length || 0})
              </div>
            </div>
            <div className="blog_content">
              <img src={blog?.image} alt="" />
              <div className="html_text">
                <div dangerouslySetInnerHTML={{ __html: blog1 }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
