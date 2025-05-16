<script setup>
import { useData, useRoute } from 'vitepress';
import { computed, onMounted } from 'vue';
import ContentLayout from './contentLayout.vue';
import index from './index.vue';
import { widthMode } from './store';
import './style.css';

const data = useData();
const route = useRoute();

widthMode.value = 'standard';
onMounted(() => {
    const savedWidth = localStorage.getItem('width');
    if (savedWidth) {
        widthMode.value = savedWidth;
    }
});

const widthModeString = computed(() => {
    switch (widthMode.value) {
        case 'standard':
            return '标准宽度';
        case 'narrow':
            return '窄';
        case 'wide':
            return '宽';
        case 'full':
            return '最大宽度';
    }
});

const widthModeColor = computed(() => {
    switch (widthMode.value) {
        case 'standard':
            return 'green';
        case 'narrow':
            return 'red';
        case 'wide':
            return 'blue';
        case 'full':
            return 'purple';
    }
});

const toggleWidth = () => {
    const modes = ['standard', 'narrow', 'wide', 'full'];
    widthMode.value = modes[modes.indexOf(widthMode.value) + 1] ? modes[modes.indexOf(widthMode.value) + 1] : 'standard';
    if (typeof window !== 'undefined') {
        localStorage.setItem('width', widthMode.value);
    }
};
</script>

<template>
    <header class="header">
        <div class="left">
            <a href="/"><img src="/icon.png" alt="wangyupu icon" height="40px" /></a>
            <div class="links">
                <span><a href="https://wangyupu.com">wangyupu</a></span>
                <a href="/">wangyupu's blog</a>
            </div>
        </div>
        <div>
            {{ data.page.value.title }}
        </div>
        <div>
            <button @click="toggleWidth">{{ widthModeString }}</button>
        </div>
    </header>
    <main class="content">
        <index v-if="route.path == '/'" />
        <ContentLayout v-else />
    </main>
</template>

<style scoped>
.header {
    border-bottom: 2px rgb(136, 136, 136) solid;
    background-color: black;
    color: white;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}

.left {
    display: flex;
    flex-direction: row;
}

.links {
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
    justify-content: center;
    width: 100%;
}

button {
    user-select: none;
    cursor: pointer;
    border-radius: 0;
    border: none;
    font-size: 102%;
    background-color: v-bind(widthModeColor);
    min-width: 80px;
    color: white;
}
</style>
