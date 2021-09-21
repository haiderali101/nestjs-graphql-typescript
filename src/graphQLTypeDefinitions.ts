
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    name: string;
    email: string;
    phoneNumber: string;
}

export interface UpdateUserInput {
    id: string;
    name?: Nullable<string>;
    email?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export interface DeleteUserInput {
    id: string;
}

export interface User {
    id: string;
    name?: Nullable<string>;
    email?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export interface IQuery {
    user(id: string): User | Promise<User>;
}

export interface IMutation {
    createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
