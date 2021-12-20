import { Error } from '../Models'

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
  tool_id: number;
  level: number;
}

export const defaultTools : Tools = {
  tools: [],
  message: null,
  getTools: () => {},
}
