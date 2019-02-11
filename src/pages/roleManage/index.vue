<template src="./index.html"></template>
<script>
import './index.less';
import Abstract from '../../components/Abstract.vue';
export default {
    mixins: [Abstract],
    data() {
        return {
            dataList: [],
            loading: false,
            addManageDialog: false,
            form: {
                roleName: '',
                description: '',
                status: '1'
            },
            editManageDialog: false,
            editForm: {
                roleName: '',
                description: '',
                status: ''
            }
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取数据
        getData() {
            this.loading = true;
            this.$api.fetchRoleManageList().then(res => {
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
        goPermission() {
            window.location.href = '#/user/manage/role/permission';
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
