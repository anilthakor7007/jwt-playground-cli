import jwt from 'jsonwebtoken';

export function verifyJWT(token: string, secretOrPublicKey: string): boolean {
  try {
    jwt.verify(token, secretOrPublicKey);
    return true;
  } catch (err) {
    return false;
  }
}