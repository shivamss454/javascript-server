export default Object.freeze({
    create:
    {
        email:
         {
             required: true,
             string: true,
             in: ['body'],
         },
        name:
        {
            required: true,
            regex: '[a-zA-Z]{3,30}',
            in: ['body'],
            errorMessage: 'Name is required'
        },
        address:
         {
             required: true,
             string: true,
             in: ['body'],
         },
         mobilenumber:
         {
             required: true,
             number: true,
             in: ['body'],
         },
         dob:
         {
             required: true,
             string: true,
             in: ['body'],
         },
         hobbies:
         {
             required: true,
             string: false,
             in: ['body'],
         },
         role:
         {
             required: true,
             string: true,
             in: ['body'],
         },
         password:
         {
             required: true,
             string: true,
             in: ['body'],
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
            number: false,
            in: ['query'],
            errorMessage: 'Skip is invalid'
        },
        limit:
        {
            required: true,
            default: 10,
            number: false,
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
