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
        deleteData: [],
        newDeleteData: [],
        loading: false,
        addDetentionHouseDialog: false,
        editDetentionHouseDialog: false,
        rules: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          detentionhouseaddress: [
            { required: true, message: '看守所地址不能为空', trigger: 'blur' }
          ]
        },
        editRules: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '看守所地址不能为空', trigger: 'blur' }
          ]
        },
        form: {
          area: '杭州',
          title: '',
          detentionhouseaddress: '',
          houselinkmethod: '',
          introduce: '',
          smallimg: '',
          pictures: ''
        },
        editForm: {
          area: '杭州',
          title: '',
          address: '',
          phone: '',
          description: '',
          img: '',
          pictures: ''
        },
        areaList: [
          {
            label: '杭州',
            value: '1'
          },
          {
            label: '湖州',
            value: '2'
          },
          {
            label: '嘉兴',
            value: '3'
          },
          {
            label: '金华',
            value: '4'
          },
          {
            label: '丽水',
            value: '5'
          },
          {
            label: '宁波',
            value: '6'
          },
          {
            label: '衢州',
            value: '7'
          },
          {
            label: '绍兴',
            value: '8'
          },
          {
            label: '台州',
            value: '9'
          },
          {
            label: '温州',
            value: '10'
          },
          {
            label: '舟山',
            value: '11'
          }
        ]
      };
    },
    created () {
      this.getData();
    },
    methods: {

      // 点击编辑按钮
      handleClicky (row) {
        console.log(row);
        this.editForm = Object.assign({}, this.editForm, row);
        this.editDetentionHouseDialog = true;
      },

      current_change (currentPage) {
        this.currentPage = currentPage;
      },

      // 获取数据
      getData () {
        this.loading = true;
        this.$api.detentionHouseList().then(res => {
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
      },

      // 选中多行删除
      handleSelectionChange (val) {
        let that = this;
        val.forEach((value, index) => {
          that.dataList.forEach((v, i) => {
            if (value == v) {
              // console.log(i);
              that.deleteData.push(i);
            }
          });
        });
      },
      deleteRows () {
        this.$confirm('是否要删除选中的这些数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteData.forEach((v, i) => {
            if (this.newDeleteData.indexOf(v) == -1) {
              this.newDeleteData.push(v);
            }
          });
          // console.log(this.newDeleteData);
          this.newDeleteData.forEach((v, i) => {
            this.dataList.splice(v, 1);
          });
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
  };
</script>
