"use client";

import DropBoxImage from "./dropbox-image";

export default function ImageList() {
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-4">
      <DropBoxImage />
      <DropBoxImage />
      <DropBoxImage />
      <DropBoxImage />
    </section>
  );
}
