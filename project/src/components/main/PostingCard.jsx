import React from "react";

const PostingCard = () => {
  return (
    <div>
      <div className="postingHeader">
        <img src={""} alt="user" />
        <span>NickName</span>
      </div>

      <div className="postingBody">
        <img src={""} alt="thumbnail" />
        <p>포스팅 제목</p>
        <p>포스팅 요약</p>
      </div>

      <div className="postingFooter">
        <span>하트 0</span>
      </div>
    </div>
  );
};

export default PostingCard;
