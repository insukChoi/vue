<template>
    <div id="app1">
      {{message}}
      <br>
      <h2>번호 : <span>{{num}}</span> </h2>
      <button @click="increment">증가</button>
      <button @click="decrement">감소</button>
      <br>
      <span v-bind:title="message">
        내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
      </span>
      <br>
      <p v-if="seen">보이나...</p>
    </div>
</template>

<script>
export default {
  name: 'app1',
  data () {
    return {
      num: 0,
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
      seen: true
    }
  },
  methods: {
    increment () {
      this.num++ // 증가
    },
    decrement () {
      this.num-- // 감소
    }
  }
}
</script>

<style scoped>

</style>
