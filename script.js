// 打印页面功能
function printResume() {
    window.print();
}

// 动态加载内容（滚动到页面部分时触发动画效果）
document.addEventListener("DOMContentLoaded", () => {
    // 监控滚动事件，给每个section元素添加动态效果
    const sections = document.querySelectorAll('section');
    
    // 使用IntersectionObserver来检测页面滚动到特定区域
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });  // 触发条件：50%部分可见
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// 反馈按钮功能
document.addEventListener('DOMContentLoaded', function () {
    // 创建一个反馈按钮并将其添加到页面
    let feedbackButton = document.createElement('button');
    feedbackButton.innerHTML = '反馈/联系我';
    feedbackButton.style.position = 'fixed';
    feedbackButton.style.bottom = '20px';  // 保持底部位置
    feedbackButton.style.right = '20px';   // 右下角
    document.body.appendChild(feedbackButton);

    // 点击按钮时弹出联系信息
    feedbackButton.addEventListener('click', function () {
        alert("如果您对我的简历有任何问题或建议，请通过以下方式联系我：\n\n电话：[您的电话]\n邮箱：[您的邮箱]");
    });

    // 创建一个打印按钮并将其添加到页面
    let printButton = document.createElement('button');
    printButton.innerHTML = '打印简历';
    printButton.style.position = 'fixed';
    printButton.style.top = '20px';      // 右上角
    printButton.style.right = '20px';    // 右上角
    document.body.appendChild(printButton);

    // 点击按钮时调用打印功能
    printButton.addEventListener('click', function () {
        printResume();
    });
});
