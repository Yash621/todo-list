export async function fun(input: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const arrayBufferDigest = await crypto.subtle.digest("SHA-256", data);
  const decoder = new TextDecoder();
  const hash = decoder.decode(arrayBufferDigest);
  return hash;
}
