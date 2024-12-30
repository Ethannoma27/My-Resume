// 修改后的反馈按钮功能，包含二维码
function showContactInfo() {
    // 创建一个简单的弹出框，展示微信号和二维码
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    
    // 创建弹出内容
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.textAlign = 'center';
    modalContent.style.maxWidth = '80%';
    modalContent.innerHTML = `
        <h2>添加微信联系</h2>
        <p>请扫码或添加我的微信号：</p>
        <p><strong>your_wechat_id</strong></p>
        <img src="path_to_your_qr_code_image.jpg" alt="微信二维码" style="width: 200px; height: 200px; margin: 20px auto; display: block;">
        <button onclick="closeModal()">关闭</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// 关闭弹窗
function closeModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        modal.remove();
    }
}

