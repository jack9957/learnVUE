<template>
  <div class="appContainer">
    <AppHeader></AppHeader>
    <AppContent></AppContent>
    <div class="appFooter">
      <div>appFooter</div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

export default {
  components: {
    AppHeader,
    AppContent,
  }
}
</script>

<style scoped>

</style>
