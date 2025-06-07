const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5x8ot/",
            name: "springboot5x8ot",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot5x8ot/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于智能推荐的校园社区服务微信小程序"
        } 
    }
}
export default base
