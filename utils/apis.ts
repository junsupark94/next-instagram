const url = "https://czahrrzcxmddpnrdsjet.supabase.co/rest/v1";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YWhycnpjeG1kZHBucmRzamV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNTcxNDMsImV4cCI6MjAwNzYzMzE0M30.FDHQDEYWu267KorPx2Ru0cvS4-wTXfClqmovEfTQBD0";

const headers = {
  headers: {
    apikey: apikey,
  }
}

export async function getPosts() {
  const postsRes = await fetch(`${url}/posts`, headers);
  const postsData = await postsRes.json();
  const usersRes = await fetch(`${url}/users`, headers)
  const usersData = await usersRes.json();

  // return data;
}
