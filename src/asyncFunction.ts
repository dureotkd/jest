export async function okpromise() {
  return await Promise.resolve("ok");
}

export function nopromise() {
  return Promise.reject("no");
}
