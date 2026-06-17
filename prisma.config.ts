import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
schema: 'prisma/schema.prisma',
migrations: { path: 'prisma/migrations', seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts' },
datasource: {
url: env('DATABASE_URL'), // throws if missing — good for safety
// If you prefer not to throw during some CLI commands, use:
// url: process.env.DATABASE_URL ?? '',
},
});