const config = {
    s3: {
    REGION: "us-east-1",
    BUCKET: "notes-bucket-shub",
    },
    apiGateway: {
    REGION: "us-east-1",
    URL: "https://wy9qvzebz4.execute-api.us-east-1.amazonaws.com/prod",
},
cognito: {
REGION: "us-east-1",
USER_POOL_ID: "us-east-1_lzzFRFiis",
APP_CLIENT_ID: "gmn4tlolpvd3795jp02rhlbcu",
IDENTITY_POOL_ID: "us-east-1:2449fb69-4f09-4586-bc13-df553fae9199",
},
MAX_ATTACHMENT_SIZE: 5000000, // 5MB
};
export default config;
