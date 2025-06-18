#!/usr/bin/env node
import { decodeJWT } from './utils/decoder';
import { verifyJWT } from './utils/verifier';
import { printSection } from './utils/formatter';

const [,, token, secret] = process.argv;

if (!token) {
  console.log('Usage: jwt-playground <token> [secret]');
  process.exit(1);
}

try {
  const { header, payload, signature } = decodeJWT(token);
  printSection('Header', header);
  printSection('Payload', payload);
  console.log('\nSignature:', signature);

  if (secret) {
    const isValid = verifyJWT(token, secret);
    console.log('\nVerification:', isValid ? '✅ Valid' : '❌ Invalid');
  }
} catch (err: any) {
  console.error('❌ Error:', err.message);
}

