/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://midb_owner:1VrkanCX7sov@ep-purple-snowflake-a1h4eivw.ap-southeast-1.aws.neon.tech/midb?sslmode=require',
    }
  };