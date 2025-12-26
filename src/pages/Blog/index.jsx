import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";

import { Blog1 } from "./Blog.styled";
import Houses from "../../components/Houses";

function Blog(props) {
  const { goToHome } = useAppNavigation();

  return (
    <Blog1>
      <nav
        className="navigate"
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "40px",
          alignItems: "center",
        }}
      >
        <p onClick={goToHome} style={{ color: "#808080", cursor: "pointer" }}>
          Главная
        </p>
        <RightArr />
        <span>Блог</span>
      </nav>

      <h1>Блог</h1>

      <Houses showHeader={false} />
      <br />
      <Houses showHeader={false} />
    </Blog1>
  );
}

export default Blog;
