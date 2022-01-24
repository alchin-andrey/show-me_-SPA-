<template>
    <div class="sidebar">
        <nav class="menu-wrapper">
            <div class="menu_item" @click="$router.push('/my_series')" :class="{active: activePath === '/my_series'}">
                <div class="box">
                    <div class="sidebar__img"><img src="@/assets/s1_search.svg" alt=""></div>
                    <div class="sidebar__text">Мои сериалы</div>
                </div>
            </div>
            <nav-button
                @click="$router.push('/my_series')"
                :class="{active: activePath === '/my_series'}"
                img="@/assets/s1_search.svg"
                alt="img-1"
                title="Мои сериалы"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/profile')"
                :class="{active: activePath === '/profile'}"
                img="@/assets/s1_search.svg"
                alt="img-2"
                title="Профиль"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/calendar')"
                :class="{active: activePath === '/calendar'}"
                img="@/assets/s1_search.svg"
                alt="img-3"
                title="Календарь"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/favorites')"
                :class="{active: activePath === '/favorites'}"
                img="@/assets/s1_search.svg"
                alt="img-4"
                title="Избранное"
            >
            </nav-button>
        </nav>
    </div>
</template>

<script>
import NavButton from '@/components/NavButton.vue';

export default {
    name: "Sidebar",
    components: { 
        NavButton,
    },
    data () {
        return {
            activePath: "/",
        };
    },
    watch: {
        $route() {
            this.activePath = this.$route.path;
        },
    },
    methods: {
        GoTo(route) {
            this.$router.push(route);
        },
    },
};

</script>

<style scoped>
.sidebar {
    width: 100px;
}

.menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
}

.menu_item {
    font-family: "ReformaGroteskMediumC", sans-serif;
    font-size: 12px;
    line-height: 100%;
    font-weight: 500;
    letter-spacing: 0.105em;
    color: #000000;
    cursor: pointer;
}

.box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.active {
    background-color: rgb(236, 130, 130);
}
</style>
