// src/app/api/github-commits/route.ts
export async function GET() {
  const username = "jesusneri1024"; // cambia esto por tu usuario

  const res = await fetch(`https://api.github.com/users/${username}/events/public`);

  if (!res.ok) {
    return new Response("Error fetching GitHub events", { status: 500 });
  }

  const events = await res.json();

  // Filtra los eventos tipo PushEvent (que contienen commits)
  const commits = events
    .filter((e: any) => e.type === "PushEvent")
    .flatMap((e: any) =>
      e.payload.commits.map((commit: any) => ({
        message: commit.message,
        url: `https://github.com/${e.repo.name}/commit/${commit.sha}`,
        repo: e.repo.name,
        date: e.created_at,
      }))
    )
    .slice(0, 5); // los últimos 5 commits

  return Response.json(commits);
}
