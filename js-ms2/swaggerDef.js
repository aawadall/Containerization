module.exports = {
    info: {
        title: 'js-ms2',
        version: '1.0.0',
        description: 'Javascript Microservice Template',
    },
    host: 'http://localhost:3000',
    basePath: '/',
    openapi: '3.0.0',
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        }
    }
};