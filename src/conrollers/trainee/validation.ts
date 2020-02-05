export default Object.freeze({
    create:
    {
        id:
        {
            required: true,
            string: true,
            in: ['body'],
            custom: function (value) {
                console.log('Value', value);
                throw {
                    error: 'Error occured in custom',
                    message: 'Message'
                };
            }
        },
        name:
        {
            required: true,
            regex: '[a-zA-Z]{3,30}',
            in: ['body'],
            errorMessage: 'Name is required'
        }
    },
    delete: {
        id:
        {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip:
        {
            required: true,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid'
        },
        limit:
        {
            required: true,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid'

        }
    },
    update: {
        id:
        {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate:
        {
            in: ['body'],
            required: true,
            isObject: true,
            custom: function (dataToUpdate) {}
        }
    }
});