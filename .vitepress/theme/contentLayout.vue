<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import { widthMode } from './store';
const data = useData();

const width = computed(() => {
    switch (widthMode.value) {
        case 'standard':
            return '960px';
        case 'narrow':
            return '700px';
        case 'wide':
            return '1200px';
        case 'full':
            return '98vw';
    }
});
</script>

<template>
    <article class="post">
        <div class="contentContainer">
            <div class="content">
                <Content />
            </div>
        </div>
        <hr />
        <span class="copyright">Copyright (c) wangyupu 2025. License under MIT License</span>
    </article>
</template>

<style scoped>
.post {
    flex: 1;
}

.contentContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.content {
    max-width: v-bind(width);
}

.dark .content ::v-deep(*) {
    color: white;
}

.copyright {
    display: block;
    width: 100%;
    text-align: center;
    padding-top: 3px;
    padding-bottom: 8px;
}

.dark .copyright {
    color: white;
}
</style>
