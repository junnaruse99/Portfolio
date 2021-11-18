import React, { useReducer, FC } from 'react';
import ToolContext from './ToolContext';
import { Tool, defaultTools } from './ToolModel';
import { Error } from '../Models';
import ToolReducer from './ToolReducer';
import { GET_TOOLS, TOOL_ERROR } from '../../types';
let toolsData : Tool[] = require('../../data/tools.json');


const ToolState: FC = props => {
  
  const [ state, dispatch ] = useReducer(ToolReducer, defaultTools);

  const getTools = async () => {
    try {
      // sortByType(toolsData, true);
      dispatch({
        type: GET_TOOLS,
        payload: toolsData
      })

    } catch (error) {
      const alert: Error = {
        msg: 'There was an error getting the data',
        class: 'alert-error'
      }

      dispatch({
        type: TOOL_ERROR,
        payload: alert
      })

    }
  }

  //  // Modify the array
  // const sortByType = (tools : Tool[], reverse : Boolean) => {
  //   console.log(tools);
  //   if (reverse) {
  //     tools.sort((obj1 : Tool, obj2 : Tool) : number => (
  //       obj1.type.id < obj2.type.id ? -1 : obj1.type.id > obj2.type.id ? 1 : 0
  //     ))
  //   } else {
  //     tools.sort((obj1 : Tool, obj2: Tool) : number => (
  //       obj1.type.id < obj2.type.id ? 1 : obj1.type.id > obj2.type.id ? -1 : 0
  //     ))
  //     console.log(tools);
  //   }
  // }

  return (
    <ToolContext.Provider
    value={{
        tools: state.tools,
        message: state.message,
        getTools,
    }}>
        {props.children}
    </ToolContext.Provider>
  )
}

export default ToolState;

