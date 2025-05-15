"use client";

import { useEffect, useState } from "react";

type Commit = {
  message: string;
  url: string;
  repo: string;
  date: string;
};

export function RecentCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    fetch("/api/github-commits")
      .then((res) => res.json())
      .then(setCommits);
  }, []);

  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">What I’ve Been Coding</h2>
      <ul className="list-disc pl-4">
        {commits.map((commit, i) => (
          <li key={i}>
            <a
              href={commit.url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {commit.message}
            </a>{" "}
            <span className="text-sm text-gray-500">
              en <strong>{commit.repo}</strong> –{" "}
              {new Date(commit.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
