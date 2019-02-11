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
        editJudgeInformationDialog: false,
        editRules: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          introduction: [
            { required: true, message: '职务简介不能为空', trigger: 'blur' }
          ]
        },
        form: {

        },
        editForm: {
          name: '',
          introduction: ''
        },
        areaCourtList: [
          {
            label: '浙江省高级人民法院',
            value: '1'
          },
          {
            label: '杭州市中级人民法院',
            value: '2'
          },
          {
            label: '杭州市上城区人民法院',
            value: '3'
          },
          {
            label: '杭州市下城区人民法院',
            value: '4'
          },
          {
            label: '杭州市拱墅区人民法院',
            value: '5'
          },
          {
            label: '杭州市西湖区人民法院',
            value: '6'
          },
          {
            label: '杭州市江干区人民法院',
            value: '7'
          },
          {
            label: '杭州市滨江区人民法院',
            value: '8'
          },
          {
            label: '杭州市萧山区人民法院',
            value: '9'
          },
          {
            label: '杭州市余杭区人民法院',
            value: '10'
          }
        ]
      };
    },
    created () {
      this.getData();
    },
    methods: {
      handleClicky (row) {
        console.log(row);
        this.editForm = Object.assign({}, this.editForm, row);
        this.editJudgeInformationDialog = true;
      },

      current_change (currentPage) {
        this.currentPage = currentPage;
      },

      // 获取数据
      getData () {
        this.loading = true;
        this.$api.judgeInformationList().then(res => {
          this.loading = false;
          this.dataList = res.dataList;
          this.total = this.dataList.length;
        });
      }
    }
  };
</script>
