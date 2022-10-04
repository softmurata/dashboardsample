import { postData, userData } from './data'
import { List, Grid } from '@mui/material'
import Post from './Post'


interface PostData {
    id: number
    user_id: number
    message: string
    like: number,
    unlike: number,
    created_at: string
}

interface User {
    id: number
    name: string
}

export default function PostList() {

    const posts: PostData[] = postData;
    const users: User[] = userData;
    return (
        <List>
            {posts?.map((post) => {
                const found = users?.find((user) => post.user_id === user.id);
                return (
                    <Post
                    key={post.id}
                    name={found?.name as string}
                    message={post.message}
                    like={post.like}
                    unlike={post.unlike}
                    created_at={post.created_at}
                    />
                );
            })}
        </List>
    )
}