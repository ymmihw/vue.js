<template>
  <div id="todos">
    <Todos />
  </div>
</template>
<script>
  import Todos from './components/Todos'
  const app = {
    name: 'app',
    components: {
      Todos
    },
  }
  export default app
</script>