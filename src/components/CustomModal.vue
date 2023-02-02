<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <header class="modal-header">
           <slot name="header"> This is the default title! </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            v-if="showCloseBtn"
          >
            x
          </button>
        </header>

        <section class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showCloseBtn: Boolean,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
}

.modal {
  background: white;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  border-radius: 20px;
}

.modal-content{
    padding: 10px 0;
}

.modal-header,
.modal-footer {
  padding: 15px;
}

.modal-header {
  position: relative;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 10px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}
</style>