import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-d360d7d2`;

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

export async function getProjects() {
  const response = await fetchAPI('/projects');
  return response.data || [];
}

export async function getExperience() {
  const response = await fetchAPI('/experience');
  return response.data || [];
}

export async function getEducation() {
  const response = await fetchAPI('/education');
  return response.data || [];
}

export async function getCertifications() {
  const response = await fetchAPI('/certifications');
  return response.data || [];
}

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  const response = await fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response;
}

export async function seedDatabase() {
  const response = await fetchAPI('/seed', {
    method: 'POST',
  });
  return response;
}
