import { defineAuth } from '@aws-amplify/backend';

/**
 * Fase 1 (landing): recurso sin configurar a propósito.
 * Cognito se activará en la fase de desarrollo de la app completa.
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
