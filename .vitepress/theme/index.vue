<script setup>
import { useData, useRouter } from 'vitepress';
import { data as posts } from './pages.data.js';

const datas = useData();
const router = useRouter();
console.log(posts);
</script>

<template>
    <section class="index">
        <header class="header">
            <h1>wangyupu's blog</h1>
        </header>
        <main class="posts">
            <div v-for="item in posts" class="postCard" @click="router.go(item.url)">
                <div>
                    <h1 class="postTitle">{{ item.title }}</h1>
                    <span>{{ item.description }}</span>
                </div>

                <div>
                    <hr />
                    <span>{{ item.date.string }}</span>
                </div>
            </div>
        </main>
    </section>
</template>

<style scoped>
.index {
    max-width: 2500px;
    flex: 1;
}

.dark .index {
    background-color: #2a2a2a;
}

.header {
    margin: 30px;
    background-image: repeating-linear-gradient(-45deg, black, black 20px, #535353 20px, #535353 40px);
    color: white;
    height: 100px;
    padding: 10px;
    background-clip: border-box;
    margin-bottom: 0px;
}

.header h1 {
    float: right;
}

.postCard {
    cursor: pointer;
    padding: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 130px;
    box-shadow: 0px 3px 4px 0px #00000055;
}

.postTitle {
    margin: 0;
}

.posts {
    padding: 30px;
}

.dark .posts {
    color: white;
}

.posts .postCard:nth-child(odd) {
    background-color: rgb(171, 235, 255);
}

.posts .postCard:nth-child(even) {
    background-color: rgb(132, 226, 255);
}

.dark .posts .postCard:nth-child(odd) {
    background-color: rgb(125, 177, 193);
}

.dark .posts .postCard:nth-child(even) {
    background-color: rgb(103, 175, 195);
}
</style>
