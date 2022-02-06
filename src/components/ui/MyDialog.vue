<template>
  <div v-if="shown">
    <transition name="modal" class="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click="shown = false">
          <div class="modal-container" @click.stop>
            <div div class="modal-container-2">
              <div div class="modal-container-3">
								<div div class="modal-container-4">
									<div div class="modal-container-5">
                <div class="modal-head">
                  <slot name="header"> default header </slot>
                </div>

                <div class="modal-body">
                  <slot name="body"> default body </slot>
                </div>

                <div class="modal-footer">
                  <slot name="footer">
                    <my-button 
                    class="modal-default-button" 
                    label="Да" 
                    type="button" 
                    @click="shown = false"/>
                    <my-button
                    class="modal-default-button"
                    label="Нет" 
                    type="button" 
                    @click="shown = false"/>
                  </slot>
                </div>
								</div>
								</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    show() {
      this.shown = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal {
  color: rgb(0, 0, 0);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 400px;
  margin: 0px auto;
  background-color: rgb(37, 43, 49);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgb(37, 43, 49);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  /* background: repeating-linear-gradient(
    45deg,
    rgb(58, 58, 58),
    rgb(58, 58, 58) 10px,
    #d11919 10px,
    #d11919 20px
  ); */
	border: 10px solid rgb(37, 43, 49);
}

.modal-container-2 {
	border-right: 15px solid rgb(37, 43, 49);
	border-left: 15px solid rgb(37, 43, 49);
}

.modal-container-3 {
	border-top: 15px dashed rgb(205, 205, 205);
	border-bottom: 15px dashed rgb(205, 205, 205);
  margin-top: -1px;
  margin-bottom: -1px;
}
.modal-container-4 {
	border-top: 15px dashed rgb(205, 205, 205);
	border-bottom: 15px dashed rgb(205, 205, 205);
  margin-top: -1px;
  margin-bottom: -1px;
}

.modal-container-5 {
	border-top: 10px solid rgb(37, 43, 49);
	border-bottom: 10px solid rgb(37, 43, 49);
	
  background-color: rgb(255, 255, 255);
}



.modal-head {
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
}

.modal-body {
  padding: 10px 0;
}

.modal-default-button {
  widows: 10px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer {
  display: flex;
}
</style>
