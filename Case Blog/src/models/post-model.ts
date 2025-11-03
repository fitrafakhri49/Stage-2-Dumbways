export interface Post{
    id:number,
    title:string,
    content:string,
    author:string,


}

export const posts:Post[]=[
    {id:1, title:"Post Pertama",content:"content 1",author:"Fakhri 1"},
    {id:2,title:"Post kedua",content:"content 2", author:"Fakhri 2"}
]