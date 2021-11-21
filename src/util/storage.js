/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS_LIST'
var objectDefault = [
    {id: 1, task: "Làm các bài Lab Công nghệ Web", complete: false, dateOf: "2021-11-30T15:38"},
    {id: 2, task: "Làm các bài Lab Công nghệ NET", complete: false, dateOf: "2021-12-01T15:38"},
    {id: 3, task: "Làm các bài Lab Công nghệ PHP", complete: false, dateOf: "2021-12-02T15:38"},
    {id: 4, task: "Làm các bài Lab Công nghệ Java", complete: false, dateOf: "2021-12-03T15:38"},
    {id: 5, task: "Làm các bài Lab Công nghệ Javascript", complete: false, dateOf: "2021-12-02T15:38"},
    {id: 6, task: "Làm các bài Lab Công nghệ Ruby", complete: false, dateOf: "2021-12-04T15:38"},
    {id: 7, task: "Làm các bài Lab Công nghệ GoLang", complete: false, dateOf: "2021-12-05T15:38"},
    {id: 8, task: "Làm các bài Lab Công nghệ API", complete: false, dateOf: "2021-12-06T15:38"},
];
export default {
    get(){
        var result = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) === null || JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)).length ===0 ?
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(objectDefault)) : 
        JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
        return result
    },
    set(todoList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoList));
    }
}