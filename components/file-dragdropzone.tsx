"use client";

export default function FileDragDropZone() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center border-4 border-dotted border-indigo-700">
      <input type="file" className="" />
      <p>파일을 끌어다 놓거나 클릭하여 업로드하세요.</p>
    </section>
  );
}
