<template>
  <div id="app">
      <h1>smc's blog</h1>
      <button @click="showHide">show/hige highlighted post</button>
      <Blog-Post :post="blogPost" v-for="blogPost in visibileBlogPosts" :key="blogPost.title"></Blog-Post>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
  import BlogPost, {Post} from "./components/BlogPost.vue";
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
      BlogPost
    }
  })

  export default class App extends Vue {
    private blogPosts: Post[] = [
      {
        title: 'My first blogpost ever!',
        body: 'welcome to blog',
        author: 'smc',
        dataPosted:new Date(2020, 0, 7)
      },
      {
        title: 'My second blogpost ever!',
        body: 'welcome to blog',
        author: 'smc',
        dataPosted:new Date(2020, 0, 8),
        highlighted: true
      },
      {
        title: 'My third blogpost ever!',
        body: 'welcome to blog',
        author: 'smc',
        dataPosted:new Date(2020, 0, 9)
      }
    ]

    public showHighlighted: boolean = true

    get visibileBlogPosts() {
      return this.blogPosts.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showHighlighted)
    }

    public showHide() {
      this.showHighlighted = !this.showHighlighted
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
