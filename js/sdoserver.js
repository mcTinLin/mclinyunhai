// const apiUrl = `https://api.mcsrvstat.us/2/sdoserver.mclinyunhai.cn`;
// const timeoutDuration = 5000;
// const maxRetries = 3; // 最大重试次数

// // 颜色代码映射表
// const colorCodes = {
//     '§0': '<span style="color: #000000;">',
//     '§1': '<span style="color: #0000AA;">',
//     '§2': '<span style="color: #00AA00;">',
//     '§3': '<span style="color: #00AAAA;">',
//     '§4': '<span style="color: #AA0000;">',
//     '§5': '<span style="color: #AA00AA;">',
//     '§6': '<span style="color: #FFAA00;">',
//     '§7': '<span style="color: #AAAAAA;">',
//     '§8': '<span style="color: #555555;">',
//     '§9': '<span style="color: #5555FF;">',
//     '§a': '<span style="color: #55FF55;">',
//     '§b': '<span style="color: #55FFFF;">',
//     '§c': '<span style="color: #FF5555;">',
//     '§d': '<span style="color: #FF55FF;">',
//     '§e': '<span style="color: #FFFF55;">',
//     '§f': '<span style="color: #FFFFFF;">',
//     '§l': '<span style="font-weight: bold;">',
//     '§m': '<span style="text-decoration: line-through;">',
//     '§n': '<span style="text-decoration: underline;">',
//     '§o': '<span style="font-style: italic;">',
//     '§r': '</span>'
// };

// // 解析 MOTD 函数
// function parseMotd(motdArray) {
//     if (!motdArray) return '';
//     return motdArray.map(line => {
//         for (const code in colorCodes) {
//             line = line.replace(new RegExp(code, 'g'), colorCodes[code]);
//         }
//         return line;
//     }).join('<br>');
// }

// // 显示加载状态函数
// function showLoading() {
//     document.getElementById('loading-spinner').style.display = 'block';
// }

// // 隐藏加载状态函数
// function hideLoading() {
//     document.getElementById('loading-spinner').style.display = 'none';
// }

// // 显示错误信息函数
// function showError(message) {
//     const serverStatusElement = document.querySelector('.main-container');
//     serverStatusElement.innerHTML = `<p class="error-message failure"><i class="fa-solid fa-triangle-exclamation"></i> 错误: ${message}</p>`;
// }

// // 显示成功信息函数
// function showSuccess(motd, latency, playerCount) {
//     const motdElement = document.getElementById('motd');
//     const latencyElement = document.getElementById('latency');
//     const playerCountElement = document.getElementById('player-count');

//     motdElement.innerHTML = motd;
//     latencyElement.textContent = `${latency} ms`;
//     playerCountElement.textContent = playerCount;

//     motdElement.classList.add('success', 'show');
//     latencyElement.classList.add('success', 'show');
//     playerCountElement.classList.add('success', 'show');
// }

// // 发送请求函数
// async function sendRequest(retryCount = 0) {
//     try {
//         showLoading();
//         const startTime = performance.now();

//         // 创建 AbortController 用于超时控制
//         const controller = new AbortController();
//         const signal = controller.signal;
//         const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

//         // 发起请求
//         const response = await fetch(apiUrl, { signal });
//         clearTimeout(timeoutId);

//         // 检查响应状态
//         if (!response.ok) {
//             let errorMessage;
//             if (response.status === 404) {
//                 errorMessage = '请求的 API 接口未找到';
//             } else if (response.status === 500) {
//                 errorMessage = 'API 服务器内部错误';
//             } else {
//                 errorMessage = `网络响应出错，状态码: ${response.status}`;
//             }
//             throw new Error(errorMessage);
//         }

//         // 解析响应数据
//         const data = await response.json();
//         const endTime = performance.now();
//         const latency = Math.round(endTime - startTime);

//         if (data.online) {
//             const motd = parseMotd(data.motd?.raw);
//             const playerCount = `${data.players.online} / ${data.players.max}`;
//             showSuccess(motd, latency, playerCount);
//         } else {
//             showError('服务器已离线');
//         }
//     } catch (error) {
//         hideLoading();
//         if (retryCount < maxRetries) {
//             retryCount++;
//             showError(`请求出错，正在进行第 ${retryCount} 次重试...`);
//             // 递归重试请求
//             await new Promise(resolve => setTimeout(resolve, 1000)); // 延迟 1 秒后重试
//             sendRequest(retryCount);
//         } else {
//             if (error.name === 'AbortError') {
//                 showError('请求超时，请稍后重试');
//             } else {
//                 showError(error.message);
//             }
//         }
//     } finally {
//         hideLoading();
//     }
// }

// // 开始第一次请求
// sendRequest();

// // 获取返回顶端按钮元素
// const backToTopButton = document.querySelector('.back-to-top');

// // 监听页面滚动事件
// window.addEventListener('scroll', function () {
//     // 如果页面滚动距离大于100px，显示按钮；否则隐藏按钮
//     if (window.pageYOffset > 100) {
//         backToTopButton.style.display = 'block';
//     } else {
//         backToTopButton.style.display = 'none';
//     }
// });

// // 点击返回顶端按钮时，将页面滚动到顶部
// backToTopButton.addEventListener('click', function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });