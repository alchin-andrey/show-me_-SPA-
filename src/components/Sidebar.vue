<template>
    <div class="sidebar">
        <nav class="menu-wrapper">
            <nav-button
                @click="$router.push('/my_series')"
                :class="{active: activePath === '/my_series'}"
                icon="my_series.png"
                alt="img-1"
                title="Мои сериалы"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/profile')"
                :class="{active: activePath === '/profile'}"
                icon="profile.png"
                alt="img-2"
                title="Профиль"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/calendar')"
                :class="{active: activePath === '/calendar'}"
                icon="calendar.png"
                alt="img-3"
                title="Календарь"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/favorites')"
                :class="{active: activePath === '/favorites'}"
                icon="favorites.png"
                alt="img-4"
                title="Избранное"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/posts')"
                :class="{active: activePath === '/posts'}"
                icon="church.png"
                alt="img-6"
                title="Посты"
            >
            </nav-button>
            <nav-button
                @click="$router.push('/new_post')"
                :class="{active: activePath === '/new_post'}"
                icon="priest.png"
                alt="img-6"
                title="Добавить пост"
            >
            </nav-button>
        </nav>
    </div>
</template>

<script>


export default {
    name: "Sidebar",
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
    background-color: rgb(199, 199, 199);
}

.menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
}

.active {
    background-color: rgb(236, 130, 130);
}
</style>
