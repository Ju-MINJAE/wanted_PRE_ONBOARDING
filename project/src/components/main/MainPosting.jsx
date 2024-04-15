import React from "react";
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
      <PostingCard />
    </div>
  );
};

export default MainPosting;
