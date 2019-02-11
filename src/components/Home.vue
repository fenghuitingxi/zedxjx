<template>
    <div class="warpper">
        <header>
            欢迎
        </header>
        <aside class="aside">
            <el-menu
                :default-active="activeMenu"
                active-text-color="#409EFF"
                background-color="#eee"
                router>
                <template v-for="(menu, index) in routes">
                    <el-submenu :key="index" :index="menu.name">
                        <template slot="title">
                            <i :class="menu.iconClass"></i>
                            {{menu.name}}
                        </template>
                        <template v-for="(cRoute, cIndex) in menu.children" >
                            <el-submenu :key="cIndex" :index="cRoute.name" v-if="cRoute.children && cRoute.children.length !==false">
                                <template slot="title">
                                    {{cRoute.name}}
                                </template>
                                <template v-for="(sRoute, sIndex) in cRoute.children">
                                    <el-menu-item :key="sIndex" :index="sRoute.name" :route="sRoute">
                                        {{sRoute.name}}
                                    </el-menu-item>
                                </template>
                            </el-submenu>

                            <el-menu-item :key="cIndex" :index="cRoute.name" :route="cRoute" v-else>
                                 {{cRoute.name}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>
        </aside>
         <!--路由tab -->
        <div class="warpper-tabs">
            <RouterTab></RouterTab>
        </div>
        <div class="warpper-content">
            <router-view></router-view>
        </div>
    </div>

</template>
<script>
import children from '../routes/children.js';
import RouterTab from './RouterTab.vue';
export default {
    name: 'home',
    data() {
        return {
            activeMenu: '',
            routes: children
        };
    },
    components: {
        RouterTab
    },
    methods: {
        getData() {
            // console.log(this.routes);
        }
    },
    created() {
        this.activeMenu = this.$route.name;
    },
    watch: {
        '$route'() { // 参数to和from
            this.activeMenu = this.$route.name;
        }
    }
};
</script>
<style lang="less">
</style>
