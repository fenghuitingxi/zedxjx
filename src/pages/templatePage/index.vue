<template src="./index.html"></template>
<script>
import './index.less';
import {feedbackList} from './../../mock/index.js';
export default {
    data() {
        return {
            dataList: []
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            console.log(feedbackList);
        }
    }
};
</script>
