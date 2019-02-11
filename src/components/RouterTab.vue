<template>
    <el-tabs
        v-model="activeIndex"
        class="route-tabs"
        type="border-card"
        closable
        @tab-click="tabClick"
        v-if="options.length"
        @tab-remove="tabRemove">
        <el-tab-pane
            v-for="item in options"
            :label="item.name"
            :key="item.name"
            :name="item.route">
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name: 'RouterTab',
    computed: {
        options() {
            return this.$store.state.routerTab.options;
        },
        activeIndex: {
            get () {
                return this.$store.state.routerTab.activeIndex;
            },
            set (val) {
                this.$store.commit('routerTab/set_active_index', val);
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        tabClick() {
            let path = this.activeIndex;
            this.$router.push({path: path});
        },
        tabRemove (targetName) {
            // 首页不可删除
            if(targetName === '/') {
                return;
            }
            this.$store.commit('routerTab/delete_tabs', targetName);
            if (this.activeIndex === targetName) {
                // 设置当前激活的路由
                if (this.options && this.options.length >= 1) {
                    this.$store.commit('routerTab/set_active_index', this.options[this.options.length-1].route);
                    this.$router.push({path: this.activeIndex});
                } else {
                    this.$router.push({path: '/'});
                }
            }
        }
    },
    watch: {
        '$route'(to) {
            let flag = false;
            for (let option of this.options) {
                if (option.name === to.name) {
                    flag = true;
                    this.$store.commit('routerTab/set_active_index', this.$route.path);
                    break;
                }
            }
            if (!flag) {
                this.$store.commit('routerTab/add_tabs', {route: to.path, name: to.name});
                this.$store.commit('routerTab/set_active_index', to.path);
            }
        }
    },
    mounted() {
        this.$store.commit('routerTab/add_tabs', {route: this.$route.path, name: this.$route.name});
        this.$store.commit('routerTab/set_active_index', this.$route.path);
    }
};
</script>
<style lang="less">
    .el-tabs {
        height: 40px;
        .el-tabs__content {
            display: none;
        }
    }
</style>


