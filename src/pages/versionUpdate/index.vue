<template src="./index.html"></template>
<script>
import './index.less';
export default {
    data() {
        return {
            dataList: [],
            keys: '',
            loading: false,
            isDialogShow: false,
            form: {
                title: '',
                judgeDesc: '',
                lawyerDesc: '',
                updateTime: ''
            },
            isEditDialogShow: false,
            editForm: {
                title: '',
                judgeDesc: '',
                lawyerDesc: '',
                updateTime: ''
            }
        };
    },
    methods: {
        // 打开弹窗
        openDialog() {
            this.isDialogShow = true;
            this.form.updateTime = new Date();
        },
        // 删除
        deleteVersion(row, index) {
            console.log(row, index);
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
        // 添加版本确定按钮
        addVersionConfirm() {
            this.isDialogShow = false;
        },
        // 编辑按钮
        editVersion(row) {
            this.editForm = Object.assign({}, this.editForm, row);
            this.isEditDialogShow = true;
        },
        // 编辑版本确定按钮
        editVersionConfirm() {
            this.isEditDialogShow = false;
        },
        // 获取数据
        getData() {
            this.loading = true;
            this.$api.fetchVersionUpdateList().then(res => {
                this.dataList = res.dataList;
                this.loading = false;
            });
        }
    },
    created() {
        this.getData();
    }
};
</script>
