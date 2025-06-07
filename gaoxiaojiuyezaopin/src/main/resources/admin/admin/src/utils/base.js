const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaojiuyezaopin/",
            name: "gaoxiaojiuyezaopin",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaojiuyezaopin/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校就业招聘系统"
        } 
    }
}
export default base
