import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import LoadnigMain from "../../loading/LoadnigMain";
import Comments from "../../comments/Comments";
import commen from "../../images/commen.svg";
import like from "../../images/like.svg";
import DOMPurify from "dompurify";
import leftimg from "../../images/left.svg";
import right from "../../images/right.svg";
import "./blogs.scss";
const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();
  const [blog1, setBlog1] = useState();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [open_comments, setOpne_comments] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [recCount, setRecCount] = useState(0);
  const [recWidth, setRecWidth] = useState(0);

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
    const fetchDataS = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${BaseURL}/blog/list/`);

        setBlogs(res.data.blogs);
        setIsLoading2(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataS();
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, [blogId]);

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
  const recRef = useRef();
  useEffect(() => {
    if (recRef.current) {
      const width = recRef.current.getBoundingClientRect().width;
      setRecWidth(width);
    }
  }, [blogs]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const handleRec = (direction) => {
    if (viewportWidth <= 600) {
      if (direction > 0 && recCount <= blogs.length - 2) {
        setRecCount(recCount + 1);
      }
    }
    if (viewportWidth < 1163 && viewportWidth > 600) {
      if (direction > 0 && recCount <= blogs.length - 3) {
        setRecCount(recCount + 1);
      }
    }
    if (viewportWidth > 1163) {
      if (direction > 0 && recCount <= blogs.length - 4) {
        setRecCount(recCount + 1);
      }
    }
    if (direction < 0 && recCount > 0) {
      setRecCount(recCount - 1);
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
      {!isLoading2 && (
        <div className="recomended_blogs">
          <h2>Recomended Blogs</h2>
          <div className="rec_relative_cont">
            <div
              className="blogs_rec_cont"
              style={{
                left: `calc((${recWidth}px + 5rem) * -1 * ${recCount})`,
              }}
            >
              {blogs?.map((item, index) => (
                <Link
                  ref={recRef}
                  className="courses_rec_item"
                  to={`/blogs/${item.slug}`}
                  key={index}
                >
                  <div>
                    <img src={`${item.image}`} alt="Python Image" />
                    <div className="course_rec_text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="rec_btns">
            <img
              src={leftimg}
              alt=""
              className="test_left"
              onClick={() => handleRec(-1)}
            />
            <img
              src={right}
              alt=""
              className="test_right"
              onClick={() => handleRec(1)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
