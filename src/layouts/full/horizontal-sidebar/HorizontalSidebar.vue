<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useDisplay } from 'vuetify';
import { useCustomizerStore } from '@/stores/customizer';
import HorizontalItems from './horizontalItems';
import NavItem from './NavItem/Index.vue';
import NavCollapse from './NavCollapse/Index.vue';
import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';
import { Icon } from '@iconify/vue';
const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(HorizontalItems);
const { mdAndUp } = useDisplay();
// function subIsActive(input: any) {
//     const paths = Array.isArray(input) ? input : [input];
//     return paths.some((path) => {
//         return; //$route.path.indexOf(path) === 0; // current path starts with this path string
//     });
// }
</script>

<template>
    <template v-if="mdAndUp">
        <div class="horizontalMenu bg-containerBg position-relative ">
            <div :class="customizer.boxed ? 'maxWidth ' : 'px-6'">
                <div class="bg-surface horizontal-head">
                    <ul class="gap-1 horizontal-navbar  mx-lg-0 mx-3">
                        <!---Menu Loop -->
                        <li v-for="(item, i) in sidebarMenu" :key="i" class="navItem">
                            <!---If Has Child -->
                            <NavCollapse :item="item" :level="0" v-if="item.children" />
                            <!---Single Item-->
                            <NavItem :item="item" v-else />
                            <!---End Single Item-->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </template>
    <div v-else class="mobile-menu">
        <VerticalSidebar />
    </div>
</template>
<style lang="scss"></style>
