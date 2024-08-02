"use client";

import { IconButton } from "@material-tailwind/react";
import Image from "next/image";

export default function DropBoxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <Image
          width={150}
          height={150}
          src={"/images/cutedog.jpeg"}
          alt="강아지"
          className="w-full aspect-square rounded-2xl"
        />
      </div>
      {/* file Name */}
      <div>cutedog.jpeg</div>
      <div className="absolute top-6 right-6 rounded-full">
        <IconButton color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
