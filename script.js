// 打印页面功能
function printResume() {
    window.print();
}

// 动态加载内容（滚动到页面部分时触发动画效果）
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    
    // 使用IntersectionObserver来检测页面滚动到特定区域
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });  // 触发条件：50%部分可见

    sections.forEach(section => observer.observe(section));
});

// 反馈和打印按钮功能
document.addEventListener('DOMContentLoaded', () => {
    // 创建反馈按钮
    const feedbackButton = document.createElement('button');
    feedbackButton.textContent = '反馈/联系我';
    feedbackButton.classList.add('contact-button');  // 给按钮添加一个类
    document.body.appendChild(feedbackButton);

    // 反馈按钮点击事件
    feedbackButton.addEventListener('click', () => {
        alert("如果您对我的简历有任何问题或建议，请通过以下方式联系我：\n\n电话：[您的电话]\n邮箱：[您的邮箱]");
    });

    // 创建打印按钮
    const printButton = document.createElement('button');
    printButton.textContent = '打印简历';
    printButton.classList.add('print-button');  // 给按钮添加一个类
    document.body.appendChild(printButton);

    // 打印按钮点击事件
    printButton.addEventListener('click', printResume);
});

