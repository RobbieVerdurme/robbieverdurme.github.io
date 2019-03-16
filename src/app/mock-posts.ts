import { Post } from './post/post.model'

const JsonPost = [
    {
        img: 'img 1',
        title: 'Post 1',
        comments: ['comment 1', 'comment 2', 'comment 3'],
        dateAdded: new Date()
    },
    {
        img: 'img 2',
        title: 'Post 2',
        comments: ['comment 1', 'comment 2', 'comment 3'],
        dateAdded: new Date(2019, 2, 5)
    }
];

export const POSTS: Post[] = JsonPost.map(Post.fromJSON)
