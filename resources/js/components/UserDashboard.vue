<template>
    <div class="user-dashboard">
        <div class="list-user-comp">
            <h4>List User: {{userTotal}}</h4>
            <ListUser></ListUser>
        </div>
        <hr>
        <div class="user-detail-comp">
            <h4>User Detail</h4>
            <UserDetail></UserDetail>
        </div>
    </div>
</template>

<script>    
    import {mapGetters} from 'vuex'
    import ListUser from './ListUser.vue'
    import UserDetail from './UserDetail.vue'
    export default {
        components: {
            ListUser,
            UserDetail
        },
        computed: {
            ...mapGetters({
                userTotal: 'detail/userTotal'
            })
        }
    }
</script>

<style lang="scss" scoped>
</style>
