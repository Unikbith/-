function validateAccount() {
            var account = document.getElementById("account").value;
            var password = document.getElementById("password").value;

            var accountPattern = /^[a-zA-Z][a-zA-Z0-9]{7,23}$/;
            var passwordPattern = /^[a-zA-Z][a-zA-Z0-9]{7,23}$/;

            if (accountPattern.test(account) && passwordPattern.test(password)) {
                alert("登陆成功");window.location.href="../index.html";
            } else {
                alert("账号或密码无效！请确保账号和密码以字母开头，后跟字母或数字，长度在8-24个字符之间。");
            }
        }