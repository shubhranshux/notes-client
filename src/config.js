const config = {
    s3: {
    REGION: "us-east-1",
    BUCKET: "notes-bucket-siba",
    },
    apiGateway: {
    REGION: "us-east-1",
    URL: "https://h5dyftflz3.execute-api.us-east-1.amazonaws.com/prod",
},
cognito: {
REGION: "us-east-1",
USER_POOL_ID: "us-east-1_uz11GiMgx",
APP_CLIENT_ID: "p7v78d36fnb5btg109j0l5ijd",
IDENTITY_POOL_ID: "us-east-1:df5c541d-b0b4-4066-8fdc-b963d5a4fa3e",
},
MAX_ATTACHMENT_SIZE: 5000000, // 5MB
};
export default config;
