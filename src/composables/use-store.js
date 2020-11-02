import { provide, inject, reactive } from "vue";

const StoreSymbol = Symbol('state');

export const createState = () => reactive({ selectedContact: [] });

export const provideState = () => provide(StoreSymbol, createState());

export const useState = () => inject(StoreSymbol);
