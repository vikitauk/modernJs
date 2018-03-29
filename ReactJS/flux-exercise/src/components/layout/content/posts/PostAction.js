import dispatcher from '../../../../Dispatcher'

export function createPost(postItem) {
    dispatcher.dispatch({
        type: "CREATE_POST",
        postItem
    })
}

export function deletePostItem(id){
    dispatcher.dispatch({
        type: "DELETE_POST",
        id
    })
}