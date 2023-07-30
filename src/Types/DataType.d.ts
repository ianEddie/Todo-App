import { DATA_FILTERS } from "../Const/const";

export interface Data {
  id: string;
  title: string;
  completed: boolean;
}

export type DataId = Pick<Data, "id">;
export type DataTitle = Pick<Data, "title">;
export type DataCompleted = Pick<Data, "completed">;

export type DataList = Data[];

export type FilterValue = typeof DATA_FILTERS[keyof typeof DATA_FILTERS]