<template>
  <div class="login">
    <div class="login-wrapper">
      <h4>吊炸天管理系统</h4>
      <el-input v-model="user" placeholder="请输入内容" class="user int"></el-input>
      <el-input placeholder="请输入密码" v-model="passwaord" show-password class="psd int"></el-input>
      <el-button el-button type="primary" class="int" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      passwaord: ''
    }
  },
  methods: {
    login () {
      if (this.user !== '' && this.passwaord !== '') {
        localStorage.setItem('name', this.user)
        this.$router.push({path: '/main'})
      } else {
        this.$message.error(' 账号或密码不能为空 ')
      }
    }
  }
}
</script>

<style>
.login{
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.login-wrapper{
  width: 350px;
  height: 350px;
  text-align: center;
  box-shadow: 0 0 10px #aaa;
  border-radius: 10px;
}
.int{
  width: 80%;
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
}
</style>
