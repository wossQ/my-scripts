# 个人配置文件合集
自用工具配置、脚本、代理规则的统一存储仓库，方便多设备同步与备份。

personal-configs/
├── README.md               # 项目说明文档（自动生成）
├── .gitignore              # 忽略不需要上传的文件
├── mihomo-overrides/       # Mihomo Party 覆写配置（YAML文件）
│   ├── js-design-direct.yaml  # 即时设计直连规则
│   └── onedrive-business-direct.yaml  # OneDrive直连规则
├── tampermonkey-scripts/   # 篡改猴脚本（JS文件）
│   ├── ad-block.user.js
│   └── auto-refresh.user.js
└── other-configs/          # 其他工具配置（软件配置、环境变量等）
    ├── vscode-settings.json
    └── other-rules.yaml

## 目录说明
### 1. overrides
Mihomo Party 覆写规则（YAML 格式），强制指定域名/进程直连，解决代理访问异常问题
- `js-design-direct.yaml`：即时设计(js.design) 全功能直连规则
- `onedrive-business-direct.yaml`：OneDrive 商业版 专属直连规则

### 2. tampermonkey
篡改猴(TamperMonkey) 用户脚本，用于浏览器功能增强、广告屏蔽等
- 脚本命名规范：`功能描述.js`，支持直接导入篡改猴插件

### 3. configs
其他工具配置文件（VSCode、系统环境、软件配置等）

## 使用方法
1. **Mihomo 规则**：复制 YAML 内容，粘贴到 Mihomo Party 覆写配置中启用
2. **篡改猴脚本**：在浏览器中打开脚本文件，点击「安装」即可导入
3. 多设备同步：直接克隆仓库到本地，覆盖对应配置文件
