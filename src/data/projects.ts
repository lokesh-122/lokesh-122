import { useEffect, useState } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

// Fallback data in case GitHub API fails
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "AI Portfolio",
    description: "A modern portfolio website showcasing AI/ML projects and professional experience.",
    image: "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://github.com/lokesh-122",
    githubUrl: "https://github.com/lokesh-122",
    featured: true
  }
];

const fetchGitHubProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/lokesh-122/repos');
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    return repos.map((repo: any, index: number) => ({
      id: index + 1,
      title: repo.name.split('-').map((word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      description: repo.description || 'An innovative project showcasing technical expertise.',
      image: `https://images.pexels.com/photos/8386${440 + index}/pexels-photo-8386${440 + index}.jpeg`,
      tags: [
        repo.language || 'JavaScript',
        ...((repo.topics || []).slice(0, 3))
      ],
      demoUrl: repo.homepage || repo.html_url,
      githubUrl: repo.html_url,
      featured: index < 3
    }));
  } catch (error) {
    console.warn('Error fetching GitHub projects:', error);
    return fallbackProjects;
  }
};

export const useGitHubProjects = (refreshInterval = 300000) => { // 5 minutes default
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const githubProjects = await fetchGitHubProjects();
        setProjects(githubProjects);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Failed to fetch GitHub projects. Please try again later.');
        setProjects(fallbackProjects);
        setLoading(false);
      }
    };

    // Initial load
    loadProjects();

    // Set up periodic refresh
    const intervalId = setInterval(loadProjects, refreshInterval);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  return { projects, loading, error };
};