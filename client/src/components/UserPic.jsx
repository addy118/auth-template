import React from "react";
import { AvatarFallback } from "./ui/avatar";

export default function UserPic({ name }) {
  return (
    <>
      <AvatarFallback className="text-xs">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </>
  );
}
