"use client";

import { useQuery } from "@tanstack/react-query";
import DropBoxImage from "./dropbox-image";
import { searchFiles } from "actions/storageAcionts";
import { Spinner } from "@material-tailwind/react";

export default function ImageList({ searchInput }) {
  const searchImageQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-4">
      {searchImageQuery.isLoading && <Spinner />}
      {searchImageQuery.data &&
        searchImageQuery.data.map((image) => (
          <DropBoxImage key={image.id} image={image} />
        ))}
    </section>
  );
}
