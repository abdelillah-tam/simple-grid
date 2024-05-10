
export class Root {
    posts: Post[]= []
    total: number = 0
    skip: number = 0
    limit: number = 0
}

export class Post {
    id: number = 0
    title: string = ''
    body: string = ''
    userId: number = 0
    tags: string[] = []
    reactions: number = 0
}
