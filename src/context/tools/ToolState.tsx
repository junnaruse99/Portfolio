import React, { useReducer, FC } from 'react';
import ToolContext from './ToolContext';
import { Tools, Error, defaultTool } from './ToolModel'
import ToolReducer from './ToolReducer';
import { GET_TOOLS, TOOL_ERROR } from '../../types';
import toolsData from '../../data/tools.json';

const ToolState: FC = props => {
  
  const [ state, dispatch ] = useReducer(ToolReducer, defaultTool);

  const getTools = async () => {
    try {
      console.log(toolsData);
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

