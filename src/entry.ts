import { App } from "vue";
import SButton from "./button";
import JSXButton from "./JSXButton";
import "uno.css";
// 导出单独组件
export { SButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(JSXButton.name, JSXButton);
  },
};
