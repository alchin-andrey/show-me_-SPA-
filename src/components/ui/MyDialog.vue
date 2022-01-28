<template>
    <div v-if="shown">
    <transition name="modal" class="modal">
        <div class="modal-mask">
        <div class="modal-wrapper" @click="shown = false">
            <div class="modal-container" @click.stop>

            <div class="modal-head">
                <slot name="header">
                default header
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                default body
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                <my-button class="modal-default-button" label="Ok" type="" @click="shown = false"/>
                <my-button label="Отмена" type="" @click="shown = false"/>
                </slot>
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
    data () {
        return {
            shown: false,
        };
    },
    methods: {
        show () {
            this.shown = true;
        },
    },
};
    
</script>

    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal {
    color: rgb(255, 255, 255);
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
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgb(58, 58, 58);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-head {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
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