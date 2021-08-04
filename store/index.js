// import axios from 'axios'
import Vuex from 'vuex' 
import cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
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
            },
            clearToken(state) {
                state.token = null
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
                  localStorage.setItem('tokenID', result.idToken)
                  localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
                  cookie.set('c-tokenID', result.idToken)
                  cookie.set('c-tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
                  return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
                })
                .catch(e => console.log(e))
            },
            initAuth(vuexContext, req) {
                let token;
                let tokenExpiration;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const cookieToken = req.headers.cookie.split(';').find(c => c.trim().startsWith('c-tokenID='))
                    if (!cookieToken) {
                        return;
                    } 
                    token = cookieToken.split('=')[1]
                    tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith('c-tokenExpiration=')).split('=')[1]
                } else {
                    token = localStorage.getItem('tokenID')
                    tokenExpiration = localStorage.getItem('tokenExpiration')
                }
                if (new Date().getTime() > +tokenExpiration || !token) {
                    vuexContext.dispatch('logOut')
                    return;
                }
                vuexContext.commit('setToken', token)
            },
            logOut(vuexContext) {
                vuexContext.commit('clearToken')
                cookie.remove('c-tokenID')
                cookie.remove('c-tokenExpiration')
                if (process.client) {
                    localStorage.removeItem('tokenID')
                    localStorage.removeItem('tokenExpiration')
                }

            }
        },

        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore