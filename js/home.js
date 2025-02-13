// buttonClick.js
document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮元素
    const playButton = document.getElementById('playbuttom');

    // 为按钮添加点击事件监听器
    if (playButton) {
        playButton.addEventListener('click', function () {
            // 要跳转的网页地址，这里以百度为例，你可以替换为你需要的地址
            const targetUrl = 'https://www.bilibili.com/video/BV1h3B1YmENs/?spm_id_from=333.1387.upload.video_card.click&vd_source=f53f74ec309b174acfb9b9818d3b64c0';
            // 使用 window.location.href 实现跳转，会在当前窗口打开新页面
            window.location.href = targetUrl;

            // 如果你想在新窗口打开页面，可以使用 window.open 方法
            // window.open(targetUrl, '_blank');
        });
    }
});