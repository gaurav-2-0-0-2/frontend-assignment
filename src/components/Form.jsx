
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';

// export default function Form({jsonData}){


//     const 





//     return (
//         <div>
//             <h1 className="text-5xl">I am a Form</h1>

//         </div>
//     )
// }


// export default function DynamicForm({ jsonData, onSubmit }) {
//      const generateFormSchema = () => {
//     try {
//       const data = JSON.parse(jsonData);
//       const schema = {
//         type: "object",
//         properties: {
//             "firstName": {
//                 "type": "string",
//                 "title": "first name"
//             }
//         },
//       };

//       for (const [key, value] of Object.entries(data)) {
//         schema.properties[key] = { type: typeof value };
//       }

//       return schema;
//     } catch (e) {
//       console.error("Invalid JSON data", e);
//       return null;
//     }
//   };

//   const formSchema = generateFormSchema();

//   if (!formSchema) {
//     return null;
//   }


//     return <Form schema={formSchema} validator={validator} onSubmit={onSubmit}> <div /></Form>;
// }
