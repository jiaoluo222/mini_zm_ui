<template>
  <div class="v-message">
    <div
      v-for="(config, index) in messageList"
      :key="config.id"
      :ref="
        (el) => {
          if (el) contentList[index] = el;
        }
      "
      :class="[
        'message-item',
        config.customClass,
        config.type,
        { center: config.center },
      ]"
    >
      <i :class="[config.iconClass, 'icon']"></i>
      <p class="content">{{ config.message }}</p>
      <i
        class="close iconfont icon-guanbi1"
        @click="close(config)"
        v-if="config.showClose"
      ></i>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "k-Message",
  setup() {
    // 消息列表
    const messageList = ref([]);
    // ref列表
    const contentList = ref([]);

    const message = (options) => {
      computedConfig(options);
    };

    const success = (options) => {
      computedConfig(options, "success");
    };

    const warning = (options) => {
      computedConfig(options, "warning");
    };

    const error = (options) => {
      computedConfig(options, "error");
    };

    const computedConfig = (options, type) => {
      var option = options || {};
      type && (option.type = type);
      const config = {
        type: option.type || "prompt", // 没传消息类型就是默认消息
        message: option.message || "",
        iconClass: option.iconClass || computedIconClass(type || "prompt"),
        customClass: option.customClass,
        duration: option.duration >= 0 ? option.duration : 3000,
        showClose: option.showClose,
        center: option.center,
        onClose: option.onClose,
        id: Math.floor(new Date()),
      };
      messageList.value.push(config);
      // 如果延时不等于0，就要设置消失时间
      if (config.duration !== 0) {
        setTimeout(() => {
          contentList.value[0].className += " messageHide";
          setTimeout(() => {
            messageList.value.splice(0, 1);
          }, 200);
        }, config.duration + messageList.value.length * 100);
      }
    };

    const computedIconClass = (type) => {
      switch (type) {
        case "prompt":
          return "iconfont icon-tishi";
        case "success":
          return "iconfont icon-success";
        case "warning":
          return "iconfont icon-jinggao--";
        case "error":
          return "iconfont icon-cuowu";
      }
    };

    const close = (config) => {
      const index = messageList.value.findIndex(
        (item) => item.id === config.id
      );
      if (index !== -1) {
        contentList.value[index].className += " messageHide";
        setTimeout(() => {
          messageList.value.splice(index, 1);
          config.onClose && config.onClose(config);
        }, 200);
      }
    };

    return {
      messageList,
      contentList,
      close,
      message,
      success,
      warning,
      error,
    };
  },
});
</script>
