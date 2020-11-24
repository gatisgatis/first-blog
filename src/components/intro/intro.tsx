import React, { FC } from "react";
import "./intro.css";

type Props = {
  text: string;
};

const Intro: FC<Props> = ({ text }) => {
  return <div className="intro">{text.substring(0, 30).toUpperCase()}</div>;
};

export default Intro;
