import $ from 'jquery';

class Interface{
    getOmit(issue){//获取遗漏 issue当前期号
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    self.setOmit(res.data);
                    resolve.call(self,res)
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        })
    }

    //获取开奖接口 期号
    getOpenCode(issue){
        let self=this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        })
    }

    //获取当前状态接口
    getState(issue){
        let self=this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        })
    }
}
export default Interface