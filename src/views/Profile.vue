<template>
    <div class="about">
        <div>Анкета (зарегестрированного пользователя)</div>
        <form class="login" @submit.prevent="login">
            <my-textarea
                label="Сообщение" 
                v-model="message" 
                way="message" 
                placeholder="Ваше сообщение" 
                name="email"
                rows="8"
            />
            <my-checkbox v-model="checked1" way="1" name="" value="Есть ребёнок" label="Есть ребёнок"/>
            <my-checkbox v-model="checked2" way="2" name="" value="Женат" label="Женат"/>

            <div>
                <my-radio v-model="picked" way="yes" name="yes" value="Да" label="Да"/>
                <my-radio v-model="picked" way="no" name="no" value="Нет" label="Нет"/>
                <div>Выбрано: {{picked}}</div>
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
        };
    },
};

</script>
