// 接口定义转为方法，调用请用this.$api + 方法名称
// 引入全局请求的方法axios
import axios from 'axios';
// 设置请求头可携带cookie
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器,主要截获全局请求数据
axios.interceptors.response.use(response => {
    return response.data;
    // // 200 非业务成功，也算失败
    // if (response.iamStatus !== undefined && response.iamStatus !== 0) {
    //     // message.error(response.message || '', 5);
    //     return Promise.reject(response.data);
    // } else {
    //     if (response.data.errors) {
    //         // message.error(getErrMsg(response.data.errors), 5);
    //         return false;
    //     }
    //     return response.data;
    // }
}, error => {
    return Promise.reject(error.response.data);
    // 非200错误
    // console.log(error.response.data.errors)
    // if (error.response.status === 499) {
    //     location.href = `${error.response.data.url.split('reffer=')[0]}reffer=${encodeURIComponent(location.href)}`
    // } else if (error.response.status === 403) {
    //     // message.error('您没有权限，请联系管理员添加！')
    // } else {
    //     // let errMsg = getErrMsg(error.response.data && error.response.data.errors)
    //     // message.error(errMsg, 5)
    //     const errors = error.response.data.errors
    //     if (errors) {
    //         Notification.error({ title: 'error', message: errors[0].message, position: 'bottom-right' })
    //     } else {
    //         Notification.error({ title: 'error', message: '出错了', position: 'bottom-right' })
    //     }
    // }
    // return Promise.reject(error.response.data);
});

let base = 'https://www.easy-mock.com/mock/5bc452d7c1ba694ea184ee49/api';

export const fetchManageList = (params) => {
  return axios.get(`${base}/manage`, {params: params}).then(res => res);
};

export const fetchRoleManageList = (params) => {
    return axios.get(`${base}/roleManage`, {params: params}).then(res => res);
};

export const fetchVersionUpdateList = (params) => {
    return axios.get(`${base}/versionUpdate`, {params: params}).then(res => res);
};

export const assistUnitManageList = (params) => {
  return axios.get(`${base}/assistManage`, {params: params}).then(res => res);
};

export const legalAidCenterList = (params) => {
  return axios.get(`${base}/legalAid`, {params: params}).then(res => res);
};

export const legalServiceHouseList = (params) => {
  return axios.get(`${base}/legalService`, {params: params}).then(res => res);
};

export const detentionHouseList = (params) => {
  return axios.get(`${base}/detention`, {params: params}).then(res => res);
};

export const courtOverviewList = (params) => {
  return axios.get(`${base}/courtDetail`, {params: params}).then(res => res);
};

export const judgeInformationList = (params) => {
  return axios.get(`${base}/courtInfo`, {params: params}).then(res => res);
};
