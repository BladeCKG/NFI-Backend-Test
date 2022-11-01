export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT),
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    // port: parseInt(process.env.PORT, 10) || 3000,
    //  jwt: {
    //   secret: process.env.JWT_SECRET,
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // }
  });