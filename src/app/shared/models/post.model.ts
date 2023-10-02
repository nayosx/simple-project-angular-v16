export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export const DefaultPost:Post = {
    userId: 1,
    id: 0,
    title: '',
    body: ''
};