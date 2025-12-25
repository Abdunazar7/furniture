import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";

import { Blog1 } from "./Blog.styled";
import Houses from "../../components/Houses";

function Blog(props) {
  const { goToHome } = useAppNavigation();

  return (
    <Blog1>
      <div className="navigate">
        <p onClick={goToHome}>Главная</p>
        <RightArr />
        <p>Блог</p>
      </div>

      <h1>Блог</h1>

      <Houses showHeader={false} />
      <br />
      <Houses showHeader={false} />
    </Blog1>
  );
}

export default Blog;
