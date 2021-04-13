import { makeAutoObservable } from "mobx";

export default class TodoStore {
    constructor() {
        this._todos = []
        makeAutoObservable(this)
    }


    setTodos(todos) {
        this._todos = todos
    }

    get todos() {
        return this._todos
    }
}