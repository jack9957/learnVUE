<template>
  <div class="tab-control">
    <template v-for="(item, index) in titleArray" :key="index">
      <div class="tab-control-item" :class="{ 'active': currentSelectIndex === index }" @click="selectTitleMethod(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  emits: ["clickTitle"],
  props: {
    titleArray: {
      type: Array,
      require: true,
    }
  },
  data() {
    return {
      currentSelectIndex: 0,
    }
  },
  methods: {
    selectTitleMethod(e) {
      this.currentSelectIndex = e
      this.$emit('clickTitle', e)
    },
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  line-height: 45px;
  text-align: center;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item.active {
  color: red;
  font-weight: 800;

  span {
    border-bottom: 3px solid red;
    padding: 8px;
  }
}
</style>
