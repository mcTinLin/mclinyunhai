    // // 获取返回顶端按钮元素
    // const backToTopButton = document.querySelector('.back-to-top');

    // // 监听页面滚动事件
    // window.addEventListener('scroll', function () {
    //   // 如果页面滚动距离大于100px，显示按钮；否则隐藏按钮
    //   if (window.pageYOffset > 100) {
    //     backToTopButton.style.display = 'block';
    //   } else {
    //     backToTopButton.style.display = 'none';
    //   }
    // });

    // // 点击返回顶端按钮时，将页面滚动到顶部
    // backToTopButton.addEventListener('click', function () {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    // });

    // const typingTitle = document.getElementById('typing-title');
    // const textToType = "独自探险的惊喜，群星共舞的奇遇！";
    // let index = 0;

    // function type() {
    //   if (index < textToType.length) {
    //     typingTitle.textContent += textToType.charAt(index);
    //     index++;
    //     setTimeout(type, 100);
    //   }
    // }

    // window.onload = function () {
    //   type();
    // };

    // window.onload = function starttime() {
    //   time(h1, '2024/5/1/');
    //   ptimer = setTimeout(starttime, 1000);
    // }

    // function time(obj, futimg) {
    //   var nowtime = new Date().getTime();
    //   var futruetime = new Date(futimg).getTime();
    //   var msec = nowtime - futruetime;
    //   var time = (msec / 1000);
    //   var day = parseInt(time / 86400);
    //   var hour = parseInt(time / 3600) - 24 * day;
    //   var minute = parseInt(time % 3600 / 60);
    //   var second = parseInt(time % 60);
    //   obj.innerHTML = "凌云海工作室成立第 " + day + " 天 " + hour + " 小时 " + minute + " 分钟 " + second + " 秒 " + ""
    // }