const code = `<template>
                <div>
                    <input v-model="message">
                    {{ message }}
                </div>
                </template>
                <script>
                export default {
                    data () {
                        return {
                            message: ''
                        }
                    }
                }
                </script>`

export default code;

const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
function str32 () {
  let maxPos = $chars.length
  let sum = ''
  
  for (let i = 0; i < 32; i ++) {
    sum += $chars.charAt(Math.floor(Math.random() * maxPos)) 
  }
  return sum
}

