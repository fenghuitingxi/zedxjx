<template lang="html">
    <div class="abstract">
        <el-row v-if="show">
            <el-col :xs="10" :sm="8" :md="6" :lg="4" v-for="(route, index) in children" :offset="index > 0 ? 2 : 0" :key="index">
                <el-card :body-style="{ padding: '0px' }" v-if="route.menu !== false">
                <div class="card-wrapper">
                    <div class="text">
                    <p>{{route.name}}</p>
                    <router-link :to="{name: route.name}">查看</router-link>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            children: null
        };
    },
    methods: {
        isCurrentComponent() {
            const matched = this.$route.matched;
            const last = matched[matched.length - 1];

            for (let i in last.instances) {
                if (last.instances[i] === this) {
                    return true;
                }
            }
            return false;
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            let children = vm.$route.meta.children;
            if (children) {
                vm.children = children;
            } else {
                vm.children = null;
            }

            vm.show = vm.isCurrentComponent();
        });
    },
    watch: {
        '$route'() {
            let children = this.$route.meta.children;
            if (children) {
                this.children = children;
            } else {
                this.children = null;
            }
            this.show = this.isCurrentComponent();
        }
    }
};
</script>
<style lang="less">
.abstract {
    .card-wrapper {
        display: flex;
        flex-direction: column;
        .img {
            height: 150px;
        }
        .text {
            display: flex;
            justify-content: space-around;
            align-items: center;
            a {
                color: #20a0ff;
            }
        }
        img {
            width: 100%;
            height: 150px;
        }
    }
}
</style>