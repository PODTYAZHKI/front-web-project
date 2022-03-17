<template >
    <div>
        <v-btn depressed color="accent" small>{{post.category}}</v-btn>
            <h3 class="text-h6 font-weight-bold primary--text py-3">
                {{post.title}}
            </h3>
            <p v-if="post.subtitle" class="text-h6 font-weight-regular pt-3 text--secondary">
                {{post.subtitle}}
            </p>
        <div class="d-flex align-center">
            <v-avatar color="accent" size="24">
                <v-icon dark small>mdi-grease-pencil</v-icon>
            </v-avatar>
            <div class="pl-2">{{`${post.author} · ${post.date}`}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'post',
    ]
}
</script>
<style lang="">
    
</style>