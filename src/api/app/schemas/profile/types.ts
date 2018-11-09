import * as mongoose from 'mongoose';

export interface IProfile {
  id: string;
  name: string;
  description?: string;
}

export type IProfileModel = IProfile & mongoose.Document;

export type IProfileInput = Pick<IProfile, "name" | "description">;

export interface IQueryArgs {
  id: string;
}

export interface ICreateArgs {
  input: IProfileInput;
}

export interface IUpdateArgs {
  id: string;
  input: IProfileInput;
}