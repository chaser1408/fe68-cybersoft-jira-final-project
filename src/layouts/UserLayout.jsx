import withLayout from "hocs/withLayout";
import React from "react";

function UserLayout(props) {
  return (
    <>
      <div className="">
        <div className="">Hello</div>
        <div className="">{props.children}</div>
      </div>
    </>
  );
}

export default withLayout(UserLayout);
