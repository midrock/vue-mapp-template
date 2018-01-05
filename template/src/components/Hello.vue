<template lang="pug">
div Hello
    router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'hello'
})
export default class Hello extends Vue {

}
</script>

<style lang="postcss">

</style>
