"use client";
import { useParams } from "next/navigation";

export default function SectionPage() {
  const params = useParams();
  const section = params.section;

  return (
    <div className="p-6 text-xl">
      <h1 className="font-bold">
        Welcome to the <span className="capitalize">{section}</span> page!
      </h1>
      <p>
        This is dynamic content for <strong>{section}</strong>.
      </p>
    </div>
  );
}
