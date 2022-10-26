const statusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

// export const statusSwitchCase = (type: string) => {
//   switch (type) {
//     case 'any.required':
//       return statusCodes.BAD_REQUEST;
//     case 'string.base':
//       return statusCodes.UNPROCESSABLE_ENTITY;
//       case 'number.base':
//         return statusCodes.UNPROCESSABLE_ENTITY;
//     case 'string.min':
//       return statusCodes.UNPROCESSABLE_ENTITY;
//     case 'number.min':
//       return statusCodes.UNPROCESSABLE_ENTITY;
//     default:
//       return statusCodes.INTERNAL_SERVER_ERROR;
//   }
// };

export const statusSwitchCase = (type: string) => {
  switch (type) {
    case 'required':
      return statusCodes.BAD_REQUEST;
    case 'base':
      return statusCodes.UNPROCESSABLE_ENTITY;
    case 'min':
      return statusCodes.UNPROCESSABLE_ENTITY;
    default:
      return statusCodes.INTERNAL_SERVER_ERROR;
  }
};
    
export default statusCodes;