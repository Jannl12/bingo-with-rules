import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

interface props {
  numericValue: String;
  style: string;
}

export const CirkularNumbers: React.FC<props> = (props) => {
  return <Avatar className={props.style}>{props.numericValue}</Avatar>;
};
