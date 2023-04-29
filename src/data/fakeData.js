
// const schema = {
//     "title": "A person information",
//     "description": "A simple person data.",
//     "type": "object",
//     "properties": {
//         "firstName": {
//             "type": "string",
//             "title": "First name"
//         },
//         "lastName": {
//             "type": "string",
//             "title": "Last name"
//         },
//         "telephone": {
//             "type": "string",
//             "title": "Telephone",
//             "minLength": 10
//         }
//     }
// }

const schema = {
    title: ' New Pizza',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            title: 'Pizza Name',
            description: '',
            default: 'Enter Pizza Name'
        },
        pizza_type: {
            type: 'object',
            title: 'Pizza type',
            description: '',
            properties: {
                firstType: 'Naples Style',
                title: 'Naples Style'


            }
        },
    }
}

export default schema;


// [
//     {
//         "sort": 1,
//         "label": "Pizza Name",
//         "description": "",
//         "validate": {
//             "required": true,
//             "immutable": false
//         },
//         "jsonKey": "name",
//         "uiType": "Input",
//         "icon": "",
//         "level": 0,
//         "placeholder": ""
//     }

// ]