import React, {
  Fragment,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";

const Title = (props) => {
  console.log("props", props);
  return (
    <div class="section-title-container">
      <h4 class="text-lg md:text-xl section-title section-title-normal">
        <b></b>
        <span class="section-title-main">{props.name}</span>
        <b></b>
      </h4>
    </div>
  );
};

export default Title;
