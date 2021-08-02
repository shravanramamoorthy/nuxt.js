import axios from 'axios'
import Vuex from 'vuex' 

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            }

        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts.json')
                    .then(res => {
                        const postsArray = []
                        for (const key in res.data) {
                            postsArray.push( {...res.data[key], id: key})
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => console.log(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post) {
                const postContent = {...post, updatedDate: new Date()}
                return axios.post('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts.json', postContent)
                .then(res => {vuexContext.commit('addPost', {...postContent, id: res.data.name})})
                .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios.put('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts/' +  editedPost.id + '.json', editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost)
                })
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore