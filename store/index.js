// import axios from 'axios'
import Vuex from 'vuex' 

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: ''
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
            },
            setToken(state, token) {
                state.token = token
            }

        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts.json')
                    .then(data => {
                        const postsArray = []
                        for (const key in data) {
                            postsArray.push( {...data[key], id: key})
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
                return this.$axios.$post('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts.json?auth=' + vuexContext.state.token, postContent)
                .then(data => {vuexContext.commit('addPost', {...postContent, id: data.name})})
                .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return this.$axios.$put('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts/' +  editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost)
                })
            },
            authenticateUser(vuexContext, authData) {
                let authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIkey
                if (authData.isLogin == false) {
                  authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIkey
                }
                return this.$axios.$post(authURL, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                  }
                ).then(result => {
                  vuexContext.commit('setToken', result.idToken)
                  console.log(result)
                })
                .catch(e => console.log(e))
            },
        },

        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore