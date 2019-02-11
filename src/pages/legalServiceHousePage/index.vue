<template src="./index.html"></template>
<script>
  import './index.less';
  export default {
    data () {
      return {
        total: 0,           // 默认数据总数
        pagesize: 20,       // 每页的数据条数
        currentPage: 1,     // 默认开始页面
        dataList: [],
        loading: false,
        addLegalServiceHouseDialog: false,
        editLegalServiceHouseDialog: false,
        rules: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ]
        },
        editRules: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ]
        },
        form: {
          title: '',
          content: '',
          pictures: ''
        },
        editForm: {
          title: '',
          address: '',
          img: ''
        }
      };
    },
    created () {
      this.getData();
    },
    methods: {
      handleClicky (row) {
        console.log(row);
        this.editForm = Object.assign({}, this.editForm, row);
        this.editLegalServiceHouseDialog = true;
      },

      current_change (currentPage) {
        this.currentPage = currentPage;
      },

      // 获取数据
      getData () {
        this.loading = true;
        this.$api.legalServiceHouseList().then(res => {
          this.loading = false;
          this.dataList = res.dataList;
          this.total = this.dataList.length;
        });
      },

      // 删除对应行数据
      deleteRow (index, datalist) {
        this.$confirm('是否要删除此条数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          datalist.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

