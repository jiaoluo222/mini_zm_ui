import { defineComponent, createVNode, createTextVNode } from "vue";
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const SButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    console.log(props2.color);
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
      py-${size[props2.size].y}
      px-${size[props2.size].x}
      ${props2.round ? "rounded-full" : "rounded-lg"}
      bg-${props2.color}-${props2.plain ? "100" : "500"}
      hover:bg-${props2.color}-400
      border-${props2.color}-${props2.plain ? "500" : "500"}
      cursor-pointer
      border-solid
      text-${props2.plain ? props2.color + "-500" : "white-500"}
      text-${size[props2.size].text}
      hover:text-white
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
      `
    }, [createTextVNode("         "), props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SButton,
  entry as default
};
