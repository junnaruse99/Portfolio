export interface Tools {
  tools: Tool[];
  message: Error | null;
  getTools: () => void;
}

export interface Tool {
  id: number;
  name: string;
  url: string;
  img: string;
  description: string;
}

export interface Error {
  msg: string;
  class: string;
}

export const defaultTool:Tools = {
  tools : [],
  message: null,
  getTools: () => {}
}