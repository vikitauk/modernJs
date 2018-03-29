import {EventEmitter} from 'events'
import dispatcher from '../../../../Dispatcher';


class PostStore extends  EventEmitter{
    constructor(){
        super()
        this.posts = [
                {
                    title: "blog Post #1",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 0
                },
                {
                    title: "blog Post #2",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 1
                },
                {
                    title: "blog Post #3",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 2
                },
                {
                    title: "blog Post #4",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 3
                },
                {
                    title: "blog Post #5",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 4
                }
            ];
    }

    createPost(postItem){
        const id = Date.now();
        this.posts.push({
            id: id,
            title: postItem.title,
            content: postItem.content,
            author: postItem.author
        });
        this.emit("change");
    }
    getAllPosts(){
        return this.posts;
    }

    handleAction(action){
        switch(action.type){
            case "CREATE_POST": {
                this.createPost(action.postItem);
            }
        }
    }
}

const postStore = new PostStore();
dispatcher.register(postStore.handleAction.bind(postStore));
// expose post store globally for testing
window.postStore = postStore;
window.dispatcher = dispatcher;
export default postStore;