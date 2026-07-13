import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Fase 1 (landing): sin modelos definidos a propósito.
 * El esquema de datos se diseñará en la fase de desarrollo de la app completa.
 * @see https://docs.amplify.aws/gen2/build-a-backend/data
 */
const schema = a.schema({});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
