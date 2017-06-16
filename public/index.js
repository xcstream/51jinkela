/**
 * Created by xucheng on 2017/6/15.
 */
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
if (isWeiXin()){
    alert('请在电脑浏览器中打开')
}