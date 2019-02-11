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
        addAssistManageDialog: false,
        editAssistManageDialog: false,
        rules: {
          assistunitname: [
            { required: true, message: '协助单位名称不能为空', trigger: 'blur' }
          ],
          assistunitaddress: [
            { required: true, message: '协助单位地址不能为空', trigger: 'blur' }
          ]
        },
        editRules: {
          companyName: [
            { required: true, message: '协助单位名称不能为空', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '协助单位地址不能为空', trigger: 'blur' }
          ]
        },
        form: {
          type: '房屋',
          area: '杭州',
          assistunitname: '',
          assistunitaddress: '',
          assistunitmethod: '',
          remark: '',
          introduce: '',
          smallimg: '',
          pictures: ''
        },
        editForm: {
          type: '',
          area: '',
          companyName: '',
          address: '',
          phone: '',
          remark: '',
          detail: '',
          img: '',
          pictures: ''
        },
        typeList: [
          {
            label: '房屋',
            value: '1'
          },
          {
            label: '土地',
            value: '2'
          },
          {
            label: '车辆',
            value: '3'
          },
          {
            label: '工商',
            value: '4'
          },
          {
            label: '其他',
            value: '5'
          }
        ],
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
        this.editAssistManageDialog = true;
      },

      current_change (currentPage) {
        this.currentPage = currentPage;
      },

      // 获取数据
      getData () {
        this.loading = true;
        this.$api.assistUnitManageList().then(res => {
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

      // 打开弹窗
      addAssistManage () {
        this.addAssistManageDialog = true;
      }
    }
};
</script>
