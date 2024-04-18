import React from "react";
import { posing } from "../../assets/posting";
import PostingCard from "./PostingCard";

const MainPosting = () => {
  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid blue",
        width: "100%",
        height: "400px",
      }}
    >
      {posing.map((post, idx) => (
        <PostingCard key={post.positingID} post={post} />
      ))}
    </div>
  );
};

export default MainPosting;
