const config = {
    s3: {
    REGION: "US East (N. Virginia) us-east-1",
    BUCKET: "hello-sibananda",
    },
    apiGateway: {
    REGION: "us-east-1",
    URL: "https://dqbqp5lc59.execute-api.us-east-1.amazonaws.com/prod",
},
cognito: {
REGION: "us-east-1",
USER_POOL_ID: "us-east-1_CGRzoAKP6",
APP_CLIENT_ID: "4ao55jlfkilr79c8v4ln6ug6rp",
IDENTITY_POOL_ID: "us-east-1:943467f9-bf62-4b23-af33-09cbc5a8c8df",
},
};
export default config;
