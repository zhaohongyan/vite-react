# vite-react

- yarn create vite => react
- yarn add antd
- yarn add react-router
- yarn add react-router-dom
- yarn add less -D

### 工具类

- yarn add moment -D
- yarn add lodash -D

### 插件

- yarn add vite-plugin-import -D
- yarn add vite-plugin-style-import -D

### antd 主题色配置

- 主题色 & 自定义 css 全局变量

```js
const vars = {
  "primary-color": "#FF5B18",
  "link-color": "#FF5B18",
};
```

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;
  --adm-color-white: #ffffff;
  --adm-color-weak: #999999;
  --adm-color-light: #cccccc;
  --adm-border-color: #eeeeee;
  --adm-border-color2: #f0f0f0;
  --adm-font-size-main: 14px;
  --adm-color-text: #333333;
}
```

### 按需引用(antd)， vite 自动支持 js 按需引入，组件需要对 css 进行按需引入

- yarn add vite-plugin-import -D
  支持组件库有（antd, antd-mobile）
- yarn add vite-plugin-style-import -D
  支持组件库有（antd, ant-design-vue, vant, element-plus，@nutui/nutui)

### sourcemap

build.sourcemap

### eslint 配置
