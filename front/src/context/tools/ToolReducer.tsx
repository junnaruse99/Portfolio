import { GET_TOOLS, TOOL_ERROR } from '../../types';

export default (state:any, action:any) => {
  switch (action.type) {
    case GET_TOOLS:
      return{
        ...state,
        tools: action.payload,
        message: null
      }
    case TOOL_ERROR:
      return{
        ...state,
        message: action.payload
      }
  }

}