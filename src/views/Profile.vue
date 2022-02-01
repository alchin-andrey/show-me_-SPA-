<template>
    <div class="about">
        <div>Анкета (зарегестрированного пользователя)</div>
        <form class="login" @submit.prevent="login">
            <my-textarea
                label="Сообщение:" 
                v-model="message" 
                way="message" 
                placeholder="Ваше сообщение" 
                name="email"
                rows="2"
            />

            <my-input
            label=""
            v-model="password_confirmation"
            way="password_confirmation"
            type="date"
            placeholder="Повторите пароль *"
            name="password_confirmation"
        />

            <my-checkbox v-model="checked1" way="1" name="" value="Есть ребёнок" label="Есть ребёнок"/>
            <my-checkbox v-model="checked2" way="2" name="" value="Женат" label="Женат"/>   
            <div class="flex">
            <my-radio-arr :options="radioOprions" v-model="picked" way="yes"/>
            </div>
            <my-select :options="selectOprions" v-model="selected" way="select" label="Выбрать цифру"/>


                <my-button label="Диалог" type="" @click="showDialog"/>
                <my-dialog ref="dialog">
                    <template #header>Заголовок</template>
                    <template #body>Вы уверены в своей уверенности?</template>
                    <template #footer></template>
                </my-dialog>

            <div class="flex">
                <my-button label="+" type="" @click="doInc"/>
                <my-button label="-" type="" @click="doDec"/>
                <my-button label="Обнулить" type="" @click="doZero"/>
            </div>


        </form>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            message: null,
            checked1: false,
            checked2: false,
            picked: null,
            radioOprions: [ 
                {
                label: 'Да',
                name: 'yes',
                },
                {
                label: 'Нет',
                name: 'no',
                },
            ],
            selected: null,
            selectOprions: [ 
                {
                text: '1',
                value: '1',
                },
                {
                text: '2',
                value: '2',
                },
            ],
        };
    },
    methods: {
        GoTo(route) {
            this.$router.push(route);
        },
        showDialog() {
            this.$refs.dialog.show();
        },
        stopDialog() {
            this.$refs.dialog.shown = false;
        },
        doInc () {
            this.$store.commit('a/increment');
        },
        doDec () {
            this.$store.commit('a/decrement');
        },
        doZero () {
            this.$store.dispatch('a/setZero');
        },
    },
};

</script>

<style scoped>

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 10px;
}

</style>