import { CodegenConfig } from '@graphql-codegen/cli';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Had to do some workarounds to get the .env.local file to be read by codegen
 * as it works outside of Vite's scope.
 */
const envConfig = readFileSync(resolve(__dirname, '..', '..', '.env.local')).toString().trim().split('\n');
envConfig.forEach((line) => {
  const [key, value] = line.split('=');
  process.env[key] = value;
});

const apiToken = process.env.VITE_GRAPHQL_API_TOKEN as string;
const apiUrl = process.env.VITE_GRAPHQL_API_URL as string;

const config: CodegenConfig = {
  schema: [
    {
      [apiUrl]: {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
