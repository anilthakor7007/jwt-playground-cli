export function decodeJWT(token: string) {
  const [header, payload, signature] = token.split('.');

  if (!header || !payload || !signature) {
    throw new Error('Invalid JWT format');
  }

  const decode = (str: string) =>
    JSON.parse(Buffer.from(str, 'base64url').toString('utf-8'));

  return {
    header: decode(header),
    payload: decode(payload),
    signature,
  };
}