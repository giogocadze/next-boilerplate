import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
});

type Env = z.infer<typeof envSchema>;

function formatZodError(error: z.ZodError) {
  return error.issues.map((i) => `- ${i.path.join('.')}: ${i.message}`).join('\n');
}

export const env: Env = (() => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const message = `❌ Invalid environment variables:\n${formatZodError(parsed.error)}`;

    throw new Error(message);
  }

  return parsed.data;
})();
