"use client";

import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { getImageUrl } from "utils/supabase/storage";

export default function DropBoxImage({ image }) {
  console.log(image);
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <img
          src={getImageUrl(image.name)}
          alt="강아지"
          className="w-full aspect-square rounded-2xl"
        />
      </div>
      {/* file Name */}
      <div>{image.name}</div>
      <div className="absolute top-6 right-6 rounded-full">
        <IconButton color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
