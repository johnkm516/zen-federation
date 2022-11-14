import { EnvironmentBase } from './environment.base';

export const environment: EnvironmentBase = {
  siteUrl: 'https://site.com/#',
  production: true,
  expressPort: process.env.AUTH_API_PORT,
  dbSourceURL: process.env.AUTH_SOURCE_URL.replace(new RegExp(`localhost:[0-9]*/`), 'postgres-auth-api:5432/'),
  publicRegistration: true,
  graphql: {
    subscriptions: false,
    trace: false, 
    sandbox: false, 
    introspection: false, 
    csrfPrevention: true,
  },
  jwtOptions: {
    secret: process.env.JWT_PRIVATE_KEY,
    /*
    publicKey: process.env.JWT_PUBLIC_KEY,
    signOptions: {
      algorithm: 'ES256',
      
       // The client will exchange the token every 30 minutes during active sessions
       // Refer to: `libs\common\src\lib\environment` for `EnvironmentProd.jwtExchangeInterval`
       
      expiresIn: 3600, // 1 hour (in seconds)
    },
    */
    signOptions: {
      algorithm: 'HS256',
      /**
       * The client will exchange the token every 30 minutes during active sessions
       * Refer to: `libs\common\src\lib\environment` for `EnvironmentDev.jwtExchangeInterval`
       */
      expiresIn: 3600, // 1 hour (in seconds)
    },
  },
  expiresInRememberMe: 7_776_000, // 90 days (in seconds)
  mail: {
    // Docs: https://nodemailer.com/smtp/
    transport: {
      host: process.env.SMTP_SERVER,
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    defaults: {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    },
  },
  throttle: {
    limit: 10,
    ttl: 60,
    ignoreUserAgents: [/googlebot/gi, /bingbot/gi],
  },
  bcryptSalt: 12,
  oauth: {
    loginConfirmedURL: 'https://site.com/#/login-confirmed',
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://api.site.com/auth/google/redirect',
      scope: ['email'],
    },
  },
};
