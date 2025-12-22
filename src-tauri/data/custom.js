window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
  const origin = e.target.closest('a')
  const isBaseTargetBlank = document.querySelector(
    'head base[target="_blank"]'
  )
  console.log('origin', origin, isBaseTargetBlank)
  if (
    (origin && origin.href && origin.target === '_blank') ||
    (origin && origin.href && isBaseTargetBlank)
  ) {
    e.preventDefault()
    console.log('handle origin', origin)
    location.href = origin.href
  } else {
    console.log('not handle origin', origin)
  }
}

window.open = function (url, target, features) {
  console.log('open', url, target, features)
  location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// 等待加载完成后执行
window.onload = function () {
  // 创建主控制面板样式
  const style = document.createElement('style');
  style.textContent = `
  .control-panel {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 2147483647;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .main-control-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    z-index: 2147483647;
    background: rgba(102, 126, 234, 0.85);
    color: white;
    animation: rainbow 8s infinite linear;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  @keyframes rainbow {
    0% { background: rgba(102, 126, 234, 0.85); }
    14% { background: rgba(240, 147, 251, 0.85); }
    28% { background: rgba(78, 205, 196, 0.85); }
    42% { background: rgba(255, 107, 107, 0.85); }
    57% { background: rgba(79, 172, 254, 0.85); }
    71% { background: rgba(168, 237, 234, 0.85); }
    85% { background: rgba(210, 153, 194, 0.85); }
    100% { background: rgba(102, 126, 234, 0.85); }
  }
  
  .main-control-btn:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    animation-duration: 2s;
    background: rgba(102, 126, 234, 0.95);
  }
  
  .tool-buttons {
    display: none;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease;
  }
  
  .tool-buttons.show {
    display: flex;
  }
  
  .tool-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    z-index: 2147483646;
    opacity: 0.85;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .tool-btn:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
  
  .back-btn {
    background: rgba(255, 107, 107, 0.85);
    color: white;
    animation: colorChange1 6s infinite alternate;
  }
  
  .forward-btn {
    background: rgba(79, 172, 254, 0.85);
    color: white;
    animation: colorChange2 7s infinite alternate;
  }
  
  .record-btn {
    background: rgba(240, 147, 251, 0.85);
    color: white;
    animation: colorChange3 5s infinite alternate;
  }
  
  .screenshot-btn {
    background: rgba(78, 205, 196, 0.85);
    color: white;
    animation: colorChange4 8s infinite alternate;
  }
  
  .link-jump-btn {
    background: rgba(255, 193, 7, 0.85);
    color: white;
    animation: colorChange5 6.5s infinite alternate;
  }
  
  .download-btn-tool {
    background: rgba(76, 175, 80, 0.85);
    color: white;
    animation: colorChange6 7.5s infinite alternate;
  }
  
  .link-download-btn {
    background: rgba(156, 39, 176, 0.85);
    color: white;
    animation: colorChange9 7s infinite alternate;
  }
  
  .color-btn {
    background: rgba(168, 237, 234, 0.85);
    color: #333;
    animation: colorChange7 9s infinite alternate;
  }
  
  .settings-btn {
    background: rgba(210, 153, 194, 0.85);
    color: #333;
    animation: colorChange8 8.5s infinite alternate;
  }
  
  .stop-btn {
    background: rgba(255, 0, 0, 0.85);
    color: white;
    animation: pulse 1.5s infinite, colorChangeStop 4s infinite alternate;
  }
  
  .delay-stop-btn {
    background: rgba(255, 140, 0, 0.85);
    color: white;
    animation: pulseDelay 2s infinite, colorChangeDelay 5s infinite alternate;
  }
  
  @keyframes colorChange1 {
    0% { background: rgba(255, 107, 107, 0.85); }
    100% { background: rgba(255, 142, 142, 0.85); }
  }
  
  @keyframes colorChange2 {
    0% { background: rgba(79, 172, 254, 0.85); }
    100% { background: rgba(107, 193, 255, 0.85); }
  }
  
  @keyframes colorChange3 {
    0% { background: rgba(240, 147, 251, 0.85); }
    100% { background: rgba(245, 169, 251, 0.85); }
  }
  
  @keyframes colorChange4 {
    0% { background: rgba(78, 205, 196, 0.85); }
    100% { background: rgba(95, 224, 214, 0.85); }
  }
  
  @keyframes colorChange5 {
    0% { background: rgba(255, 193, 7, 0.85); }
    100% { background: rgba(255, 213, 79, 0.85); }
  }
  
  @keyframes colorChange6 {
    0% { background: rgba(76, 175, 80, 0.85); }
    100% { background: rgba(105, 190, 110, 0.85); }
  }
  
  @keyframes colorChange7 {
    0% { background: rgba(168, 237, 234, 0.85); }
    100% { background: rgba(194, 245, 242, 0.85); }
  }
  
  @keyframes colorChange8 {
    0% { background: rgba(210, 153, 194, 0.85); }
    100% { background: rgba(224, 179, 211, 0.85); }
  }
  
  @keyframes colorChange9 {
    0% { background: rgba(156, 39, 176, 0.85); }
    100% { background: rgba(186, 104, 200, 0.85); }
  }
  
  @keyframes colorChangeStop {
    0% { background: rgba(255, 0, 0, 0.85); }
    100% { background: rgba(255, 51, 51, 0.85); }
  }
  
  @keyframes colorChangeDelay {
    0% { background: rgba(255, 140, 0, 0.85); }
    100% { background: rgba(255, 153, 51, 0.85); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
  
  @keyframes pulseDelay {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .button-icon {
    font-size: 14px;
  }
  
  /* 录屏控制面板 */
  .record-controls {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    z-index: 2147483645;
    display: none;
    flex-direction: column;
    gap: 20px;
    min-width: 350px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  
  .record-controls.show {
    display: flex;
  }
  
  .record-options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .option-label {
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .time-options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  
  .audio-options {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .time-option, .audio-option {
    padding: 12px 8px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 12px;
    font-weight: 500;
  }
  
  .time-option:hover, .audio-option:hover {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    transform: translateY(-2px);
  }
  
  .time-option.active, .audio-option.active {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
  }
  
  .close-btn {
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #4ecdc4, #44a08d);
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .cancel-btn {
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .action-btn {
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    flex: 1;
  }
  
  .close-btn:hover, .cancel-btn:hover, .action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* 链接跳转面板 */
  .link-jump-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    z-index: 2147483645;
    display: none;
    flex-direction: column;
    gap: 20px;
    min-width: 400px;
    backdrop-filter: blur(10px);
  }
  
  .link-jump-panel.show {
    display: flex;
  }
  
  .link-download-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    z-index: 2147483645;
    display: none;
    flex-direction: column;
    gap: 20px;
    min-width: 400px;
    backdrop-filter: blur(10px);
  }
  
  .link-download-panel.show {
    display: flex;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .input-label {
    font-weight: 600;
    color: #333;
  }
  
  .url-input {
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .url-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  }
  
  .button-group {
    display: flex;
    gap: 10px;
  }
  
  /* 下载分类面板 - 新样式 */
  .download-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    z-index: 2147483645;
    display: none;
    flex-direction: column;
    gap: 20px;
    min-width: 600px;
    max-height: 80vh;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .download-panel.show {
    display: flex;
  }
  
  .download-tabs {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 15px;
    overflow-x: auto;
  }
  
  .download-tab {
    padding: 10px 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: 500;
    color: #666;
    transition: all 0.3s ease;
    position: relative;
    white-space: nowrap;
  }
  
  .download-tab.active {
    color: #667eea;
  }
  
  .download-tab.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #667eea;
    border-radius: 3px 3px 0 0;
  }
  
  .download-content {
    flex: 1;
    overflow-y: auto;
    padding-right: 10px;
  }
  
  .download-category {
    margin-bottom: 25px;
  }
  
  .category-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #444;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .file-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
  }
  
  .file-item {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
  }
  
  .file-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
  
  .file-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
  }
  
  .file-info {
    flex: 1;
  }
  
  .file-name {
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
  }
  
  .file-url {
    font-size: 0.85rem;
    color: #666;
    word-break: break-all;
  }
  
  .file-actions {
    display: flex;
    gap: 5px;
  }
  
  .download-action {
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #4ecdc4, #44a08d);
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }
  
  .download-action:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  .empty-message {
    text-align: center;
    color: #666;
    padding: 30px;
    font-style: italic;
  }
  
  /* 颜色设置面板 */
  .color-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    z-index: 2147483645;
    display: none;
    flex-direction: column;
    gap: 20px;
    min-width: 280px;
    backdrop-filter: blur(10px);
  }
  
  .color-panel.show {
    display: flex;
  }
  
  .color-options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  
  .color-option {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .color-option:hover {
    transform: scale(1.15);
  }

  .custom-color-picker {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  
  .custom-color-picker input {
    flex: 1;
    height: 40px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  /* 收藏列表 */
  .collection-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    z-index: 2147483645;
    display: none;
    flex-direction: column;
    gap: 20px;
    min-width: 500px;
    max-height: 500px;
    overflow-y: auto;
    backdrop-filter: blur(10px);
  }
  
  .collection-panel.show {
    display: flex;
  }
  
  .collection-item {
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    margin-bottom: 10px;
  }
  
  .collection-item:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .collection-item-preview {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 15px;
  }
  
  .collection-item-info {
    flex: 1;
  }
  
  .collection-item-title {
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
  }
  
  .collection-item-date {
    font-size: 12px;
    color: #666;
  }
  
  .collection-actions {
    display: flex;
    gap: 8px;
  }
  
  .download-btn, .share-btn, .delete-btn {
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 12px;
  }
  
  .download-btn {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
  }
  
  .share-btn {
    background: linear-gradient(135deg, #a8edea, #fed6e3);
    color: #333;
  }
  
  .delete-btn {
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    color: white;
  }
  
  .download-btn:hover, .share-btn:hover, .delete-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* 下载管理器 */
  .download-manager {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 2147483646;
    min-width: 300px;
    max-height: 400px;
    overflow-y: auto;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: none;
  }
  
  .download-manager.show {
    display: block;
  }
  
  .download-manager-header {
    padding: 15px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .download-manager-title {
    font-weight: 600;
    color: #333;
  }
  
  .download-manager-close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #666;
  }
  
  .download-manager-list {
    padding: 10px;
  }
  
  .download-task {
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .download-task:last-child {
    border-bottom: none;
  }
  
  .download-task-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .download-task-name {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
  
  .download-task-percentage {
    font-size: 12px;
    color: #666;
  }
  
  .download-task-progress {
    width: 100%;
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .download-task-progress-bar {
    height: 100%;
    background: linear-gradient(135deg, #4ecdc4, #44a08d);
    width: 0%;
    transition: width 0.3s ease;
  }
  
  /* 状态指示器 */
  .status-indicator {
    position: fixed;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 12px;
    z-index: 2147483646;
    display: none;
    backdrop-filter: blur(10px);
  }
  
  /* 确保所有元素在最顶层 */
  .control-panel *,
  .record-controls *,
  .color-panel *,
  .collection-panel *,
  .link-jump-panel *,
  .link-download-panel *,
  .download-panel *,
  .download-manager * {
    z-index: 2147483647 !important;
  }
  
  @media (max-width: 768px) {
    .control-panel {
      top: 10px;
      right: 10px;
    }
    
    .main-control-btn,
    .tool-btn {
      width: 35px;
      height: 35px;
      font-size: 12px;
    }
    
    .record-controls,
    .color-panel,
    .collection-panel,
    .link-jump-panel,
    .link-download-panel,
    .download-panel {
      min-width: 300px;
      padding: 20px;
    }

    .download-panel {
      min-width: 90vw;
    }

    .collection-panel {
      min-width: 90vw;
    }

    .download-manager {
      min-width: 90vw;
      right: 5vw;
      bottom: 10px;
    }
    
    .file-list {
      grid-template-columns: 1fr;
    }
    
    .link-jump-panel,
    .link-download-panel {
      min-width: 90vw;
    }
  }
`;

  // 创建控制面板
  const controlPanel = document.createElement('div');
  controlPanel.className = 'control-panel';
  controlPanel.setAttribute('data-draggable', 'true');

  // 创建主控制按钮
  const mainControlBtn = document.createElement('button');
  mainControlBtn.className = 'main-control-btn';
  mainControlBtn.innerHTML = '⚙️';
  mainControlBtn.title = '控制面板';

  // 创建工具按钮容器
  const toolButtons = document.createElement('div');
  toolButtons.className = 'tool-buttons';

  // 创建各个功能按钮
  const backButton = document.createElement('button');
  backButton.className = 'tool-btn back-btn';
  backButton.innerHTML = '←';
  backButton.title = '返回';

  const forwardButton = document.createElement('button');
  forwardButton.className = 'tool-btn forward-btn';
  forwardButton.innerHTML = '→';
  forwardButton.title = '前进';

  const recordButton = document.createElement('button');
  recordButton.className = 'tool-btn record-btn';
  recordButton.innerHTML = '⏺️';
  recordButton.title = '录屏';

  const screenshotButton = document.createElement('button');
  screenshotButton.className = 'tool-btn screenshot-btn';
  screenshotButton.innerHTML = '📷';
  screenshotButton.title = '截图';

  const linkJumpButton = document.createElement('button');
  linkJumpButton.className = 'tool-btn link-jump-btn';
  linkJumpButton.innerHTML = '🌐';
  linkJumpButton.title = '链接跳转';

  const downloadButton = document.createElement('button');
  downloadButton.className = 'tool-btn download-btn-tool';
  downloadButton.innerHTML = '📂';
  downloadButton.title = '文件下载';

  const linkDownloadButton = document.createElement('button');
  linkDownloadButton.className = 'tool-btn link-download-btn';
  linkDownloadButton.innerHTML = '⬇️';
  linkDownloadButton.title = '链接下载';

  const colorButton = document.createElement('button');
  colorButton.className = 'tool-btn color-btn';
  colorButton.innerHTML = '🎨';
  colorButton.title = '颜色设置';

  const settingsButton = document.createElement('button');
  settingsButton.className = 'tool-btn settings-btn';
  settingsButton.innerHTML = '⭐';
  settingsButton.title = '收藏';

  const stopButton = document.createElement('button');
  stopButton.className = 'tool-btn stop-btn';
  stopButton.innerHTML = '⏹️';
  stopButton.title = '立即停止';
  stopButton.style.display = 'none';

  const delayStopButton = document.createElement('button');
  delayStopButton.className = 'tool-btn delay-stop-btn';
  delayStopButton.innerHTML = '⏱️';
  delayStopButton.title = '延时停止';
  delayStopButton.style.display = 'none';

  // 录屏控制面板
  const recordControls = document.createElement('div');
  recordControls.className = 'record-controls';
  recordControls.innerHTML = `
    <h3 style="margin: 0; text-align: center; color: #333;">录屏设置</h3>
    <div class="record-options">
      <div class="option-group">
        <div class="option-label">录屏时长</div>
        <div class="time-options">
          <button class="time-option" data-time="5">5秒</button>
          <button class="time-option" data-time="10">10秒</button>
          <button class="time-option" data-time="300">5分钟</button>
          <button class="time-option" data-time="600">10分钟</button>
          <button class="time-option" data-time="1200">20分钟</button>
          <button class="time-option" data-time="1800">30分钟</button>
          <button class="time-option" data-time="3600">1小时</button>
          <button class="time-option" data-time="0">自定义</button>
        </div>
      </div>
      <div class="option-group">
        <div class="option-label">音频录制</div>
        <div class="audio-options">
          <button class="audio-option active" data-audio="none">无声</button>
          <button class="audio-option" data-audio="microphone">麦克风</button>
          <button class="audio-option" data-audio="system">系统声音</button>
          <button class="audio-option" data-audio="both">两者都录</button>
        </div>
      </div>
    </div>
    <div style="display: flex; gap: 10px;">
      <button class="close-btn" style="flex: 1;">开始录屏</button>
      <button class="cancel-btn" style="flex: 1;">关闭</button>
    </div>
  `;

  // 链接跳转面板
  const linkJumpPanel = document.createElement('div');
  linkJumpPanel.className = 'link-jump-panel';
  linkJumpPanel.innerHTML = `
    <h3 style="margin: 0; text-align: center; color: #333;">网站链接跳转</h3>
    <div class="input-group">
      <label class="input-label">请输入网站链接：</label>
      <input type="url" class="url-input" id="jumpUrl" placeholder="https://example.com" value="https://">
    </div>
    <div class="button-group">
      <button class="action-btn" id="jumpAction">立即跳转</button>
      <button class="cancel-btn">关闭</button>
    </div>
  `;

  // 链接下载面板
  const linkDownloadPanel = document.createElement('div');
  linkDownloadPanel.className = 'link-download-panel';
  linkDownloadPanel.innerHTML = `
    <h3 style="margin: 0; text-align: center; color: #333;">链接文件下载</h3>
    <div class="input-group">
      <label class="input-label">请输入下载链接：</label>
      <input type="url" class="url-input" id="downloadUrl" placeholder="https://example.com/file.zip">
    </div>
    <div class="input-group">
      <label class="input-label">文件名（可选）：</label>
      <input type="text" class="url-input" id="downloadFilename" placeholder="自定义文件名">
    </div>
    <div class="button-group">
      <button class="action-btn" id="downloadAction">开始下载</button>
      <button class="cancel-btn">关闭</button>
    </div>
  `;

  // 下载分类面板 - 新的下载面板
  const downloadPanel = document.createElement('div');
  downloadPanel.className = 'download-panel';
  downloadPanel.innerHTML = `
    <h3 style="margin: 0; text-align: center; color: #333;">文件下载分类</h3>
    
    <div class="download-tabs">
      <button class="download-tab active" data-tab="all">全部文件</button>
      <button class="download-tab" data-tab="video">视频</button>
      <button class="download-tab" data-tab="audio">音频</button>
      <button class="download-tab" data-tab="image">图片</button>
      <button class="download-tab" data-tab="document">文档</button>
      <button class="download-tab" data-tab="archive">压缩包</button>
      <button class="download-tab" data-tab="software">软件</button>
    </div>
    
    <div class="download-content">
      <div class="download-category" id="all-category">
        <h3 class="category-title">全部可下载文件</h3>
        <div class="file-list" id="all-files">
          <!-- 动态生成文件列表 -->
        </div>
      </div>
      
      <div class="download-category" id="video-category" style="display: none;">
        <h3 class="category-title"><i>🎥</i> 视频文件</h3>
        <div class="file-list" id="video-files">
          <!-- 动态生成视频文件列表 -->
        </div>
      </div>
      
      <div class="download-category" id="audio-category" style="display: none;">
        <h3 class="category-title"><i>🎵</i> 音频文件</h3>
        <div class="file-list" id="audio-files">
          <!-- 动态生成音频文件列表 -->
        </div>
      </div>
      
      <div class="download-category" id="image-category" style="display: none;">
        <h3 class="category-title"><i>🖼️</i> 图片文件</h3>
        <div class="file-list" id="image-files">
          <!-- 动态生成图片文件列表 -->
        </div>
      </div>
      
      <div class="download-category" id="document-category" style="display: none;">
        <h3 class="category-title"><i>📄</i> 文档文件</h3>
        <div class="file-list" id="document-files">
          <!-- 动态生成文档文件列表 -->
        </div>
      </div>
      
      <div class="download-category" id="archive-category" style="display: none;">
        <h3 class="category-title"><i>📦</i> 压缩文件</h3>
        <div class="file-list" id="archive-files">
          <!-- 动态生成压缩文件列表 -->
        </div>
      </div>
      
      <div class="download-category" id="software-category" style="display: none;">
        <h3 class="category-title"><i>💻</i> 软件程序</h3>
        <div class="file-list" id="software-files">
          <!-- 动态生成软件文件列表 -->
        </div>
      </div>
    </div>
    
    <button class="cancel-btn">关闭</button>
  `;

  // 颜色设置面板
  const colorPanel = document.createElement('div');
  colorPanel.className = 'color-panel';
  colorPanel.innerHTML = `
    <h3 style="margin: 0; text-align: center; color: #333;">选择主题颜色</h3>
    <div class="color-options">
      <button class="color-option" style="background: linear-gradient(135deg, #667eea, #764ba2)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #f093fb, #f5576c)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #4ecdc4, #44a08d)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #ff6b6b, #ee5a52)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #4facfe, #00f2fe)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #a8edea, #fed6e3)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #d299c2, #fef9d7)"></button>
      <button class="color-option" style="background: linear-gradient(135deg, #fd746c, #ff9068)"></button>
    </div>
    <div class="custom-color-picker">
      <input type="color" id="customColorPicker" value="#667eea">
      <span>自定义颜色</span>
    </div>
    <button class="cancel-btn">关闭</button>
  `;

  // 收藏面板
  const collectionPanel = document.createElement('div');
  collectionPanel.className = 'collection-panel';
  collectionPanel.innerHTML = `
    <h3 style="margin: 0; text-align: center; color: #333;">我的收藏</h3>
    <div class="collection-list"></div>
    <button class="cancel-btn">关闭</button>
  `;

  // 下载管理器
  const downloadManager = document.createElement('div');
  downloadManager.className = 'download-manager';
  downloadManager.innerHTML = `
    <div class="download-manager-header">
      <div class="download-manager-title">下载管理器</div>
      <button class="download-manager-close">×</button>
    </div>
    <div class="download-manager-list" id="downloadTaskList">
      <div style="text-align: center; color: #666; padding: 20px;">暂无下载任务</div>
    </div>
  `;

  // 状态指示器
  const statusIndicator = document.createElement('div');
  statusIndicator.className = 'status-indicator';
  statusIndicator.textContent = '准备就绪';

  // 将元素添加到页面
  document.head.appendChild(style);
  toolButtons.appendChild(backButton);
  toolButtons.appendChild(forwardButton);
  toolButtons.appendChild(recordButton);
  toolButtons.appendChild(screenshotButton);
  toolButtons.appendChild(linkJumpButton);
  toolButtons.appendChild(downloadButton);
  toolButtons.appendChild(linkDownloadButton);
  toolButtons.appendChild(colorButton);
  toolButtons.appendChild(settingsButton);
  toolButtons.appendChild(stopButton);
  toolButtons.appendChild(delayStopButton);
  
  controlPanel.appendChild(mainControlBtn);
  controlPanel.appendChild(toolButtons);
  
  document.body.appendChild(controlPanel);
  document.body.appendChild(recordControls);
  document.body.appendChild(linkJumpPanel);
  document.body.appendChild(linkDownloadPanel);
  document.body.appendChild(downloadPanel);
  document.body.appendChild(colorPanel);
  document.body.appendChild(collectionPanel);
  document.body.appendChild(downloadManager);
  document.body.appendChild(statusIndicator);

  // 状态变量
  let isRecording = false;
  let mediaRecorder = null;
  let recordedChunks = [];
  let recordingTimer = null;
  let audioStream = null;
  let videoStream = null;
  let collections = JSON.parse(localStorage.getItem('screenCollections') || '[]');
  let selectedAudioOption = 'none';
  let downloadTasks = JSON.parse(localStorage.getItem('downloadTasks') || '[]');

  // 显示状态信息
  function showStatus(message, duration = 3000) {
    statusIndicator.textContent = message;
    statusIndicator.style.display = 'block';
    setTimeout(() => {
      statusIndicator.style.display = 'none';
    }, duration);
  }

  // 显示/隐藏工具按钮
  let toolsVisible = false;
  mainControlBtn.addEventListener('click', function() {
    toolsVisible = !toolsVisible;
    if (toolsVisible) {
      toolButtons.classList.add('show');
      showStatus('控制面板已打开');
    } else {
      toolButtons.classList.remove('show');
      showStatus('控制面板已隐藏');
    }
  });

  // 按钮点击事件
  backButton.addEventListener('click', function() {
    if (window.history.length > 1) {
      window.history.back();
      showStatus('返回上一页');
    } else if (document.referrer) {
      window.location.href = document.referrer;
    }
  });

  forwardButton.addEventListener('click', function() {
    if (window.history.length > 0) {
      window.history.forward();
      showStatus('前进到下一页');
    }
  });

  // 录屏功能
  recordButton.addEventListener('click', function() {
    recordControls.classList.add('show');
    showStatus('打开录屏设置');
  });

  // 截图功能
  screenshotButton.addEventListener('click', function() {
    takeScreenshot();
  });

  // 链接跳转功能
  linkJumpButton.addEventListener('click', function() {
    linkJumpPanel.classList.add('show');
    showStatus('打开链接跳转');
  });

  // 文件下载功能 - 修改为新的下载分类面板
  downloadButton.addEventListener('click', function() {
    scanPageForDownloads();
    downloadPanel.classList.add('show');
    showStatus('打开文件下载分类');
  });

  // 链接下载功能
  linkDownloadButton.addEventListener('click', function() {
    linkDownloadPanel.classList.add('show');
    showStatus('打开链接下载');
  });

  // 颜色设置
  colorButton.addEventListener('click', function() {
    colorPanel.classList.add('show');
    showStatus('打开颜色设置');
  });

  // 收藏功能
  settingsButton.addEventListener('click', function() {
    showCollections();
  });

  // 立即停止功能
  stopButton.addEventListener('click', function() {
    stopRecording();
    showStatus('录屏已立即停止');
  });

  // 延时停止功能
  delayStopButton.addEventListener('click', function() {
    showStatus('录屏将在5秒后停止');
    setTimeout(() => {
      stopRecording();
      showStatus('录屏已延时停止');
    }, 5000);
  });

  // 关闭按钮事件 - 录屏开始
  recordControls.querySelector('.close-btn').addEventListener('click', function() {
    const selectedTime = recordControls.querySelector('.time-option.active');
    if (selectedTime) {
      const time = parseInt(selectedTime.getAttribute('data-time'));
      startRecording(time);
      recordControls.classList.remove('show');
    } else {
      showStatus('请选择录屏时长');
    }
  });

  // 关闭按钮事件 - 取消
  document.querySelectorAll('.cancel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      recordControls.classList.remove('show');
      colorPanel.classList.remove('show');
      collectionPanel.classList.remove('show');
      linkJumpPanel.classList.remove('show');
      linkDownloadPanel.classList.remove('show');
      downloadPanel.classList.remove('show');
    });
  });

  // 链接跳转功能
  document.getElementById('jumpAction').addEventListener('click', function() {
    const urlInput = document.getElementById('jumpUrl');
    let url = urlInput.value.trim();
    
    if (!url) {
      showStatus('请输入要跳转的网址');
      return;
    }
    
    // 确保URL有协议前缀
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    // 验证URL格式
    try {
      new URL(url);
      showStatus('正在跳转到: ' + url);
      setTimeout(() => {
        window.location.href = url;
      }, 1000);
    } catch (e) {
      showStatus('网址格式不正确，请检查');
    }
  });

  // 链接下载功能
  document.getElementById('downloadAction').addEventListener('click', function() {
    const urlInput = document.getElementById('downloadUrl');
    const filenameInput = document.getElementById('downloadFilename');
    
    let url = urlInput.value.trim();
    let filename = filenameInput.value.trim();
    
    if (!url) {
      showStatus('请输入下载链接');
      return;
    }
    
    // 如果没有指定文件名，从URL中提取
    if (!filename) {
      const urlPath = new URL(url).pathname;
      filename = urlPath.split('/').pop() || 'download';
    }
    
    // 开始下载
    downloadFile(url, filename);
    linkDownloadPanel.classList.remove('show');
  });

  // 下载管理器关闭按钮
  document.querySelector('.download-manager-close').addEventListener('click', function() {
    downloadManager.classList.remove('show');
  });

  // 下载分类标签切换
  const downloadTabs = downloadPanel.querySelectorAll('.download-tab');
  const downloadCategories = downloadPanel.querySelectorAll('.download-category');
  
  downloadTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有活动标签
      downloadTabs.forEach(t => t.classList.remove('active'));
      // 添加当前活动标签
      this.classList.add('active');
      
      // 隐藏所有分类
      downloadCategories.forEach(cat => cat.style.display = 'none');
      
      // 显示选中的分类
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-category`).style.display = 'block';
    });
  });

  // 录屏时长选择
  recordControls.querySelectorAll('.time-option').forEach(option => {
    option.addEventListener('click', function() {
      recordControls.querySelectorAll('.time-option').forEach(opt => {
        opt.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  // 音频选项选择
  recordControls.querySelectorAll('.audio-option').forEach(option => {
    option.addEventListener('click', function() {
      recordControls.querySelectorAll('.audio-option').forEach(opt => {
        opt.classList.remove('active');
      });
      this.classList.add('active');
      selectedAudioOption = this.getAttribute('data-audio');
    });
  });

  // 预设颜色选择
  colorPanel.querySelectorAll('.color-option').forEach((option, index) => {
    option.addEventListener('click', function() {
      const gradients = [
        'rgba(102, 126, 234, 0.85)',
        'rgba(240, 147, 251, 0.85)',
        'rgba(78, 205, 196, 0.85)',
        'rgba(255, 107, 107, 0.85)',
        'rgba(79, 172, 254, 0.85)',
        'rgba(168, 237, 234, 0.85)',
        'rgba(210, 153, 194, 0.85)',
        'rgba(253, 116, 108, 0.85)'
      ];
      
      applyCustomColor(gradients[index]);
      showStatus('主题颜色已更改');
    });
  });

  // 自定义颜色选择
  const customColorPicker = document.getElementById('customColorPicker');
  customColorPicker.addEventListener('input', function() {
    const hexColor = this.value;
    const rgbColor = hexToRgb(hexColor);
    if (rgbColor) {
      const rgbaColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.85)`;
      applyCustomColor(rgbaColor);
    }
  });

  // 应用自定义颜色到所有按钮
  function applyCustomColor(color) {
    const buttons = [
      mainControlBtn, backButton, forwardButton, recordButton, 
      screenshotButton, linkJumpButton, downloadButton, linkDownloadButton, 
      colorButton, settingsButton
    ];
    
    buttons.forEach(button => {
      button.style.background = color;
      // 移除动画以避免冲突
      button.style.animation = 'none';
    });
    
    // 保存到本地存储
    localStorage.setItem('customButtonColor', color);
  }

  // 加载保存的自定义颜色
  function loadCustomColor() {
    const savedColor = localStorage.getItem('customButtonColor');
    if (savedColor) {
      applyCustomColor(savedColor);
    }
  }

  // HEX转RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // 截图功能实现
  function takeScreenshot() {
    html2canvas(document.body, {
      useCORS: true,
      allowTaint: true,
      scale: 1,
      logging: false
    }).then(canvas => {
      const link = document.createElement('a');
      const timestamp = new Date().getTime();
      const fileName = `screenshot-${timestamp}.png`;
      link.download = fileName;
      const dataUrl = canvas.toDataURL('image/png', 0.9);
      link.href = dataUrl;
      link.click();
      
      // 添加到收藏
      addToCollection('screenshot', dataUrl, `截图 ${new Date().toLocaleString()}`, fileName);
      showStatus('截图已保存并添加到收藏');
    }).catch(err => {
      console.error('截图失败:', err);
      showStatus('截图失败，请重试');
    });
  }

  // 扫描页面中的可下载文件 - 新的扫描函数
  function scanPageForDownloads() {
    // 清空现有文件列表
    const fileLists = document.querySelectorAll('.file-list');
    fileLists.forEach(list => list.innerHTML = '');
    
    // 收集所有链接
    const links = document.querySelectorAll('a[href]');
    const downloadFiles = [];
    
    links.forEach(link => {
      const href = link.href;
      const text = link.textContent.trim() || link.getAttribute('download') || '未命名文件';
      
      // 检查是否是下载链接
      if (isDownloadLink(href)) {
        const fileInfo = categorizeFile(href, text);
        downloadFiles.push(fileInfo);
      }
    });
    
    // 收集所有媒体元素
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (video.src) {
        const fileInfo = categorizeFile(video.src, '视频文件');
        downloadFiles.push(fileInfo);
      }
    });
    
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      if (audio.src) {
        const fileInfo = categorizeFile(audio.src, '音频文件');
        downloadFiles.push(fileInfo);
      }
    });
    
    // 收集所有图片
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src && !img.src.startsWith('data:')) {
        const fileInfo = categorizeFile(img.src, '图片文件');
        downloadFiles.push(fileInfo);
      }
    });
    
    // 如果没有找到文件，显示提示信息
    if (downloadFiles.length === 0) {
      fileLists.forEach(list => {
        list.innerHTML = '<div class="empty-message">未找到可下载文件</div>';
      });
      return;
    }
    
    // 渲染文件列表
    renderFileLists(downloadFiles);
  }

  // 判断是否是下载链接
  function isDownloadLink(url) {
    // 排除常见非下载链接
    if (url.includes('javascript:') || url.includes('mailto:') || url.includes('tel:') || 
        url.includes('#') || url.trim() === '') {
      return false;
    }
    
    // 检查文件扩展名
    const downloadExtensions = [
      // 视频
      '.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv', '.m4v',
      // 音频
      '.mp3', '.wav', '.ogg', '.flac', '.aac', '.m4a', '.wma',
      // 图片
      '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.ico',
      // 文档
      '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.rtf',
      // 压缩包
      '.zip', '.rar', '.7z', '.tar', '.gz', '.bz2',
      // 软件
      '.exe', '.msi', '.dmg', '.pkg', '.deb', '.rpm', '.apk'
    ];
    
    return downloadExtensions.some(ext => url.toLowerCase().includes(ext));
  }

  // 分类文件
  function categorizeFile(url, name) {
    const extension = getFileExtension(url);
    
    // 根据扩展名分类
    if (['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv', '.m4v'].includes(extension)) {
      return { url, name, category: 'video', icon: '🎥', color: '#ff6b6b' };
    } else if (['.mp3', '.wav', '.ogg', '.flac', '.aac', '.m4a', '.wma'].includes(extension)) {
      return { url, name, category: 'audio', icon: '🎵', color: '#4ecdc4' };
    } else if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.ico'].includes(extension)) {
      return { url, name, category: 'image', icon: '🖼️', color: '#a8edea' };
    } else if (['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.rtf'].includes(extension)) {
      return { url, name, category: 'document', icon: '📄', color: '#f093fb' };
    } else if (['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2'].includes(extension)) {
      return { url, name, category: 'archive', icon: '📦', color: '#fd746c' };
    } else if (['.exe', '.msi', '.dmg', '.pkg', '.deb', '.rpm', '.apk'].includes(extension)) {
      return { url, name, category: 'software', icon: '💻', color: '#667eea' };
    } else {
      return { url, name, category: 'other', icon: '📎', color: '#95a5a6' };
    }
  }

  // 获取文件扩展名
  function getFileExtension(url) {
    const path = url.split('?')[0]; // 移除查询参数
    const filename = path.split('/').pop();
    const lastDotIndex = filename.lastIndexOf('.');
    
    if (lastDotIndex === -1) return '';
    return filename.substring(lastDotIndex).toLowerCase();
  }

  // 渲染文件列表
  function renderFileLists(files) {
    // 按分类分组
    const categorizedFiles = {
      all: files,
      video: files.filter(f => f.category === 'video'),
      audio: files.filter(f => f.category === 'audio'),
      image: files.filter(f => f.category === 'image'),
      document: files.filter(f => f.category === 'document'),
      archive: files.filter(f => f.category === 'archive'),
      software: files.filter(f => f.category === 'software')
    };
    
    // 渲染每个分类
    Object.keys(categorizedFiles).forEach(category => {
      const fileList = document.getElementById(`${category}-files`);
      const categoryFiles = categorizedFiles[category];
      
      if (categoryFiles.length === 0) {
        fileList.innerHTML = '<div class="empty-message">未找到此类文件</div>';
        return;
      }
      
      fileList.innerHTML = '';
      
      categoryFiles.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        fileItem.innerHTML = `
          <div class="file-icon" style="background: ${file.color}">
            ${file.icon}
          </div>
          <div class="file-info">
            <div class="file-name">${file.name}</div>
            <div class="file-url">${file.url}</div>
          </div>
          <div class="file-actions">
            <button class="download-action" data-url="${file.url}" data-name="${file.name}">下载</button>
          </div>
        `;
        
        fileList.appendChild(fileItem);
      });
    });
    
    // 添加下载按钮事件
    document.querySelectorAll('.download-action').forEach(btn => {
      btn.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        const name = this.getAttribute('data-name');
        downloadFile(url, name);
      });
    });
  }

  // 下载文件
  function downloadFile(url, filename) {
    // 创建下载链接
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'download';
    link.target = '_blank';
    
    // 触发下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // 添加到下载管理器
    addToDownloadManager(url, filename);
    showStatus('文件下载已开始');
  }

  // 添加到下载管理器
  function addToDownloadManager(url, filename) {
    const taskId = Date.now();
    
    const downloadTask = {
      id: taskId,
      name: filename,
      url: url,
      progress: 0,
      status: 'downloading'
    };
    
    downloadTasks.push(downloadTask);
    localStorage.setItem('downloadTasks', JSON.stringify(downloadTasks));
    
    // 更新下载管理器显示
    updateDownloadManager();
    
    // 模拟下载进度
    simulateDownloadProgress(taskId);
  }

  // 模拟下载进度
  function simulateDownloadProgress(taskId) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // 更新任务状态为完成
        const taskIndex = downloadTasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          downloadTasks[taskIndex].status = 'completed';
          downloadTasks[taskIndex].progress = 100;
          localStorage.setItem('downloadTasks', JSON.stringify(downloadTasks));
          updateDownloadManager();
        }
      } else {
        // 更新任务进度
        const taskIndex = downloadTasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          downloadTasks[taskIndex].progress = Math.round(progress);
          localStorage.setItem('downloadTasks', JSON.stringify(downloadTasks));
          updateDownloadManager();
        }
      }
    }, 200);
  }

  // 更新下载管理器
  function updateDownloadManager() {
    const taskList = document.getElementById('downloadTaskList');
    taskList.innerHTML = '';
    
    if (downloadTasks.length === 0) {
      taskList.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">暂无下载任务</div>';
      return;
    }
    
    downloadTasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.className = 'download-task';
      
      let statusText = '';
      let statusClass = '';
      
      if (task.status === 'downloading') {
        statusText = `下载中 ${task.progress}%`;
      } else if (task.status === 'completed') {
        statusText = '已完成';
        statusClass = 'completed';
      } else if (task.status === 'error') {
        statusText = '下载失败';
        statusClass = 'error';
      }
      
      taskElement.innerHTML = `
        <div class="download-task-info">
          <div class="download-task-name">${task.name}</div>
          <div class="download-task-percentage ${statusClass}">${statusText}</div>
        </div>
        <div class="download-task-progress">
          <div class="download-task-progress-bar" style="width: ${task.progress}%"></div>
        </div>
      `;
      
      taskList.appendChild(taskElement);
    });
  }

  // 开始录屏
  async function startRecording(duration) {
    try {
      showStatus('正在启动录屏...');
      
      // 获取屏幕流
      videoStream = await navigator.mediaDevices.getDisplayMedia({
        video: { 
          mediaSource: "screen",
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          frameRate: { ideal: 30 }
        },
        audio: selectedAudioOption === 'system' || selectedAudioOption === 'both'
      });

      const streams = [videoStream];
      
      // 根据选择添加音频流
      if (selectedAudioOption === 'microphone' || selectedAudioOption === 'both') {
        try {
          audioStream = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
              sampleRate: 44100
            }
          });
          streams.push(audioStream);
        } catch (audioErr) {
          console.warn('麦克风访问失败:', audioErr);
          showStatus('麦克风访问失败，将继续录制无声视频');
        }
      }

      // 合并流
      const combinedStream = new MediaStream();
      streams.forEach(stream => {
        stream.getTracks().forEach(track => {
          combinedStream.addTrack(track);
        });
      });

      mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm;codecs=vp9,opus',
        videoBitsPerSecond: 5000000
      });
      
      recordedChunks = [];

      mediaRecorder.ondataavailable = function(e) {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };

      mediaRecorder.onstop = function() {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        
        // 创建下载链接
        const link = document.createElement('a');
        const timestamp = new Date().getTime();
        const fileName = `recording-${timestamp}.webm`;
        link.download = fileName;
        link.href = url;
        link.click();

        // 添加到收藏
        addToCollection('recording', url, `录屏 ${new Date().toLocaleString()}`, fileName);
        
        // 清理
        streams.forEach(stream => {
          stream.getTracks().forEach(track => track.stop());
        });
        
        isRecording = false;
        stopButton.style.display = 'none';
        delayStopButton.style.display = 'none';
        
        showStatus('录屏已保存并添加到收藏');
      };

      mediaRecorder.start(1000); // 每1秒收集一次数据
      isRecording = true;
      stopButton.style.display = 'block';
      delayStopButton.style.display = 'block';
      
      showStatus('录屏已开始');

      // 设置定时停止
      if (duration > 0) {
        recordingTimer = setTimeout(() => {
          stopRecording();
          showStatus('定时录屏已完成');
        }, duration * 1000);
      }
    } catch (err) {
      console.error('录屏失败:', err);
      showStatus('录屏失败，请允许屏幕共享权限');
    }
  }

  // 停止录屏
  function stopRecording() {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      isRecording = false;
      stopButton.style.display = 'none';
      delayStopButton.style.display = 'none';
      
      if (recordingTimer) {
        clearTimeout(recordingTimer);
        recordingTimer = null;
      }
      
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
        audioStream = null;
      }
      
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
      }
    }
  }

  // 添加到收藏
  function addToCollection(type, url, title, fileName) {
    const collection = {
      id: Date.now(),
      type: type,
      url: url,
      title: title,
      fileName: fileName,
      date: new Date().toISOString()
    };
    
    collections.unshift(collection);
    localStorage.setItem('screenCollections', JSON.stringify(collections));
  }

  // 显示收藏
  function showCollections() {
    const collectionList = collectionPanel.querySelector('.collection-list');
    collectionList.innerHTML = '';
    
    if (collections.length === 0) {
      collectionList.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">暂无收藏内容</div>';
    } else {
      collections.forEach(item => {
        const collectionItem = document.createElement('div');
        collectionItem.className = 'collection-item';
        
        // 创建预览图
        let previewHtml = '';
        if (item.type === 'screenshot') {
          previewHtml = `<img src="${item.url}" class="collection-item-preview" alt="${item.title}">`;
        } else if (item.type === 'video') {
          previewHtml = `<div class="collection-item-preview" style="background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">🎥</div>`;
        } else {
          previewHtml = `<div class="collection-item-preview" style="background: linear-gradient(135deg, #4ecdc4, #44a08d); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">⏺️</div>`;
        }
        
        collectionItem.innerHTML = `
          ${previewHtml}
          <div class="collection-item-info">
            <div class="collection-item-title">${item.title}</div>
            <div class="collection-item-date">${new Date(item.date).toLocaleString()}</div>
          </div>
          <div class="collection-actions">
            <button class="download-btn" data-id="${item.id}">下载</button>
            <button class="share-btn" data-id="${item.id}">分享</button>
            <button class="delete-btn" data-id="${item.id}">删除</button>
          </div>
        `;
        
        collectionList.appendChild(collectionItem);
      });
      
      // 下载按钮事件
      collectionList.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = parseInt(this.getAttribute('data-id'));
          const item = collections.find(col => col.id === id);
          if (item) {
            const link = document.createElement('a');
            link.download = item.fileName;
            link.href = item.url;
            link.click();
            showStatus('文件下载中...');
          }
        });
      });
      
      // 分享按钮事件
      collectionList.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = parseInt(this.getAttribute('data-id'));
          const item = collections.find(col => col.id === id);
          if (item) {
            shareItem(item);
          }
        });
      });
      
      // 删除按钮事件
      collectionList.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = parseInt(this.getAttribute('data-id'));
          deleteItem(id);
        });
      });
    }
    
    collectionPanel.classList.add('show');
    showStatus('打开收藏列表');
  }

  // 分享项目
  function shareItem(item) {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: '分享我的' + (item.type === 'screenshot' ? '截图' : item.type === 'video' ? '视频' : '录屏'),
        url: item.url
      }).then(() => {
        showStatus('分享成功');
      }).catch(err => {
        console.error('分享失败:', err);
        showStatus('分享失败');
      });
    } else {
      // 备用方案：复制到剪贴板
      navigator.clipboard.writeText(item.url).then(() => {
        showStatus('链接已复制到剪贴板');
      }).catch(err => {
        console.error('复制失败:', err);
        // 最终备用方案
        const textArea = document.createElement('textarea');
        textArea.value = item.url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showStatus('链接已复制到剪贴板');
      });
    }
  }

  // 删除项目
  function deleteItem(id) {
    if (confirm('确定要删除这个项目吗？')) {
      collections = collections.filter(item => item.id !== id);
      localStorage.setItem('screenCollections', JSON.stringify(collections));
      showCollections(); // 刷新列表
      showStatus('项目已删除');
    }
  }

  // 拖动功能
  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };

  controlPanel.addEventListener('mousedown', startDrag);
  controlPanel.addEventListener('touchstart', startDrag);

  function startDrag(e) {
    if (!e.target.closest('.tool-btn') && e.target !== mainControlBtn) return;
    
    isDragging = true;
    const rect = controlPanel.getBoundingClientRect();
    
    if (e.type === 'mousedown') {
      dragOffset.x = e.clientX - rect.left;
      dragOffset.y = e.clientY - rect.top;
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('mouseup', stopDrag);
    } else {
      dragOffset.x = e.touches[0].clientX - rect.left;
      dragOffset.y = e.touches[0].clientY - rect.top;
      document.addEventListener('touchmove', onDrag);
      document.addEventListener('touchend', stopDrag);
    }
    
    e.preventDefault();
  }

  function onDrag(e) {
    if (!isDragging) return;
    
    let clientX, clientY;
    
    if (e.type === 'mousemove') {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }
    
    const x = Math.max(0, Math.min(clientX - dragOffset.x, window.innerWidth - 40));
    const y = Math.max(0, Math.min(clientY - dragOffset.y, window.innerHeight - 40));
    
    controlPanel.style.left = x + 'px';
    controlPanel.style.top = y + 'px';
    controlPanel.style.right = 'auto';
  }

  function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', stopDrag);
    showStatus('控制面板位置已调整');
  }

  // 加载自定义颜色和下载任务
  loadCustomColor();
  updateDownloadManager();

  console.log('高级控制面板已加载！');
}

// 添加必要的库
const script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
document.head.appendChild(script1);