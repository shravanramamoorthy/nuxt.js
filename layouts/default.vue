<template>
    <div>
        <TheHeader @sidenavToggle = "displaySideNav = !displaySideNav"/>
        <TheSidenav :show = "displaySideNav" @close = "displaySideNav = false"/>
        <nuxt/>
    </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheSidenav from "@/components/Navigation/TheSidenav"

export default {
    components: {
        TheHeader,
        TheSidenav
    },
    data () {
        return {
            displaySideNav: false
        }
    }
}
</script>

<style scoped>

</style>