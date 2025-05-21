export const dynamic = "force-dynamic";

export async function GET() {
  const username = "jesusneri1024";

  // Paso 1: Obtener todos los repos públicos del usuario
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      "Accept": "application/vnd.github+json",
    },
  });

  if (!reposRes.ok) {
    return new Response("Error fetching repositories", { status: 500 });
  }

  const repos = await reposRes.json();
  const allCommits: any[] = [];

  // Paso 2: Para cada repo, obtener sus últimos commits
  for (const repo of repos) {
    const repoName = repo.name;

    const commitsRes = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits`, {
      headers: {
        "Accept": "application/vnd.github+json",
      },
    });

    if (!commitsRes.ok) continue;

    const commits = await commitsRes.json();

    const formatted = commits.slice(0, 2).map((commit: any) => ({
      message: commit.commit.message,
      url: commit.html_url,
      repo: repoName,
      date: commit.commit.author.date,
    }));

    allCommits.push(...formatted);
  }

  // Ordenar por fecha y devolver los últimos 5
  allCommits.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return Response.json(allCommits.slice(0, 5));
}
