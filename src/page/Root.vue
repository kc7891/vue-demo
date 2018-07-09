<template>
    <div>
        <list-view 
            :memos="sharedState.memos" 
            @remove="remove" 
            :count="privateState.count" 
            :sort="sort">
        </list-view>
        <router-link :to="{name: 'items'}">Load all</router-link>
    </div>
</template>

<script>
    import ListView from '../components/ListView'
    import store from '../store'
    export default {
        data(){
            return {
                sharedState: store.state,
                privateState: {
                    count: 3,
                    sort: 'latest'
                }
            }
        },
        props: {
            memos: Array
        },
        methods: {
            remove(id) {
                store.actions.removeMemo(id)
            }
        },
        components: {
            ListView
        }
    }
</script>