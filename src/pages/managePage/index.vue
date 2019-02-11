<template src="./index.html"></template>
<script>
import './index.less';
export default {
    data() {
        return {
            dataList: [],
            loading: false,
            addManageDialog: false,
            form: {
                court: '',
                userName: '',
                password: '',
                email: '',
                checkedRole: []
            },
            editManageDialog: false,
            editForm: {
                court: '',
                name: '',
                password: '',
                email: '',
                checkedRole: []
            },
            courtList: [
                {
                    label: '浙江法院',
                    value: '1'
                }, {
                    label: '杭州法院',
                    value: '2'
                }, {
                    label: '台州法院',
                    value: '3'
                }
            ],
            roleList: [
                {
                    label: '查看反馈建议-基层法院',
                    value: '1'
                }, {
                    label: '查看反馈建议-中院',
                    value: '2'
                }, {
                    label: '查看反馈建议-高院',
                    value: '3'
                }, {
                    label: '通知管理',
                    value: '4'
                }, {
                    label: '客服',
                    value: '5'
                }, {
                    label: '文档管理',
                    value: '6'
                }, {
                    label: '代表委员',
                    value: '7'
                }, {
                    label: '超级管理员',
                    value: '8'
                }
            ]
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取数据
        getData() {
            this.loading = true;
            this.$api.fetchManageList().then(res => {
                this.loading = false;
                this.dataList = res.dataList;
            });
        },
        // 删除数据
        deleteManage(row, index) {
            // console.log(row, index);
            this.$confirm('是否要删除此条数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.dataList.splice(index, 1);
                this.$message.success('删除成功!');
            }).catch(() => {
                this.$message.info('已取消删除');
            });
        },
        // 拉黑按钮
        pullBlack() {
            this.$confirm('是否确定要拉黑?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message.success('拉黑成功!');
            }).catch(() => {
                this.$message.info('已取消拉黑');
            });
        },
        // 打开添加弹框
        addManage() {
            this.addManageDialog = true;
        },
        // 添加弹框确定按钮
        addManageConfirm() {
            this.addManageDialog = false;
        },
        // 打开编辑弹框
        editManage(row) {
            this.editForm = Object.assign({}, this.editForm, row);
            this.editManageDialog = true;
        },
        // 编辑弹框确定按钮
        editManageConfirm() {
            this.editManageDialog = false;
        }
    }
};
</script>
