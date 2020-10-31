<template>
    <div v-show="showModal === true" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h2>{{ title }}</h2>
              <hr />
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{ text }}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button id="cancel" class="modal-button cancel" @click="onCancel">
                {{ cancelText }}
              </button>
              <button id="confirm" class="modal-button confirm" @click="onConfirm">
                {{ okText }}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DialogBox",
  data() {
    return {
      showModal: false,
      title: "",
      text: "",
      okText: "confirm",
      cancelText: "cancel"
    };
  },
  methods: {
    open: function(title, text, okText, cancelText) {
      this.title = title;
      this.text = text;
      this.okText = okText;
      this.cancelText = cancelText;
      this.showModal = true;
    },
    onCancel: function() {
      this.showModal = false;
    },
    onConfirm: function() {
      this.$emit("confirmres", true);
      this.showModal = false;
    }
  }
};
</script>

<style></style>
