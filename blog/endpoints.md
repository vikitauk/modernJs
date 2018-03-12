### End points:
#### 1. Get all posts with pager
* search by title
* sort by date
#### 2. Login
#### 3. CRUD posts endpoints
#### 4. CRUD like/dislike

### Data model:
#### Post:
    {
        title: string,
        content: string,
        author: user,
        createDate: date,
        tags: string[],
        comments: Comment[],
        likes: user[],
        dislikes: user[]
    }
    
#### Post comment 
    {
        author: user,
        content: string,
        postId: ObjectID,
        createDate: date,
        likes: user[],
        dislikes: user[]
    }
