var x = document.getElementById("username");
var y = document.getElementById("text-box-1");

function myS3Function() {
    if (x.value.length > 0) {
        x.classList.add("form-textbox-entered");
        y.classList.remove("is-error");

    } else {
        x.classList.remove("form-textbox-entered");
        y.classList.add("is-error");

    }
}

var z = document.getElementById("password");
var w = document.getElementById("text-box-2");

function myS4Function() {
    if (z.value.length > 0) {
        z.classList.add("form-textbox-entered");
        w.classList.remove("is-error");

    } else {
        z.classList.remove("form-textbox-entered");
        w.classList.add("is-error");

    }
}


//声明一个全局数组变量模拟数据库
var datalist = ["ASTX", "94DDT666"];

/**
 * @return {boolean}
 */
//submit指定的函数功能，返回true则代表登录成功
function SignIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    for (let i = 0; i < datalist.length; i += 2) {
        //逐个检测数组内的用户名和密码是否的输入值匹配，若发现匹配则返回true
        if (username === datalist[i] && password === datalist[i + 1])
            return true;
    }
    //若没有发现一致的用户名和密码则返回false并弹出登录失败提示信息
    alert("“用户ID” 或 “密码” 输入错误！");
    return false;
}