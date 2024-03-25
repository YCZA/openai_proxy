export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const targetHost = url.searchParams.get('target') || 'api.openai.com';
    url.host = "api.openai.com";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
